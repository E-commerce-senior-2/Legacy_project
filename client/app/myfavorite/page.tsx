'use client'
import axios from "axios";

import { useMutation ,useQueryClient,useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";


import { deleteItem, fetchData } from "../utils/userQueries/my favorite/myfaverte";


const MyFavorite = () => {
  // const { currentUser } = useContext(UserContext);
  // const id = currentUser.id;

  const { data: favorite, isLoading, isError } = id
  ? fetchData(id)
  : { data: null, isLoading: false, isError: false };
  const queryClient = useQueryClient();
  console.log(queryClient);
  

  const deleteItemMutation = useMutation({
    mutationFn: (itemId: string) => deleteItem(itemId, id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey : ["favoriteItems"]});
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: </div>;
  }

  return (
    <div className="mb-6 flex justify-center items-center flex-col">
      <h1 className="flex justify-center font-bold text-Liver text-3xl mb-2">
        Your favorite items
      </h1>
      <div className="grid min-h-screen w-full p-10 justify-items-center gap-6 grid-cols-1 lg:grid-cols-3 flex-wrap items-center justify-center bg-PaleDogwood leading-3 md:grid-cols-2">
        {favorite &&
          favorite.map((item:any) => (
            <div
              key={item.id}
              className="max-w-xs cursor-pointer rounded-lg bg-Liver p-4 shadow duration-150 hover:scale-105 hover:shadow-md"
            >
              <img
                src={item.image}
                className="item-image m-auto h-[200px] w-fit self-center transition-all hover:scale-125"
                alt=""
              />
              <div>
                <div className="my-6 flex items-center justify-between px-4">
                  <p className="font-bold text-Alabaster leading-4 mr-2">
                    {item.name}
                  </p>
                  <p className="rounded-full bg-VanDyke px-2 py-0.5 text-xs font-semibold text-white">
                    ${item.price}
                  </p>
                </div>

                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Delete</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    <MdDelete
                      className="text-xl w-8"
                      onClick={() => deleteItemMutation.mutate(item.id)}
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyFavorite;
