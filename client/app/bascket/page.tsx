"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  fetchBasket,
  addToBasket,
  deleteBasket,
} from "../utils/Mybasket/basket";

const Basket = () => {
  const [quantity, setQuantity] = useState(1);

  const currentUserString = window.localStorage.getItem("currentUser") || "";
  const user = JSON.parse(currentUserString);
  console.log(user.id, "id");

  const handleDeleteFromBasket = deleteBasket();

  // const handleAddToBasket = useMutation({
  //   mutationFn: (itemId: string) => addToBasket(itemId, user.id),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["basket"] });
  //   },
  // });

  const { data, isLoading } = useQuery({
    queryKey: ["basket", user.id],
    queryFn: () => fetchBasket(user.id),
  });

  const getTotalPrice = (ele: any) => {
    return (ele.product.price * quantity).toFixed(2);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className=" h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Basket</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-whit e bg-opacity-50 rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item: any) => (
                  
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={item.item.image}
                            alt="Product image"
                          />
                          <span className="font-semibold">
                            {item.item.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">{item.item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={() => decrementQuantity()}
                          >
                            -
                          </button>
                          <span className="text-center w-8">  </span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={() => incrementQuantity()}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">{item.item.price}</td>
                      <div>
                        <button
                          onClick={() => {
                            handleDeleteFromBasket.mutate({
                              itemId: item.item.id,
                              userId: user.id,
                            });
                            window.location.reload();
                          }}
                          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                        >
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Remove
                          </span>
                        </button>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$19.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$21.98</span>
              </div>
              <button className="bg-orange-300 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
