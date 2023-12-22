'use client'
import {  useQuery } from "@tanstack/react-query";
import axios from "axios";



export function getBrands(){
    const query=useQuery({
        queryKey:["brands"],
        queryFn:async()=>{
            const result=await axios.get(`http://localhost:3001/brands`)
            return result.data
        },
        select:(data)=>data
    })
    return query
} 