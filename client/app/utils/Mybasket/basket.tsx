import React from "react";
import { QueryClient } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

export const fetchBasket = async (Id: any) => {
  const response = await axios.get(`http://localhost:3001/baskets/${Id}`);
  return response.data;
};

export const addToBasket = async (userId: any, itemId: any) => {
  const response = await axios.post(
    `  http://localhost:3001/baskets/${userId}/${itemId}`
  );
  return response.data;
};

export const deleteFromBasket = async (userId: any, itemId: any) => {
  const response = await axios.delete(
    `  http://localhost:3001/baskets/${userId}/${itemId}`
  );
  return response.data;
};
