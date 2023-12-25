'use client'
import React, { useRef } from "react";
import { updateCreatorData, getCreatorData } from "@/app/utils/creatorQueries/creator";
import { useRouter } from "next/navigation";

const EditProfile = () => {
    const currentUserString = window.localStorage.getItem('currentUser');
    const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
    console.log(currentUser.id,"test");
    const updateCreator = updateCreatorData()


    const fullName = useRef<HTMLInputElement>(null)
    const userName = useRef<HTMLInputElement>(null)
    const status = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const address = useRef<HTMLInputElement>(null)
    const dateBirth = useRef<HTMLInputElement>(null)
    const bio = useRef<HTMLTextAreaElement>(null)
    const router = useRouter()

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

                const obj = {
                  fullName: fullName.current?.value,
                  userName: userName.current?.value,
                  status: status.current?.value === "false" ? false : true,
                  email : email.current?.value,
                  address: address.current?.value,
                  dateBirth: dateBirth.current?.value,
                  bio: bio.current?.value
                  }
                  console.log(obj,'test');
                  
                updateCreator.mutate({creatorId:currentUser.id,creator:obj})
                router.push(`/home/profile/${currentUser.id}`)
                

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
              src={currentUser.pfImage}
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
                  ref={fullName}
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
                ref={userName}
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
                id="status"
                className="border-1 px-4 py-2 w-full rounded-full"
                type="status"
                defaultValue={currentUser.status}
                ref={status}
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
                ref={email}
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
                ref={address}
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
                id="date"
                className="border-1 px-4 py-2 w-full rounded-full"
                type="date"
                defaultValue={currentUser.dateBirth}
                ref={dateBirth}
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
                ref={bio}
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
