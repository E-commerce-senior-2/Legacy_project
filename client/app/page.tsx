'use client'
// import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
// import Valentino from "../../assets/Brands/Valentino.png";
// import Dior from "../../assets/Brands/Dior-Logo.png";
// import Chanel from "../../assets/Brands/Channel-Logo.png";
// import LV from "../../assets/Brands/LV.png";
// import Gucci from "../../assets/Brands/Gucci.png";
// import Prada from "../../assets/Brands/Prada.png";
import { GrTransaction } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { PiDressDuotone } from "react-icons/pi";
// import Product from "../pages/LayoutExplore/AllProducts"
import axios from "axios";
// import { useSpring, animated, config } from "react-spring";
import Link from "next/link";
// import { FaHeart } from "react-icons/fa";
// import { userContext } from "../../Usercontext.jsx";
import { MdVerified } from "react-icons/md";
import { Toaster, toast } from "sonner";
const brands = [
  {
    pic: "",
  },
  {
    pic: "",
  },
  {
    pic: "",
  },
  {
    pic: "",
  },
  {
    pic: "",
  },
  {
    pic: "",
  },
];

const firstButtons = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around mt-20 ">
      <Link href={"/explore/allProducts"}>
        <button className="w-60 h-12  bg-[#382e29] rounded-lg justify-center items-center text-white text-xl font-medium ">
          Main Collection
        </button>
      </Link>
      <button className="text-white text-xl font-medium w-60 h-12 px-26 bg-[#70565099] rounded-lg justify-center items-center">
        Creators Market
      </button>
    </div>
  );
};

const firtDiv = () => {
  return (
    <div className=" h-screen flex flex-col lg:flex-row gap-35 justify-around items-center w-1/2 ">
      <div>
        <h1 className="text-[#705650db] text-6xl font-extrabold font-['SF Pro Display'] text-center">
          FancyMama
        </h1>
        <div className="text-center mt-5 ">
          <strong> Elevate Your Style, Effortlessly! </strong>
          <p className="flex-col justify-center items-center text-[#3b3b3b] m-6 text-center">
            Discover curated luxury, connect with top creators, and shop
            exclusive fashion effortlessly on FancyMama. Your go-to app for a
            seamless blend of opulence and simplicity. Redefine your style with
            us. #FancyMamaStyle✨
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 mt-3">
          <button className=" w-40 h-12 bg-gradient-to-bl bg-[#382e29] rounded-lg justify-center items-center gap-2.3 inline-flex text-white text-xl font-medium font-['Poppins']">
            Explore Now
          </button>
          <Link href={"/explore/allProducts"}>
            <button className="text-white text-xl font-medium font-['Poppins'] w-28 h-12 px-5 py-2.5 left-[181px] top-0  bg-[#70565099] rounded-lg justify-center items-center gap-2.5 inline-flex">
              Products
            </button>
          </Link>
        </div>
        <div className="flex gap-20 mt-8 text-center">
          <div>
            <h1 className=" text-[#f1a98a] text-3xl font-bold font-['Poppins']">
              100+
            </h1>
            <p className="text-[#574a44c9] text-xl font-medium font-['Poppins']">
              Brands
            </p>
          </div>
          <div>
            <h1 className=" text-[#f1a98a] text-3xl font-bold font-['Poppins']">
              20k+
            </h1>
            <p className="text-[#574a44c9] text-xl font-medium font-['Poppins']">
              Fashion Designer
            </p>
          </div>
          <div>
            <h1 className=" text-[#f1a98a] text-3xl font-bold font-['Poppins']">
              60+
            </h1>
            <p className="text-[#574a44c9] text-xl font-medium font-['Poppins']">
              Fashion Shows
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full  relative mt-[72px] left-40">
        <div className="relative">
          <img
            className="lg:w-48 lg:h-36 left-0 top-0 absolute rounded-lg"
            src="https://i.pinimg.com/564x/4d/89/7c/4d897c7921355a0504c20f20456a1b10.jpg"
          />
          <img
            className="lg:w-48 lg:h-56 left-0 top-[155px] absolute rounded-lg"
            src="https://i.pinimg.com/564x/d1/ff/d9/d1ffd96e596e61b4a47cc829a84ce92f.jpg"
          />
          <img
            className="lg:w-48 lg:h-28 left-[202px] top-0 absolute rounded-lg"
            src="https://i.pinimg.com/564x/12/f1/f8/12f1f808b810ee471b347add98699597.jpg"
          />
          <img
            className="lg:w-48 lg:h-56 left-[202px] top-[123px] absolute rounded-lg"
            src="https://i.pinimg.com/564x/58/d3/0b/58d30bce740f44f0a84020db21a89b76.jpg"
          />
          <img
            className="lg:w-48 lg:h-96 left-[404px] top-[59px] absolute rounded-lg"
            src="https://i.pinimg.com/564x/6a/9c/2b/6a9c2b83ebb78ce2ad8e32fbf2ca6b62.jpg"
          />
        </div>

        <div className="lg:w-44 lg:h-40 left-[10px] top-[390px] relative">
          <img
            className="w-36 lg:h-36 left-[16px] top-[5px] absolute rounded-lg"
            src="https://i.pinimg.com/564x/e5/e1/31/e5e131155a46ac558025decc89420427.jpg"
          />
        </div>

        <div className="lg:w-48 lg:h-40 left-[205px] top-[230px] relative">
          <img
            className="lg:w-36 lg:h-36 left-[25px] top-[-20px] absolute rounded-lg"
            src="https://i.pinimg.com/564x/17/de/b7/17deb79f0b0f7cef01203ce0fc4f686a.jpg"
          />
        </div>
      </div>
    </div>
  );
};

