"use client";

import React from "react";

import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";

import {
  fetchBasket,
  addToBasket,
  deleteFromBasket,
} from "../utils/Mybasket/basket";

const Basket = () => {
  const user = JSON.parse(window.localStorage.getItem("currentUser"));
  console.log(user);
  
  
  const queryClient = new QueryClient();

  const handleDeleteFromBasket = useMutation({
    mutationFn: (itemId: string ) => deleteFromBasket(itemId, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });

  const handleAddToBasket = useMutation({
    mutationFn: (itemId: string) => addToBasket(itemId, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["basket", user.id],
    queryFn: () => fetchBasket(user.id),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Basket</h1>
      <ul>
        {data.map((item: any) => (
          <li
            key={item.id}
            className="border-b border-gray-300 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={item.item.image}
                alt={item.item.name}
                className="mr-4 w-20 h-20 object-cover rounded-full"
              />
              <div>
                <span className="text-lg font-semibold">{item.item.name}</span>
                <div className="text-gray-600">
                  <span>{item.item.price}</span><br/>
                  <span>{item.item.description}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDeleteFromBasket.mutate(item.item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Remove
            </button>
          </li>
        ))}
      </ul>
      
      </div>
    
  );
};

export default Basket;
