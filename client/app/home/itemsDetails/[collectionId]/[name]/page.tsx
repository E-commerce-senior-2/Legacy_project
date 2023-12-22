"use client"
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
// import { NavLink, useParams } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Zoom from 'react-zoom-image-hover/dist/esm/components/Zoom'
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
// import 'react-toastify/dist/ReactToastify.css'
// import { UserContext } from '@/context'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
// import LikeAlsoDetails from './LikeAlsoDetails'
function Productdetails({params}: {params : {collectionId : number , name : string}}) {
    // const { collectionId, name } = useParams()
    // const [data, setData] = useState([])
    // const { currentUser } = useContext(UserContext)
    const [isOpen , setIsOpen] = useState(false)
    const [photoIndex , setPhotoIndex] = useState(0)
    console.log(+params.collectionId , params.name.replaceAll("-" , " "))
    
        const {data , isLoading , error} = useQuery({
            queryKey :['itemsDetails'],
            queryFn : () =>
             axios.get(
                `http://localhost:3001/Items/brand/collections/${params.name.replaceAll('-' , " ")}`).then(res => res.data) 
        })
        if (isLoading) return "...isLoading"
        if (error) return "this is the error" + error.message

    return (
        <div className="py-10">
            <div className="constainer   flex  h-full flex-col items-center gap-5 rounded-lg bg-white   p-10 lg:grid  lg:grid-flow-col">
                <div className="desc flex flex-col gap-8">
                    <Link className={'  w-fit'} href="/home/Items">
                        <FaArrowLeftLong className="text-lg transition-all hover:translate-x-[-8px] " />
                    </Link>
                    <div className="info">
                        <p className="text-lg font-thin uppercase">
                            {data.status}
                        </p>
                        <p className="uppercase">{data.name}</p>
                        <p>$ {data.price}</p>
                    </div>
                    <div className="description">
                        <h2 className="mb-3 text-lg font-bold uppercase">
                            Description
                        </h2>
                        <p className="capitalize">{data.description}</p>
                        <p className="mt-10">
                            ID COLLECTION: {data.collectionId}
                        </p>
                    </div>
                </div>
                <div className="image" onClick={() => setIsOpen(true)}>
                    {isOpen && (
                    <Lightbox 
                    mainSrc={data.image[photoIndex]}
                        nextSrc={data.image[(photoIndex + 1) % data.image.length]}
                        prevSrc={data.image[(photoIndex + data.image.length - 1) % data.image.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => {
                            setPhotoIndex((photoIndex + data.image.length - 1) % data.image.length)
                        }}
                        onMoveNextRequest={() => {
                            setPhotoIndex((photoIndex + 1) % data.image.length)
                        }}
                    />
                    )}
                    <Zoom
                        height={500}
                        width={830}
                        zoomScale={4}
                        transitionTime={0.5}
                        // className=" cursor-crosshair hover:scale-150 transition-all"
                        src={data.image[0]}
                        // alt=""
                    />
                </div>
                <div className="by flex flex-col gap-3">
                    <button className="flex items-center gap-2 bg-VanDyke px-20 py-4 font-medium text-white hover:font-semibold">
                        ADD TO CART
                        <BsBag className="text-xl" />
                    </button>
                    <a href='https://buy.stripe.com/test_aEUdRi5g35pw86IaEE' className="flex h-14 items-center gap-2 border border-black px-20 font-medium hover:font-semibold">
                        BUY WITH
                        <img
                            className="w-16 "
                            src="https://res.cloudinary.com/dc1cdbirz/image/upload/v1702598778/ck5ibqxmsap3vujrbmhh.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            {/* <LikeAlsoDetails data={data} /> */}
        </div>
    )
}

export default Productdetails