const BrandsStatic = () => {
  return (
    <div className="flex gap-20 flex-col lg:flex-row opacity-1 items-center justify-between mt-20">
      {brands.map((brand, index) => {
        return (
          <div key={index}>
            <img src={brand.pic} alt="" className="h-32 w-32" />
          </div>
        );
      })}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className=" flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
      <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3">
        {" "}
        About Us{" "}
      </h1>
      <p className="flex flex-col  text-slate-600 m-6 text-[#3b3b3b] w-[600px]">
        {" "}
        <strong>FancyMama </strong> {""}Your passport to curated elegance.
        Explore exclusive collections, connect with creators, and elevate your
        style effortlessly. Welcome to a world where fashion meets simplicity
      </p>
      <div className="lg:flex-row-reverse flex flex-col items-center justify-between mt-20">
        <div className="mt-15 items-center relative flex flex-col justify-center">
          <h1 className=" text-6xl text-white font-sans font-bold mt-2">
            Fashion That Speaks
          </h1>
          <p className="flex-col text-slate-600 mt-5 mb-6 justify-center items-center w-full md:w-96 text-center lg:w-30">
            Established 2014, <strong>FancyMama</strong> emerged as a vision to
            redefine fashion exploration. From the outset, we aimed to curate a
            unique space where creators and fashion aficionados unite. Join us
            in celebrating the evolution of style as FancyMama continues to make
            waves in the world of luxury fashion.
          </p>
          <Link className="flex item-center mr-20" href={"/About"}>
            <button className="bg-[#733709bc] p-2 text-white font-sans w-16 mb-20 ml-14 justify-center">
              More
            </button>
          </Link>
        </div>
        <div
          style={{
            width: 374,
            height: 447,
            right: 0,
            marginTop: 10,
            position: "relative",
          }}
        >
          <img
            style={{
              width: 324,
              height: 397,
              left: 0,
              top: 0,
              position: "absolute",
              boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.35)",
              borderRadius: 10,
            }}
            src="https://i.pinimg.com/564x/80/ae/0b/80ae0bc8e4d4d06648199a932ce8707d.jpg"
          />
        </div>
      </div>
    </div>
  );
};

