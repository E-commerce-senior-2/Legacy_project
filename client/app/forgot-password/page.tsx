'use client'
import React, { useRef } from "react";
import { forgotPassword } from "../utils/userQueries/user";

const ForgotPassword = () => {
    const email = useRef<HTMLInputElement | null>(null);
    const forgotPwd = forgotPassword()

    const handleSendClick = (e:any)=>{
        console.log(email.current?.value); 
        forgotPwd.mutate(email.current?.value)
        
    }


  return (
    <div className=" flex h-screen flex-col items-center justify-center lg:flex-row  ">
      <div className=" ml-10 h-fit  w-fit flex-col rounded-[10px] bg-white bg-opacity-20 p-5">
        <div className="font-['SF  Pro Display'] p-6 text-center text-3xl font-extrabold tracking-tight text-gray-600">
          Reset Password
        </div>
        <div className="mb-6 w-full">
          <input
            type="email"
            className="peer border-b w-full border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-blue-700 focus:outline-none"
            placeholder="E-mail"
            ref={email}
          />
        </div>
        <button 
        className="float-right mb-5  mt-3 rounded-full bg-[#733709] px-4 py-2 text-white transition duration-200 ease-in-out hover:bg-[#DC9D6D] focus:outline-none active:bg-[#B27F58]"
        onClick={handleSendClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
