import React from "react";
// import { useMutation } from "react-query";
import axios from "axios";

import { useQuery, useMutation } from "@tanstack/react-query";

// const queryClient = new QueryClient();

export const fetchBasket = async (Id: any) => {
  const response = await axios.get(`http://localhost:3001/baskets/${Id}`);

  return response.data;
};

export const deleteBasket = () => {
  const query = useMutation({
    mutationKey: ["deleteFromBasket"],
    mutationFn: async (object: { itemId: any; userId: any }) => {
      const response = await axios.delete(
        `  http://localhost:3001/baskets/${object.userId}/${object.itemId}`
      );
      return response.data;
    },
  });
  return query;
};

export const addToBasket = () => {
  const query = useMutation({
    mutationKey: ["deleteFromBasket"],
    mutationFn: async (object: { userId: any; itemId: any }) => {
      const response = await axios.delete(
        `  http://localhost:3001/baskets/${object.userId}/${object.itemId}`
      );
      console.log(response);
      return response.data;
    },
  });
  return query;
};