const AllCollectionTitle = () => {
  return (
    <div>
      <div className="flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
        <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3">
          {" "}
          All Collection
        </h1>
        <p className="flex flex-col  text-slate-600 m-6 text-[#3b3b3b] w-[600px]">
          {" "}
          Elevate your daily style with timeless sophistication
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  justify-around items-center mt-20">
        <div className="flex flex-col justify-center items-center">
          <GrTransaction className="text-5xl text-[#734532]" />
          <p className=" text-slate-600 text-xl md:text-xl font-sans tracking-wide">
            {" "}
            Fast And Easy Transactions{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <BsHandbag className="text-5xl text-[#734532]" />
          <p className=" text-slate-600 text-xl md:text-xl  font-sans tracking-wide  ">
            {" "}
            Luxury Shopping{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <PiDressDuotone className="text-5xl text-[#734532]" />
          <p className=" text-slate-600 text-xl md:text-xl  font-sans tracking-wide  ">
            {" "}
            Modern Fashion{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const buttons = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around mt-20">
      <button className="w-40 h-8  bg-[#382e29] rounded-lg justify-center items-center text-white text-base font-medium ">
        All Collection
      </button>
      <button className="text-white text-base font-medium w-40 h-8 px-26 bg-[#70565099] rounded-lg justify-center items-center">
        Verified Brands
      </button>
      <button className="w-40 h-8  bg-[#70565099] rounded-lg justify-center items-center text-white text-base font-medium ">
        Verified Artists
      </button>
      <button className="text-white text-base font-medium w-40 h-8 px-26 bg-[#70565099] rounded-lg justify-center items-center">
        New Drops
      </button>
      <button className="text-white text-base font-medium w-40 h-8 px-26 bg-[#70565099] rounded-lg justify-center items-center">
        Live Shows
      </button>
    </div>
  );
};

// const allCollection = () => {
//   const [items, setItems] = useState([]);
//   const getItems = async () => {
//     try {
//       let result = await axios.get(`http://localhost:8080/items`);
//       // console.log(result.data);
//       setItems(result.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     getItems();
//   }, []);
//   return (
//     <div>
//       <div className="grid grid-cols-1 gap-2 pt-16 md:grid-cols-2 xl:grid-cols-3">
//         {items.map((item, i) => (
//           <Item key={item.collectionId} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const itemIncomming = () => {
//   const [items, setItems] = useState([]);
//   const getItems = async () => {
//     try {
//       let result = await axios.get(`http://localhost:8080/items`);
//       // console.log(result.data);
//       setItems(result.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     getItems();
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
//         <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3">
//           New && Trending
//         </h1>
//         <p className="flex flex-col  text-slate-600 m-6 text-[#3b3b3b] w-[600px]">
//           {" "}
//           Discover unparalleled style with our latest and trending products,
//           where innovation meets elegance in every piece.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 gap-2 pt-16 md:grid-cols-2 xl:grid-cols-3">
//         {items.map(
//           (item, i) => i < 3 && <Item key={item.collectionId} {...item} />
//         )}
//       </div>
//     </div>
//   );
// };

// const Item = ({ collectionId, status, gender, name, price, image }) => {
//   const [like, setLike] = useState(false);
//   const [likeAnimation, setLikeAnimation] = useState(false);
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setLikeAnimation(false);
//     }, 1000);

//     return () => clearTimeout(timeoutId);
//   }, [likeAnimation]);

//   const slideIn = useSpring({
//     opacity: 1,
//     transform: "translateY(0)",
//     from: { opacity: 0, transform: "translateY(50px)" },
//     config: config.wobbly,
//     reset: true,
//   });

//   return (
//     <animated.div
//       style={slideIn}
//       className="item-box relative flex flex-col items-center justify-start rounded-md border border-gray-300 bg-[#ffffff7c] p-4 font-medium shadow-md"
//     >
//       <Link to={`/${collectionId}/${name.replaceAll(" ", "-")}`}>
//         <img
//           src={image}
//           className="item-image m-auto h-[200px] w-fit self-center transition-all hover:scale-125"
//           alt=""
//         />
//         <div className="item-info mt-3 flex justify-start gap-7 font-normal">
//           <p className="tracking-widest">{status}</p>
//           <p>{gender}</p>
//         </div>
//         <div className="item-description mt-3 self-start">
//           <p className="item-name">{name}</p>
//           <p className="item-price mt-3 text-lg">$ {price}</p>
//         </div>
//       </Link>

//       <FaHeart
//         className={`heart-icon ${like ? "text-red-500 " : ""} ${
//           likeAnimation
//             ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 transform transition-all"
//             : "relative self-end"
//         } cursor-pointer text-3xl`}
//         onClick={() => {
//           setLike(!like);
//           setLikeAnimation(!likeAnimation);
//         }}
//       />
//     </animated.div>
//   );
// };

// const UpCommingCreators = () => {
//   const [creators, setCreators] = useState([]);
//   // const [follow, setFollow] = useState(false);
//   const [iduser, setIduser] = useState("");
//   const [idCreator, setIdCreator] = useState("");
//   const { currentUser } = useContext(userContext);

//   const getCreators = async () => {
//     try {
//       let Creatordata = await axios.get(`http://localhost:8080/creators`);
//       setCreators(Creatordata.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // console.log(currentUser);

//   // Add New Follower to the Creator:
//   const newFollow = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         // console.log(getId.data.id);
//         setIduser(getId.data.id);
//         await axios.post(
//           `http://localhost:8080/followingCreator/${idCreator}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const removeFollow = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         setIduser(getId.data.id);
//         await axios.delete(
//           `http://localhost:8080/followingCreator/${idCreator}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCreators();
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
//         <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3">
//           {" "}
//           UpComming Creators
//         </h1>
//         <div className="flex flex-col  text-slate-600 m-6 text-[#3b3b3b] w-[600px]">
//           Unveil the future of fashion with our upcoming creators, where fresh
//           perspectives and boundless creativity redefine style.
//         </div>
//       </div>
//       <div className="grid grid-cols-3 lg:grid-row mb-12 w-86">
//         {creators.map((artists, i) => {
//           // console.log(artists);
//           return (
//             <CardCreator
//               key={artists.id}
//               {...artists}
//               new={newFollow}
//               remove={removeFollow}
//               setIduser={setIduser}
//               setIdCreator={setIdCreator}
//               currentUser={currentUser}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// const CardCreator = (props) => {
//   // console.log(props);
//   const [follow, setFollow] = useState(false);
//   return (
//     !props.status && (
//       <div
//         key={props.id}
//         className="md:max-w-sm lg:max- xl:max md:mx-auto lg:mx-auto xl:mx-auto mt-12 bg-[#ffffff97] shadow-xl rounded-lg text-gray-900"
//       >
//         <div className="rounded-t-lg h-38 overflow-hidden">
//           <img
//             className="object-cover object-top w-full h-48"
//             src={props.bgImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-[#5a57559f] rounded-full overflow-hidden">
//           <img
//             className="object-cover object-center h-full w-60"
//             src={props.pfImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="text-center mt-2 relative flex flex-col  items-center">
//           <span className="flex items-center gap-2 ">
//             <h2 className="font-semibold">{props.fullName} </h2>
//             <MdVerified className="  text-[#4869d5] " />
//           </span>
//           <p className="text-[#7e7e7e] ">{props.bio}</p>
//         </div>

//         <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//             </svg>
//             <div>2k</div>
//           </li>
//           <li className="flex flex-col items-center justify-between">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
//             </svg>
//             <div>10k</div>
//           </li>
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
//             </svg>
//             <div>15</div>
//           </li>
//         </ul>

//         <div className="p-4 border-t mx-8 mt-2">
//           {!follow && (
//             <button
//               onClick={() => {
//                 !props.currentUser
//                   ? toast.error("You Need Login First")
//                   : props.setIdCreator(props.id),
//                   props.new(),
//                   props.currentUser ? setFollow(true) : "";
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               {" "}
//               Follow <Toaster richColors />
//             </button>
//           )}
//           {follow && (
//             <button
//               onClick={() => {
//                 props.setIdCreator(props.id), props.remove(), setFollow(false);
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-[#09080876] hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               Unfollow
//             </button>
//           )}
//         </div>
//       </div>
//     )
//   );
// };
// const UpCommingBrands = () => {
//   const [brands, setBrands] = useState([]);
//   const [iduser, setIduser] = useState("");
//   const [idBrand, setIdBrand] = useState("");
//   const { currentUser } = useContext(userContext);

//   const getBrands = async () => {
//     try {
//       let Creatordata = await axios.get(`http://localhost:8080/brands`);
//       setBrands(Creatordata.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Add New Follower to the Brand:
//   const newFollowBrand = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         // console.log(getId.data.id);
//         setIduser(getId.data.id);
//         await axios.post(
//           `http://localhost:8080/followingBrand/${idBrand}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const removeFollowBrand = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         setIduser(getId.data.id);
//         await axios.delete(
//           `http://localhost:8080/followingBrand/${idBrand}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getBrands();
//   }, []);
//   return (
//     <div>
//       <div className="flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
//         <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3">
//           {" "}
//           UpComming Brands
//         </h1>
//         <div className="flex flex-col  text-slate-600 m-6 text-[#3b3b3b] w-[600px]">
//           Explore the forefront of luxury with our upcoming brands, where
//           innovation meets sophistication, setting new standards for
//           contemporary elegance.
//         </div>
//       </div>
//       <div className="grid grid-cols-3 lg:grid-row mb-12 w-86">
//         {brands.map((brand, i) => {
//           // console.log(brand);
//           return (
//             <CardBrands
//               key={brand.id}
//               {...brand}
//               new={newFollowBrand}
//               remove={removeFollowBrand}
//               setIduser={setIduser}
//               setIdBrand={setIdBrand}
//               currentUser={currentUser}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// const CardBrands = (props) => {
//   const [follow, setFollow] = useState(false);

//   return (
//     !props.status && (
//       <div
//         key={props.id}
//         className="md:max-w-sm lg:max- xl:max md:mx-auto lg:mx-auto xl:mx-auto mt-12 bg-[#ffffff97] shadow-xl rounded-lg text-gray-900"
//       >
//         <div className="rounded-t-lg h-38 overflow-hidden">
//           <img
//             className="object-cover object-top w-full h-48"
//             src={props.bgImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-[#5a57559f] rounded-full overflow-hidden">
//           <img
//             className="object-cover object-center h-full w-60"
//             src={props.brandImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="text-center mt-2 relative flex flex-col  items-center">
//           <span className="flex items-center gap-2 ">
//             <h2 className="font-semibold">{props.brandName} </h2>
//             <MdVerified className="  text-[#4869d5] " />
//           </span>
//           {/* <p className="text-[#7e7e7e] ">{props.bio}</p> */}
//         </div>

//         <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//             </svg>
//             <div>322k</div>
//           </li>
//           <li className="flex flex-col items-center justify-between">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
//             </svg>
//             <div>8M</div>
//           </li>
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
//             </svg>
//             <div>15</div>
//           </li>
//         </ul>

//         <div className="p-4 border-t mx-8 mt-2">
//           {!follow && (
//             <button
//               onClick={() => {
//                 !props.currentUser
//                   ? toast.error(" You Need To Login First")
//                   : props.setIdBrand(props.id),
//                   props.new(),
//                   props.currentUser ? setFollow(true) : "";
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               {" "}
//               Follow <Toaster richColors />{" "}
//             </button>
//           )}
//           {follow && (
//             <button
//               onClick={() => {
//                 props.setIdBrand(props.id), props.remove(), setFollow(false);
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-[#09080876] hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               Unfollow
//             </button>
//           )}
//         </div>
//       </div>
//     )
//   );
// };


const Quetions = () => {
  const allLabels = [
    {
      oneLabel: "Describe Your Experience",
    },
    {
      oneLabel: "Your Thoughts Matter",
    },
  ];

  const SecondLabel = [
    {
      oneLabel: "Let Us Know Your Insights",
    },
    {
      oneLabel: "Describe Your Interaction",
    },
    {
      oneLabel: "Detail Your Feedback",
    },
  ];

  return (
    <div className="flex flex-col lg-flex-row justify-center items-center">
      <h1 className="text-[#734532] font-['Poppins'] mb-3 mt-20 text-4xl font-extrabold text-center">
        Frequently Asked <br />
        Quetion{" "}
      </h1>
      <p className="text-[#3b3b3b] m-6 text-center w-[600px]">
        Get the answers you need quickly and effortlessly with our Frequently
        Asked Questions—your key to a smooth and informed{" "}
        <strong>FancyMama</strong> experience.
      </p>
      <div className="flex items-center  justify-around flex-col gap-6 p-6 pt-8 mb-6 bg-[#6e574058]">
        <p className="text-[#734532] font-bold">Wanna Ask Something?</p>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex flex-col w-96  ">
            {allLabels.map((holder, i) => {
              return <InputQuetions key={i} {...holder} />;
            })}
          </div>
          <div className="flex flex-col  w-96  ">
            {SecondLabel.map((holder, i) => {
              return <InputQuetions key={i} {...holder} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelProps {
  oneLabel: string;
}

const InputQuetions: React.FC<LabelProps> = ({ oneLabel }) => {
  const [label, setLabel] = useState(false);
  // console.log(oneLabel);

  return (
    <div className="flex flex-col">
      <label
        className={`  ${
          label ? "translate-y-0" : "translate-y-10"
        } font-semibold transition-all`}
      >
        {oneLabel}
      </label>
      <input
        type="text"
        onClick={() => {
          setLabel(true);
        }}
        onBlur={() => setLabel(false)}
        className="opacity-50  border-b-2 bg-transparent border-solid border-stone-600 outline-none p-2"
      />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {firstButtons()}
      {firtDiv()}
      {BrandsStatic()}
      {AboutUs()}
      {AllCollectionTitle()}
      {buttons()}
      {/* {allCollection()}
      {itemIncomming()}
      {UpCommingCreators()}
      {UpCommingBrands()} */}
      {Quetions()}
    </div>
  );
};

export default Home;
