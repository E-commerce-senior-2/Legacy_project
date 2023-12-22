'use client'
import React from "react";
import { updateCreatorData, getCreatorData } from "@/app/utils/creatorQueries/creator";

const EditProfile = () => {
    const currentUserString = window.localStorage.getItem('currentUser');
    const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
    console.log(currentUser.id);
    const updateCreator = updateCreatorData()
    

  return (
    <div className="h-full p-10">
      <div className=" block md:flex rounded-lg">
        <div className="w-full md:w-2/5 p-8 sm:p-6 lg:p-8 my-auto rounded-lg shadow-md ">
          <div className="flex justify-between">
            <span className="text-xl font-semibold block">Creator Profile</span>
            <button
              className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
              onClick={()=>{
                updateCreator.mutate(currentUser.id)
                
              }}
            >
              Edit
            </button>
          </div>

          <span className="text-gray-600">
            This information is secret so be careful
          </span>
          <div className="w-full p-8 mx-2 flex justify-center">
            <img
              id="showImage"
              className="max-w-xs w-36 h-36 items-center rounded-full border"
              src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 p-8 rounded-lg lg:ml-4 shadow-md">
          <div className="rounded   p-6">
            <div className="pb-6">
              <label
                htmlFor="name"
                className="font-semibold text-gray-700 block pb-1"
              >
                Full Name
              </label>
              <div className="flex">
                <input
                  id="username"
                  className="border-1 px-4 py-2 w-full rounded-full"
                  type="text"
                  defaultValue={currentUser.fullName}
                />
              </div>
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Username
              </label>
              <input
                id="email"
                className="border-1 px-4 py-2 w-full rounded-full"
                type="email"
                defaultValue={currentUser.userName}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Status
              </label>
              <input
                id="email"
                className="border-1 px-4 py-2 w-full rounded-full"
                type="email"
                defaultValue={currentUser.status}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Email
              </label>
              <input
                id="email"
                className="border-1 px-4 py-2 w-full rounded-full"
                type="email"
                defaultValue={currentUser.email}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Address
              </label>
              <input
                id="email"
                className="border-1 px-4 py-2 w-full rounded-full"
                type="email"
                defaultValue={currentUser.address}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Date of Birth
              </label>
              <input
                id="email"
                className="border-1 px-4 py-2 w-full rounded-full"
                type="date"
                defaultValue={currentUser.dateBirth}
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
                defaultValue={currentUser.bio}
              >
                Bio
              </label>
              <textarea
                id="email"
                className="border-1 px-4 py-2 w-full rounded-full"
              ></textarea>

            </div>
            <span className="text-gray-600 pt-4 block opacity-70">
              Personal login information of your account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
