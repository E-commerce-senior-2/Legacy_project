"use client"
import React, { useState } from 'react'
import {getCreators} from "../../utils/followingCreators/FollowingCreators"
import { MdVerified } from "react-icons/md";
import { Toaster, toast } from "sonner";
import axios from 'axios'
import Link from 'next/link';


const allCreators=()=>{
    const {data,isLoading,isError}=getCreators()
    if(isLoading)<h1>Is Loading...</h1>
    if(isError)<h1>{isError}</h1>

    return(
        <div className="grid grid-cols-3 lg:grid-row mb-12 gap-10  w-full">
            {data?.map((creator:any)=>{
                return <Creators key={creator.id} {...creator} />
                
            })}
        </div>
    )
}


const Creators: React.FC  = ({ id, fullName, pfImage, bgImage, bio, status }: any) => {
    const currentUserString = window.localStorage.getItem("currentUser");
    const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
    const [follow, setFollow] = useState(false);
  
    // // Add New Follower from the Creator:
    const newFollower = async (idCreator: string) => {
      try {
        await axios.post(
          `http://localhost:3001/followingCreator/${idCreator}/${currentUser.id}`
        );
      } catch (err) {
        console.log(err);
      }
    };
    //Remove Follower from the Creator:
    const removeFollow = async (idCreator: string) => {
      try {
        await axios.delete(
          `http://localhost:3001/followingCreator/${idCreator}/${currentUser.id}`
        );
      } catch (err) {
        console.log(err);
      }
    };

    return(
            <Link href={`/home/profile/${id}`}>
              <div 
                key={id}
                className="md:max-w-sm lg:max- xl:max md:mx-auto lg:mx-auto xl:mx-auto mt-12 bg-[#ffffff97] shadow-xl rounded-lg text-gray-900"
                >
                
                <div className="rounded-t-lg h-38 overflow-hidden">
                  <img
                    className="object-cover object-top w-full h-48"
                    src={bgImage}
                    alt="Image Not Found"
                    />
                </div>
        
                <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-[#5a57559f] rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center h-full w-60"
                    src={pfImage}
                    alt="Image Not Found"
                    />
                </div>
        
                <div className="text-center mt-2 relative flex flex-col  items-center">
                  <span className="flex items-center gap-2 ">
                    <h2 className="font-semibold">{fullName} </h2>
                    <MdVerified className="  text-[#4869d5] " />
                  </span>
                  <p className="text-[#7e7e7e] ">{bio}</p>
                </div>
        
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                  <li className="flex flex-col items-center justify-around">
                    <svg
                      className="w-4 fill-current text-[#2c2420b5]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <div>2k</div>
                  </li>
                  <li className="flex flex-col items-center justify-between">
                    <svg
                      className="w-4 fill-current text-[#2c2420b5]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      >
                      <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                    </svg>
                    <div>10k</div>
                  </li>
                  <li className="flex flex-col items-center justify-around">
                    <svg
                      className="w-4 fill-current text-[#2c2420b5]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      >
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <div>15</div>
                  </li>
                </ul>
        
                <div className="p-4 border-t mx-8 mt-2">
                  {!follow && (
                    <button
                    onClick={() => {
                      !currentUser
                      ? toast.error("You Need Login First")
                      : newFollower(id),
                      currentUser ? setFollow(true) : "";
                    }}
                    className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                    >
                      {" "}
                      Follow <Toaster richColors />
                    </button>
                  )}
                  {follow && (
                    <button
                    onClick={() => {
                      window.confirm(`Are you sure to unfollow ${fullName}`),
                      removeFollow(id),
                      setFollow(false);
                    }}
                    className="w-1/2 block mx-auto rounded-full bg-[#09080876] hover:shadow-lg font-semibold text-white px-6 py-2"
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </div>
</Link>
            
          );
    
}



const AllProfile = () => {
  
  return (
    <>
    {allCreators()}
    </>
  )
}






export default AllProfile