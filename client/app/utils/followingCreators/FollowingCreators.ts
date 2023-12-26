'use client'
import {  useQuery } from "@tanstack/react-query";
import axios from "axios";



export function getCreators(){
    const query=useQuery({
        queryKey:["creators"],
        queryFn:async()=>{
            const result=await axios.get(`http://localhost:3001/creators`)
            return result.data
            
        },
        select:(data)=>data
    })
    return query
} 