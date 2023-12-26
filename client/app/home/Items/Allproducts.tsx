import React, { useContext, useEffect, useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import { Toaster, toast } from 'sonner'
import { MyContext } from '../../../MyContext'
import { QueryCache, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ItemCard from './ItemCard'


function AllProducts() {
    const { setHandleFilter, handleFilter , filterCategory , filterBrands} = useContext(MyContext)
    const arr = [1,2,3,4]
 const slideIn = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: config.wobbly,
        reset: true,
    })

    const queryCache = new QueryCache()
    const cache = queryCache.find({queryKey : ['items', filterCategory , handleFilter, filterBrands]})
    console.log(cache)
    const handleSortChange = (e : any) => {
        const sortBy = e.target.value
        let toFilter
        if (sortBy === 'Available') {
            toFilter = 'Available'
        } else if (sortBy === 'Incoming') {
            toFilter = 'Incoming'
        } else if (sortBy === 'OnSale') {
            toFilter = 'On Sale'
        } else if (sortBy === 'All') {
            toFilter = 'All'
        }
        setHandleFilter(toFilter)
    }

    const {data , isLoading , error} = useQuery({
        queryKey: ['items', filterCategory , handleFilter, filterBrands],
        queryFn : async () => {
            if (filterCategory) {
                console.log(filterCategory)
                return  axios.get(`http://localhost:3001/Items/brands/${filterCategory}`).then(res => res.data)
            }else if (handleFilter === "All") {
                console.log(handleFilter)
                return  axios.get(`http://localhost:3001/items`).then(res =>  res.data)
            }else if (filterBrands) {
                return axios.get(
                    `http://localhost:3001/collections/item/${filterBrands}`
                    ).then(res =>  res.data)
            }else if (handleFilter) {
                return  axios.get(`http://localhost:3001/items/item/status/${handleFilter}`).then(res => res.data)
            }else {
                return  axios.get(`http://localhost:3001/items`).then(res =>  res.data)
            }
        }
    })
    if (isLoading) {
        return (
            arr.map(() =>
            <div className='item-box relative w-1/2 flex flex-col items-center gap-2 mr-4 justify-start rounded-md border border-gray-300 p-4 font-medium shadow-md bg-[#4d48454d]'>   
        </div>
                   )
        ) 

    }
    if(error) "this is the error" + error.message

    return (
        <animated.div style={slideIn} className="all-products w-full  p-6">
            <div className="container">
                <div className="header flex items-center justify-between">
                    <p>{`${data.length} `}Items</p>
                    <select
                        className="sort-select w-40 rounded-md border bg-transparent px-4 py-2 text-white outline-none transition-all focus:outline-none"
                        onChange={handleSortChange}
                    >
                        <option
                            value=""
                            disabled
                            hidden
                            // defaultValue
                            className="sort-option bg-[#d3a48974] text-black"
                        >
                            Sort By
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="All"
                            selected
                        >
                            All
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="Available"
                        >
                            Available
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="Incoming"
                        >
                            Incoming
                        </option>
                        <option
                            className="sort-option bg-[#d3a48974] py-2"
                            value="OnSale"
                        >
                            On Sale
                        </option>
                    </select>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-16 md:grid-cols-2 xl:grid-cols-3">
                    {
                        data.map((item : any) => (
                         <ItemCard key={data.collectionId} {...item} />
                        ))}
                </div>
            </div>
            <Toaster richColors />
        </animated.div>
    )
}

export default AllProducts