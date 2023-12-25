"use client";

import React, { useRef, useState } from "react";
import { updatePassword } from "@/app/utils/userQueries/user";
import { useRouter } from "next/navigation";

const resetPassword = ({ params }: any) => {
  const newPassword = useRef<HTMLInputElement | null>(null);
  const confirmPassword = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");
  const updatePwd = updatePassword();
  const router = useRouter();
  const handleResetPassword = (e: any) => {
    if (newPassword.current?.value !== confirmPassword.current?.value) {
      setError("Passwords are not the same !");
      return;
    } else {
      updatePwd.mutate({
        id: params.id,
        token: params.token,
        password: newPassword.current?.value,
      });
      if (updatePwd.isSuccess) {
        router.push("/signIn");
      }
    }
  };

  return (
    <div className=" flex h-screen flex-col items-center justify-center lg:flex-row  ">
      <div className=" ml-10 h-fit  w-fit flex-col rounded-[10px] bg-white bg-opacity-20 p-5">
        <div className="font-['SF  Pro Display'] p-6 text-center text-3xl font-extrabold tracking-tight text-gray-600">
          Reset Password
        </div>
        <div className="mb-6 w-full">
          <input
            type="password"
            className="peer border-b w-full border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-blue-700 focus:outline-none"
            placeholder="New Password"
            ref={newPassword}
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="password"
            className="peer border-b w-full border-gray-300 bg-inherit py-1 transition-colors focus:border-b-2 focus:border-blue-700 focus:outline-none"
            placeholder="Confirm Password"
            ref={confirmPassword}
          />
        </div>
        <button
          className="float-right mb-5  mt-3 rounded-full bg-[#733709] px-4 py-2 text-white transition duration-200 ease-in-out hover:bg-[#DC9D6D] focus:outline-none active:bg-[#B27F58]"
          onClick={handleResetPassword}
        >
          Reset
        </button>
        {error ? <p className="text-red-500">{error}</p> : null}
      </div>
    </div>
  );
};

export default resetPassword;
