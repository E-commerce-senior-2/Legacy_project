"use client";
import React, { useContext, useRef, useState } from "react";
// import { Link, Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../assets/logo/log.png";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa6";
import Link from "next/link";
// import { userContext } from '../../Usercontext.jsx'
// import { MyContext } from '../../MyContext.jsx'
function Header() {
  // const location = useLocation()
  const [showNav, setShowNav] = useState(false);
  const [showExploreNav, setShowExploreNav] = useState(false);
  const [showMoreNav, setShowMoreNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // const { logout, currentUser } = useContext(userContext)
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
            <Link href={"/"}>
              <img src="" className="h-14" />
            </Link>
          </div>

          <ul
            className={`links transition-max-height items-start overflow-hidden duration-300 ${
              showNav
                ? "mt- max-h-screen opacity-100 "
                : "m-0 max-h-0 opacity-0"
            } flex w-full flex-col items-start justify-center gap-4 lg:mt-3  lg:max-h-screen lg:flex-row lg:items-center
                        lg:justify-center lg:justify-self-end lg:opacity-100`}
          >
            {location.pathname == "/explore/allProducts" && (
              <li className="relative  hidden items-center text-white lg:flex ">
                <IoIosSearch className="absolute pl-2 text-2xl" />
                <input
                  type="text "
                  // onChange={(e) =>
                  //     setInputFilter(e.target.value)
                  // }
                  placeholder="Search Items, Fashion, Collection and Users"
                  className="text-md relative  w-screen min-w-full max-w-[350px] rounded-full border-2 bg-transparent p-2 pl-9 text-white outline-none placeholder:text-white "
                />
              </li>
            )}

            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
              <Link href={"/"}>Home</Link>
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
                  <Link href="explore/allProducts ">All Products</Link>
                </li>
                <li className="w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all hover:bg-[#4e4a4744] hover:pl-5">
                  <Link href="/creators">All creators</Link>
                </li>
              </ul>
            </li>
            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
              <Link href={"/myfavorite/:id"}>Personal Collection</Link>
            </li>
            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
              <Link href={"/basket"}>Basket</Link>
            </li>
            {/* {currentUser && (
                            <li className="border-b-2 border-transparent  transition-all lg:py-2  lg:hover:border-black">
                                <Link to="/cart" className="w-20 text-xl">
                                    <FaCartArrowDown />
                                </Link>
                            </li>
                        )} */}
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
                  <Link href={"/statistics"}>Statistics</Link>
                </li>
                <li
                  className=" w-screen border-b bg-[#97928f4d] py-2 pl-5 transition-all  hover:bg-[#4e4a4744] hover:pl-5
                                "
                >
                  <Link href={"/about"} className=" ">
                    About
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center justify-center gap-3 lg:gap-14">
          {/* {currentUser && (
                        <div
                            className="wallet    flex  items-center  gap-3 text-white
                    lg:flex"
                        >
                            <FaRegBell className="hidden cursor-pointer text-2xl lg:block" />
                            <FaRegMessage className="hidden cursor-pointer text-2xl lg:block" />
                            <Link className="cursor-pointer rounded-lg border px-5 py-1">
                                Wallet
                            </Link>
                            <span
                                className="flex cursor-pointer items-center gap-3"
                                onClick={() => setShowProfile(!showProfile)}
                            >
                                <IoIosArrowDown />
                                <img
                                    src="https://valentino-cdn.thron.com/delivery/public/image/valentino/ec475334-a0c3-474c-809b-9845876bcc65/ihqstx/std/2000x0/VALENTINO-GARAVANI-NITE-OUT-SATIN-PUMP-110-MM?quality=80&size=35&format=auto"
                                    className="h-10 w-12 rounded-full  border-none bg-black"
                                    alt=""
                                />
                                {showProfile && (
                                    <div
                                        className={` ${
                                            !showProfile
                                                ? 'invisible opacity-0'
                                                : 'visible opacity-100'
                                        }  absolute bottom-[-101px] flex   flex-col  transition-all lg:left-20`}
                                        onMouseLeave={() =>
                                            setShowProfile(false)
                                        }
                                    >
                                        <Link
                                            to={`/profile/${currentUser.id}`}
                                            className="mb-1 rounded-md bg-[#97928f4d] px-10 py-2  transition-colors  hover:bg-[#97928f8a]"
                                        >
                                            Profile
                                        </Link>

                                        <Link
                                            onClick={logout}
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
                                to={'/signup'}
                                className="cursor-pointer rounded-lg border px-5 py-1"
                            >
                                Login
                            </Link>
                            <Link
                                to={'signin'}
                                className="cursor-pointer rounded-lg border px-5 py-1"
                            >
                                SignIn
                            </Link>
                        </div>
                    )} */}
          <HiMiniBars3BottomRight
            // onClick={() => setShowNav(!showNav)}
            className="   cursor-pointer text-xl  lg:hidden"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
