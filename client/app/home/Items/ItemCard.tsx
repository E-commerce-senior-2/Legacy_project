'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Toaster, toast } from 'sonner'
import { MyContext } from '../../../MyContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// import { UserContext } from '@/context'

const addToFavorite = async (idUser : number, idProduct : number) => {
    console.log(idProduct, 'p')
    console.log(idUser, 'u')
    try {
        await axios.post(
            `http://localhost:3001/favoriteItem/${idProduct}/${idUser}`
        )
    } catch (err) {
        console.error(err)
    }
}

const ItemCard = ({ id, collectionId, status, gender, name, price, image } : any) => {
    const [like, setLike] = useState(false)
    const [likeAnimation, setLikeAnimation] = useState(false)
    // const { currentUser } = useContext(UserContext)
    const currentUserString = localStorage.getItem("currentUser")
    const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

    // console.log(currentUser)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLikeAnimation(false)
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [likeAnimation])

    const slideIn :any = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 1, transform: 'translateY(50px)' },
        config: config.wobbly,
        reset: true,
    })
    return (
        <div
            style={slideIn}
            className="item-box relative flex flex-col items-center justify-start rounded-md border border-gray-300 bg-white p-4 font-medium shadow-md"
        >
                <Carousel showArrows={true} dynamicHeight infiniteLoop>
                    <div>
                        <img src={image[0]} alt="404"  className="item-image m-auto  w-fit self-center transition-all hover:scale-125"/>
                    </div>
                    <div>
                        <img src={image[1]} alt="404" className="item-image m-auto  w-fit self-center transition-all hover:scale-125" />
                    </div>
                    <div>
                        <img src={image[2]} alt="404" className="item-image m-auto  w-fit self-center transition-all hover:scale-125" />
                    </div>
                    </Carousel>
            <Link href={`/home/itemsDetails/${collectionId}/${name.replaceAll(' ', '-')}`}>
                <div className="item-info mt-3 flex justify-start gap-7 font-normal">
                    <p className="tracking-widest">{status}</p>
                    <p>{gender}</p>
                </div>
                <div className="item-description mt-3 self-start">
                    <p className="item-name">{name}</p>
                    <p className="item-price mt-3 text-lg">$ {price}</p>
                </div>
            </Link>
            <FaHeart
                className={`heart-icon ${like ? 'text-red-500 ' : ''} ${
                    likeAnimation
                        ? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 transform transition-all'
                        : 'relative self-end'
                } cursor-pointer text-3xl`}
                onClick={() => {
                    if (!currentUser.id) {
                        toast.error('You Need Login First')
                    } else {
                        setLike(!like)
                        setLikeAnimation(!likeAnimation)
                        addToFavorite(currentUser.id, id)
                    }
                }}
            />
        </div>
    )
}

export default ItemCard