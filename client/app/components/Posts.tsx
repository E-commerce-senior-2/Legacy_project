
import axios from 'axios'
import React, { useState, KeyboardEvent, useRef } from 'react'
import { GoTrash } from "react-icons/go";
import { addLike, commentPost, deletePosts } from '../utils/profile/profile';
import { AiOutlineLike } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { MdPublish } from "react-icons/md";
import { IoEnterSharp } from "react-icons/io5";
import Comments from './comments';
interface Posts {
    posts: Post[] | null | undefined;
    creator: Creator | null | undefined;
}

const Posts: React.FC<Posts> = ({ posts, creator }) => {
    const currentUserString = window.localStorage.getItem('currentUser') || "{}"
    const currentUser = JSON.parse(currentUserString)

    const deleted = deletePosts()
    const commentPosts = commentPost()
    const [com, setCom] = useState(false);

    const comment = useRef<HTMLInputElement>(null)
    const addLikes = addLike()
    console.log(currentUser)
    return posts?.map((post) => {
        return (

            <div className="flex bg-white bg-opacity-15 shadow-lg rounded-lg mx-4 md:mx-auto  max-w-md md:max-w-2xl ">
                <div className="flex items-start px-4 py-6">
                    <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={creator?.pfImage} alt="avatar" />
                    <div className="">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{creator?.fullName} </h2>
                            <small className="text-sm text-gray-700">                 <GoTrash
                                className=" flex-auto  cursor-pointer text-xl"
                                onClick={() => {
                                    deleted.mutate(post.id);
                                    window.location.reload()
                                }}
                            /></small>
                        </div>
                        <p className="text-gray-700">Joined 12 SEP 2012. </p>
                        <p className="mt-3 text-gray-700 text-sm">
                            {post.status}
                        </p>
                        <div>
                            <img
                                className="h-[426px] w-[666px] rounded-[5px]"
                                src={post.image}
                            />
                        </div>

                        <div className="mt-4 flex items-center">
                            <div className="flex  text-gray-700 text-sm mr-3" onClick={() => {
                                addLikes.mutate(post.id);
                                window.location.reload()
                            }}>
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>{post.like}</span>
                            </div>
                            <div
                                onClick={() => setCom(!com)}
                                className="flex  text-gray-700 text-sm mr-8">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                                <span >8</span>
                            </div>
                            <div className="flex text-gray-700 text-sm mr-4">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                <span>share</span>
                            </div>
                        </div>
                        {
                            com && (
                                <div className='mt-5 flex flex-col'>
                                    <Comments id={post.id} />
                                    <div className='mt-5 flex justify-center items-center'>
                                        <input
                                            type="text"
                                            placeholder='Your Comment...'
                                            className='w-full p-2 rounded-full bg-white bg-opacity-15'
                                            ref={comment}
                                        />
                                        <div
                                        onClick={() => { commentPosts.mutate({ userId: currentUser.id, postId: post?.id, comment: comment?.current?.value }) }}>
                                            <IoEnterSharp  className="h-[25px] w-[25px] "/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        )
    })
}

export default Posts
