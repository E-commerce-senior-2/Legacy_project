"use client";
import React, { useContext, useRef, useState } from "react";
// import { Link, Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo/log.png";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa6";
import Link from "next/link";
import { logout } from "../utils/userQueries/user";
// import { MyContext } from '../../MyContext.jsx'
function Header() {
  // const location = useLocation()
  const [showNav, setShowNav] = useState(false);
  const [showExploreNav, setShowExploreNav] = useState(false);
  const [showMoreNav, setShowMoreNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const currentUserString = localStorage.getItem("currentUser") || "";
  let currentUser: any;
  currentUserString ? (currentUser = JSON.parse(currentUserString)) : null;
  const userLogout = logout();
  // const { setInputFilter } = useContext(MyContext)

  return (
    <header
      className="relative z-30    bg-[#97928f4d] "
      onMouseLeave={() => {
        setShowExploreNav(false), setShowMoreNav(false);
        setShowNav(false);
      }}
    >
      <div className="min-h-20  relative flex h-full w-full items-start justify-center gap-3 px-3 py-3    lg:items-center lg:px-14 ">
        <div className="div flex max-w-[40%]     flex-col  md:w-full lg:max-w-full lg:flex-row lg:items-center lg:gap-14 ">
          <div className="logo  text-2xl font-bold ">
            <Link href={"/home"}>
              <img src="" className="h-14" />
            </Link>
          </div>

          <form className="bg-transparent border  rounded-full p-2 flex items-center">
            <input
              type="text"
              placeholder="Search For Creators..."
              className="bg-transparent text-white focus:outline-none w-30 sm:w-64 "
            />
            <button>
              <FaSearch className="text-white" />
            </button>
          </form>
          <ul
            className={`links transition-max-height items-start overflow-hidden duration-300 ${
              showNav
                ? "mt- max-h-screen opacity-100 "
                : "m-0 max-h-0 opacity-0"
            } flex w-full flex-col items-start justify-center gap-4 lg:mt-3  lg:max-h-screen lg:flex-row lg:items-center
                        lg:justify-center lg:justify-self-end lg:opacity-100`}
          >
            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
              <Link href={"/home"}>Home</Link>
            </li>
            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
              <div
                className="flex cursor-pointer  items-center"
                onClick={() => {
                  setShowExploreNav(!showExploreNav);
                  setShowMoreNav(false);
                }}
              >
                Explore <IoIosArrowDown />
              </div>
              <ul
                className={`lg:bg-main_color3 relative flex h-max w-1/2  flex-col gap-2 overflow-hidden text-white  lg:absolute lg:w-[200px] lg:translate-y-[20px] ${
                  showExploreNav
                    ? "opacity-1 max-h-screen"
                    : "max-h-0 opacity-0"
                } transition-all`}
              >
                <li className="w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all hover:bg-[#4e4a4744] hover:pl-5 lg:mt-1">
                  <Link href="/home/items">All Products</Link>
                </li>
                <li className="w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all hover:bg-[#4e4a4744] hover:pl-5">
                  <Link href="/home/AllProfiles">All creators</Link>
                </li>
              </ul>
            </li>
            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
              <Link href={"/home/Favorite"}>Personal Collection</Link>
            </li>
            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
              <div
                className="flex cursor-pointer items-center"
                onClick={() => {
                  setShowMoreNav(!showMoreNav), setShowExploreNav(false);
                }}
              >
                More <IoIosArrowDown />
              </div>
              <ul
                className={`lg:bg-main_color3 lg:mt-0 relative flex h-max w-1/2  flex-col gap-2 overflow-hidden text-white  lg:absolute lg:w-[200px] lg:translate-y-[20px] ${
                  showMoreNav ? "opacity-1 max-h-screen" : "max-h-0 opacity-0"
                } transition-all`}
              >
                <li className=" mt-1 w-screen border-b bg-[#97928f4d] py-2   pl-5 transition-all hover:bg-[#4e4a4744] hover:pl-5">
                  <Link href={"/home/statistics"}>Statistics</Link>
                </li>
                <li
                  className=" w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all  hover:bg-[#4e4a4744] hover:pl-5
                                "
                >
                  <Link href={"/home/about"} className=" ">
                    About
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center justify-center gap-3 lg:gap-14">
          {currentUser && (
            <div
              className="wallet    flex  items-center  gap-3 text-white
                    lg:flex"
            >
              <Link href="/home/basket" className=" text-xl">
                <FaCartArrowDown />
              </Link>
              <FaRegBell className="hidden cursor-pointer text-2xl lg:block" />
              <FaRegMessage className="hidden cursor-pointer text-2xl lg:block" />
              <Link
                href="#"
                className="cursor-pointer rounded-lg border px-5 py-1"
              >
                Wallet
              </Link>
              <span
                className="flex cursor-pointer items-center gap-3"
                onClick={() => setShowProfile(!showProfile)}
              >
                <IoIosArrowDown />
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  className="h-10 w-10 rounded-full   bg-black"
                  alt=""
                />
                {showProfile && (
                  <div
                    className={` ${
                      !showProfile
                        ? "invisible opacity-0"
                        : "visible opacity-100"
                    }  absolute bottom-[-101px] flex   flex-col  transition-all lg:left-20`}
                    onMouseLeave={() => setShowProfile(false)}
                  >
                    <Link
                      href={`home/profile/${currentUser.id}`}
                      className="mb-1 rounded-md bg-[#97928f4d] px-10 py-2  transition-colors  hover:bg-[#97928f8a]"
                    >
                      Profile
                    </Link>

                    <Link
                      href="/home"
                      onClick={() => {
                        userLogout.mutate();
                      }}
                      className="rounded-md bg-[#97928f4d] px-10 py-2 transition-colors hover:bg-[#97928f8a]"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </span>
            </div>
          )}
          {!currentUser && (
            <div className="profile flex  items-center gap-1 text-white lg:gap-3">
              <Link
                href={"/signUp"}
                className="cursor-pointer rounded-lg border px-5 py-1"
              >
                Register
              </Link>
              <Link
                href={"signIn"}
                className="cursor-pointer rounded-lg border px-5 py-1"
              >
                SignIn
              </Link>
            </div>
          )}
          <HiMiniBars3BottomRight
            onClick={() => setShowNav(!showNav)}
            className="   cursor-pointer text-xl  lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
