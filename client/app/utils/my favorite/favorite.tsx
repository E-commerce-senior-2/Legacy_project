import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const fetchData = async (id: any) => {
  const response = await axios.get(`http://localhost:3001/favoriteItem/${id}`);

  return response.data;
};

export const deleteItem = () => {
  const query = useMutation({
    mutationKey: ["deletefavoirelist"],
    mutationFn: async (object: { itemId: any; userId: any }) => {
      const response = await axios.delete(
        `http://localhost:3001/favoriteItem/${object.itemId}/${object.userId}`
        
      );
      return response.data;
    },
  });
  return query;
};
