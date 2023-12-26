// "use client"
// import axios from 'axios'
// import { useContext, useEffect, useState } from 'react'
// // import { NavLink, useParams } from 'react-router-dom'
// import { BsBag } from 'react-icons/bs'
// import { FaArrowLeftLong } from 'react-icons/fa6'
// // import 'react-toastify/dist/ReactToastify.css'
// import { UserContext } from '@/context'
// import Link from 'next/link'
// import { useQuery } from '@tanstack/react-query'
// // import LikeAlsoDetails from './LikeAlsoDetails'
// function Productdetails({params}: {params : {collectionId : number , name : string}}) {
//     // const { collectionId, name } = useParams()
//     // const [data, setData] = useState([])
//     const { currentUser } = useContext(UserContext)
//     console.log(+params.collectionId , params.name.replaceAll("-" , " "))
    
//         const {data , isLoading , error} = useQuery({
//             queryKey :['itemsDetails'],
//             queryFn : () =>
//              axios.get(
//                 `http://localhost:3001/Items/brand/collections/${params.name.replaceAll('-' , " ")}`).then(res => res.data) 
//         })
//         if (isLoading) return "...isLoading"
//         if (error) return "this is the error" + error.message

//     return (
//         <div className="py-10">
//             <div className="constainer   flex  h-full flex-col items-center gap-5 rounded-lg bg-white   p-10 lg:grid  lg:grid-flow-col">
//                 <div className="desc flex flex-col gap-8">
//                     <Link className={'  w-fit'} href="/Items">
//                         <FaArrowLeftLong className="text-lg transition-all hover:translate-x-[-8px] " />
//                     </Link>
//                     <div className="info">
//                         <p className="text-lg font-thin uppercase">
//                             {data.status}
//                         </p>
//                         <p className="uppercase">{data.name}</p>
//                         <p>$ {data.price}</p>
//                     </div>
//                     <div className="description">
//                         <h2 className="mb-3 text-lg font-bold uppercase">
//                             Description
//                         </h2>
//                         <p className="capitalize">{data.description}</p>
//                         <p className="mt-10">
//                             ID COLLECTION: {data.collectionId}
//                         </p>
//                     </div>
//                 </div>
//                 <div className="image">
//                     <img
//                         className=" cursor-crosshair hover:scale-150 transition-all"
//                         src={data.image}
//                         alt=""
//                     />
//                 </div>
//                 <div className="by flex flex-col gap-3">
//                     <button className="flex items-center gap-2 bg-VanDyke px-20 py-4 font-medium text-white hover:font-semibold">
//                         ADD TO CART
//                         <BsBag className="text-xl" />
//                     </button>
//                     <button className="flex h-14 items-center gap-2 border border-black px-20 font-medium hover:font-semibold">
//                         BUY WITH
//                         <img
//                             className="w-16 "
//                             src="https://res.cloudinary.com/dc1cdbirz/image/upload/v1702598778/ck5ibqxmsap3vujrbmhh.png"
//                             alt=""
//                         />
//                     </button>
//                 </div>
//             </div>
//             {/* <LikeAlsoDetails data={data} /> */}
//         </div>
//     )
// }

// export default Productdetails
