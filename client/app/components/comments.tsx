import React from 'react'
import { getComment } from '../utils/profile/profile';
import UserComment from './UserComment';
interface Comment{
    id:number
}

const Comments:React.FC <Comment> = ({id}) => {
    console.log(id)
    const { data: commen, isLoading: CommentLoading, isError: CommentError } = getComment(id)
  
  console.log(commen)
  return (commen?.map((comment)=>{
    return <div className="flex justify-center relative top-1/3 ">
<div className="relative grid grid-cols-1 gap-4 p-4 mb-8  mt-10 border rounded-lg bg-white bg-opacity-15 shadow-lg w-full">
    <UserComment id={comment.userId}/>
    <p className="-mt-4 text-gray-500">{comment?.comment }</p>
</div></div>

  }
)
    
  )
}

export default Comments
