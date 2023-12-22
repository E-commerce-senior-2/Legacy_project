'use client'
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { userSignUp } from '../utils/userQueries/user';

const Signup: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const fullName = useRef<HTMLInputElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dateBirth = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [role, setRole] = useState('user');
  const mutation = userSignUp()

 
  return (
    <div className="flex justify-center flex-col lg:flex-row items-center h-screen">
      <div>
        <img className="h-[400px]" src="" alt="Signin" />
      </div>

      <div className="flex-col w-fit h-[450px] ml-10 bg-white bg-opacity-20 rounded-[10px] p-5">
        <div className="text-center text-gray-600 text-3xl font-extrabold font-['SF Pro Display'] tracking-tight p-6">
          Sign Up
        </div>
        <div>
          <span className="text-gray-600 text-lg font-normal font-['SF Pro Display'] tracking-tight">
            Are you Creator?
          </span>
          <span className="text-[#733709] text-lg font-normal font-['SF Pro Display'] tracking-tight"> </span>
          <span
            className="text-[#733709] text-lg font-medium font-['SF Pro Display'] tracking-tight"
            onClick={() => {
              setRole('creator');
            }}
          >
            Yes
          </span>
          <span
            className="text-[#733709] text-lg font-medium font-['SF Pro Display'] tracking-tight"
            onClick={() => {
              setRole('user');
            }}
          >
            /No
          </span>
        </div>

        <div>
          <span className="text-gray-600 text-lg font-normal font-['SF Pro Display'] tracking-tight">
            Already a Member?
          </span>
          <span className="text-[#733709] text-lg font-normal font-['SF Pro Display'] tracking-tight"> </span>
          <span
            className="text-[#733709] text-lg font-medium font-['SF Pro Display'] tracking-tight"
            onClick={() => {
              router.push('/signin');
            }}
          >
            Sign In
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <input
            className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
            ref={email}
            placeholder="Email"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ref={fullName}
              placeholder="Full name"
            />
            <input
              className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              ref={userName}
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <input
              className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              onClick={() => setDisplay(!display)}
              ref={password}
              placeholder="Password"
            />
            {display && (
              <p className="text-gray-600 text-xs mt-1">
                Must contain 1 uppercase letter, 1 number, min. 8 characters.
              </p>
            )}
          </div>
          <div>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Date of Birth
            </label>
            <input
              className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
              type="date"
              ref={dateBirth}
            />
          </div>
        </div>
        <button
          onClick={() => {
            const obj = {
                fullName: fullName.current?.value,
                userName: userName.current?.value,
                email: email.current?.value,
                password: password.current?.value,
                dateBirth: dateBirth.current?.value,
              };
            mutation.mutate({role, user:obj});
            router.push('/')
        }}
          className="bg-[#733709] text-white px-4 mt-3 float-right rounded-full transition duration-200 ease-in-out hover:bg-[#DC9D6D] active:bg-[#B27F58] focus:outline-none"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signup;
