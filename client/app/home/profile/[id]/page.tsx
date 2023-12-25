"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { IoIosAddCircleOutline } from 'react-icons/io'

import axios from 'axios'
import { getCreator, getAllPosts } from '@/app/utils/profile/profile'
import UploadImage from '@/app/components/UploadImage'
import PostsImage from '@/app/components/PostsImage'
import Posts from '@/app/components/Posts'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// 

const Profile = ({ params }: { params: { id: number } }) => {
    // const [creator, setCreator] = useState<Creator>( 
    //     {id     : 0,             
    //     fullName : '',
    //     userName  : '',
    //     bgImage   : ''  ,          
    //     pfImage  :  '',             
    //     status    : false ,
    //     bio      :  '',
    //     dateBirth : '',
    //     email     : '',
    //     address   : ''});
    const [view, setView] = useState(false)
    const [change, setChange] = useState('')
    const [uploaded, setUploaded] = useState(false)
    const editProfileRef = useRef<HTMLDivElement>(null);
    const router = useRouter()

    const id = params.id
    console.log(id)

    ///////////////////////////////////////getCreator/////////////////////////////////////////////////////////////////
    const { data: creator, isLoading: creatorLoading, isError: creatorError } = id
        ? getCreator(id)
        : { data: null, isLoading: false, isError: false };
    /////////////////////////////////////:get creator's posts///////////////////////////////////////////:
    const { data: posts, isLoading: postLoading, isError: postError } = id
        ? getAllPosts(id)
        : { data: null, isLoading: false, isError: false };
    if (creatorLoading || postLoading) return <h1>Loading</h1>;
    if (creatorError || postError) return <h1>Error</h1>;
    return (
        <>
            <div className="h-fit min-h-full w-full px-12 py-7">
                <div className=" relative flex w-full flex-col items-center justify-center p-10">
                    <div className="relative">
                        <img
                            className="bg-container  md: md: h-[355px] w-[1040px] rounded-[5px] bg-Liver bg-opacity-10 brightness-50"
                            src={creator?.bgImage.toString() || ''} alt=''
                        />
                        <div
                            ref={editProfileRef}
                            onClick={() => {
                                setChange('bgimage')
                                setView(!view)
                            }}
                            className=" absolute bottom-2  right-[10px] flex h-10  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-Liver"
                        >
                            <FaPen className="text-md  bg-[#733709bc}-500  absolute text-BabyPowder " />
                        </div>
                    </div>

                    <div className="relative top-[-70px] flex flex-col items-center justify-center">
                        <Image
                            className="  bottom-[-40px] h-[120px] w-[120px] rounded-full border-2 border-white"
                            src={creator?.pfImage.toString() || ''} alt=''
                            width={10}
                            height={10}
                        />

                        <div
                            ref={editProfileRef}
                            onClick={() => {
                                setChange('pfimage')
                                setView(!view)
                            }}
                            className=" absolute bottom-0 right-0 flex h-10  w-10 cursor-pointer items-center  justify-center rounded-[150px] bg-Liver"
                        >
                            <FaCamera className="text-md    bg-Liver text-white " />
                        </div>
                    </div>
                    <p className=" font-['SF Pro Display'] bottom-[50px] w-fit text-center text-[28px] font-semibold text-VanDyke md:absolute md:bottom-[67px]">
                        {creator?.fullName || ''}
                    </p>

                    <div
                        ref={editProfileRef}
                        data-profile="profile"
                        onClick={() => {
                            setView(!view)
                            router.push('/home/editProfile')

                        }}
                        className=" md:absolute    flex h-[45px] w-[164px] items-center justify-center gap-2.5 rounded-[150px] bg-VanDyke p-2.5 md:bottom-[90px] md:right-[00px]"
                    >
                        <span className="font-['SF Pro Display'] absolute cursor-pointer text-base font-semibold text-white">
                            Edit Profile
                        </span>
                    </div>

                    <span className="font-['SF Pro Display']  w-fit text-center text-base font-normal leading-[25px] text-VanDyke text-opacity-80 md:absolute md:bottom-[-4px] md:w-[896px]">
                        {creator?.bio || ''}
                    </span>
                </div>
                <div>
                    {view && (
                        <UploadImage
                            uploaded={uploaded}
                            setUploaded={setUploaded}
                            change={change}
                            id={id}
                        />
                    )}
                </div>
                <IoIosAddCircleOutline
                    onClick={() => {
                        setChange('post')
                        setView(!view)
                    }}
                    className="mb-5 cursor-pointer  rounded-[150px] bg-Liver text-white"
                    size={30}
                />
                <div className="flex flex-col md:flex-row">
                    <div className="mr-24 h-[371px] w-[345px] rounded-[5px] bg-white bg-opacity-10 ">
                        <PostsImage posts={posts} creator={creator} />
                    </div>
                    <div>
                        <Posts posts={posts} creator={creator} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile