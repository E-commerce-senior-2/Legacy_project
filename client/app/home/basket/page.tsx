"use client";
import { AiOutlineDelete } from "react-icons/ai";import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  fetchBasket,
  deleteBasket,
  addToBasket,
} from "@/app/utils/Mybasket/basket";
import { TiDelete } from "react-icons/ti";
interface CountedItem {
  item: object;
  quantity: number;
}
const Basket = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

 

  const currentUserString = window.localStorage.getItem("currentUser") || "";
  const user = JSON.parse(currentUserString);
  console.log(user.id, "id");

  const handleDeleteFromBasket = deleteBasket();
  const handleadaddToBasket = addToBasket();

  const { data, isLoading } = useQuery({
    queryKey: ["basket", user.id],
    queryFn: () => fetchBasket(user.id),
  });
  console.log(data);

  const addingToBasket = (idItem: any) => {
    handleadaddToBasket.mutate({
      itemId: idItem,
      userId: user.id,
    });
    setQuantity(quantity + 1);
  };

  function countItemRepetitions(basket: object[]): CountedItem[] {
    const itemCounts: Record<number, CountedItem> = {};

    basket?.forEach((item: any) => {
      const itemId = item.itemId;
      if (itemCounts[itemId]) {
        itemCounts[itemId].quantity++;
      } else {
        itemCounts[itemId] = {
          item: item,
          quantity: 1,
        };
      }
    });
    const resultArray: CountedItem[] = Object.values(itemCounts);

    return resultArray;
  }
  const itemRepetion = countItemRepetitions(data);
  

  useEffect(() => {
    // Calculate total price when data changes
    if (data) {
      const newTotalPrice = itemRepetion.reduce(
        (total, item:any) => total + item.item.item.price * item.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    }
  }, [data, itemRepetion]);







  
  if (isLoading) return <p>Loading...</p>;

  return (
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
                  {itemRepetion?.map((item: any) => (
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src={item.item.item.image[0]}
                            alt="Product image"
                          />
                          <span className="font-semibold">
                            {item.item.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">{item.item.item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                             className="border rounded-md py-2 px-4 ml-2 hover:text-white hover:bg-blue-300"
                            onClick={() => {
                              if (item.quantity === 1) {
                                handleDeleteFromBasket.mutate({
                                  itemId: item.item.item.id,
                                  userId: user.id,
                                });
                                window.location.reload();
                              }
                            }}
                          >
                            -
                          </button>
                          <span className="text-center w-8">
                            {item.quantity}{" "}
                          </span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2 hover:text-white hover:bg-blue-300"
                            onClick={() => {
                              addingToBasket(item.item.itemId);
                              window.location.reload();

                              console.log(item);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{item.item.item.price * item.quantity}</td>

                      <div
                        onClick={() => {
                          handleDeleteFromBasket.mutate({
                            itemId: item.item.item.id,
                            userId: user.id,
                          });
                          window.location.reload();
                        }}
                      >
                        <AiOutlineDelete 

                         className="text-xl w-15 h-5 hover:text-red-500 cursor-pointer"
                        />
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-10">
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
                <span className="font-semibold">${(totalPrice+1.99).toFixed(2)}</span>
              </div>
              <a href="https://buy.stripe.com/test_aEUdRi5g35pw86IaEE" className="bg-orange-300 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
