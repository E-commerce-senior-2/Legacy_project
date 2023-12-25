"use client";

import {  useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { deleteItem, fetchData } from "../utils/my favorite/favorite";

export const MyFavorite = () => {
  const currentUserString = window.localStorage.getItem("currentUser") || "";
  const user = JSON.parse(currentUserString);

  const { data, isLoading } = useQuery({
    queryKey: ["fetchData", user.id],
    queryFn: () => fetchData(user.id),
  });

  const handledeletefavoirelist = deleteItem();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="mb-6 flex justify-center items-center flex-col">
      <h1 className="flex justify-center font-bold text-Liver text-3xl mb-2">
        Your favorite items
      </h1>
      <div className="grid min-h-screen w-full p-10 justify-items-center gap-6 grid-cols-1 lg:grid-cols-3 flex-wrap items-center justify-center bg-PaleDogwood leading-3 md:grid-cols-2">
        {data &&
          data.map((item: any) => (
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
                  <p className="rounded-full bg-gray-200  hover:bg-red-500 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    <MdDelete
                      className="text-xl w-8"
                      onClick={() => {
                        handledeletefavoirelist.mutate({
                          itemId: item.id,
                          userId: user.id,
                        });
                        window.location.reload();
                      }}
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
