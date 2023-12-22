"use client";

import React from "react";

import { useQuery, useMutation } from "@tanstack/react-query";

import {
  fetchBasket,
  addToBasket,
  deleteFromBasket,
  deleteBasket,
} from "../utils/Mybasket/basket";

const Basket = () => {
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

  if (isLoading) return <p>Loading...</p>;

  return (
    // <div classNameName="container mx-auto mt-8">
    //   <h1 classNameName="text-3xl font-semibold mb-4">Basket</h1>
    //   <ul>
    //     {data.map((item: any) => (
    //       <li
    //         key={item.id}
    //         classNameName="border-b border-gray-300 py-4 flex items-center justify-between">
    //         <div classNameName="flex items-center">
    //           <img
    //             src={item.item.image}
    //             alt={item.item.name}
    //             classNameName="mr-4 w-20 h-20 object-cover rounded-full"
    //           />
    //           <div>
    //             <span classNameName="text-lg font-semibold">{item.item.name}</span>
    //             <div classNameName="text-gray-600">
    //               <span>{item.item.price}</span><br/>
    //               <span>{item.item.description}</span>
    //             </div>
    //           </div>
    //         </div>
    //         <button
    //           onClick={() => {handleDeleteFromBasket.mutate({itemId:item.item.id,userId:user.id})
    //           window.location.reload();
    //           }

    //           }
    //           classNameName="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
    //           Remove
    //         </button>
    //       </li>
    //     ))}
    //   </ul>

    //   </div>
    <div className=" h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Basket</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 mb-4">
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
                  {data.map((item: any) => (
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={item.item.image}
                            alt="Product image"
                          />
                          <span className="font-semibold">{item.item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">{item.item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">{item.item.price}</td>
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
