import React from 'react'
import { getUser } from '../utils/profile/profile'
interface UserComment{
    id:number
}
const UserComment:React.FC <UserComment> = ({id}) => {
  
    let user:any;
    const { data ,isLoading, isError, isSuccess} = getUser(id)  

    if (isLoading) <p>'loading...'</p>;
    if (isError) <p>'error'</p>;
    if(isSuccess) user = data
    console.log(user,'user');
    
  return (
    <div className="relative flex gap-4">
        <img src={user?.pfImage ||"https://th.bing.com/th/id/R.b743d9da06a8d673ed681e7337c2e4d4?rik=Jg%2bOSNmNGdKm5Q&pid=ImgRaw&r=0"} className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"/>
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{user?.fullName}</p>
                <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
            </div>
            <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
        </div>
    </div>
  )
}

export default UserComment
