"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { SetStateAction, createContext, useEffect, useState } from 'react'


interface MyContextValues {
    setHandleFilter: React.Dispatch<React.SetStateAction<any>>;
    handleFilter : string;
    inputFilter : string;
    setSortedItems : React.Dispatch<React.SetStateAction<any[]>>;
    sortedItems: any[]; // Adjust the type according to your data structure
    // setBrands: React.Dispatch<React.SetStateAction<any[]>>;
    brands: any[]; // Adjust the type according to your data structure
    setFilterBrands: React.Dispatch<React.SetStateAction<string>>;
    filterBrands: string;
    setCategory: React.Dispatch<React.SetStateAction<string[]>>;
    category: string[];
    setFilterCategory: React.Dispatch<React.SetStateAction<string | null>>;
    filterCategory: string | null;
    setInputFilter: React.Dispatch<React.SetStateAction<string>>;
    filterWithStatus: () => {}; // Adjust the return type accordingly
    setImgDetails: React.Dispatch<React.SetStateAction<string>>;
    imgDetails: string;
}
export const MyContext = createContext ({} as MyContextValues)

export const ContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [sortedItems, setSortedItems] = useState<any[]>([]);
    const [handleFilter, setHandleFilter] = useState<string>('All');
    const [brands, setBrands] = useState([]); 
    const [filterBrands, setFilterBrands] = useState('');
    const [category, setCategory] = useState<string[]>([]);
    const [filterCategory, setFilterCategory] = useState<string | null>(null);
    const [inputFilter, setInputFilter] = useState('');
    const [imgDetails, setImgDetails] = useState('');
    // const [filterCollections, setFilterCollections] = useState([]);
    // const [itemCollections, setItemCollections] = useState('');

    // useEffect(() => {
    //     fetchBrandItems()
    //     console.log(brands, "dsqcfs")
    // }, [filterBrands])

    // useEffect(() => {
    //     fetchCategoryItems()
    // }, [filterCategory])
    
    // console.log(filterCategory, 'jgjgjgjg')
    // useEffect(() => {
    //     fetchCollectionItems();
    // }, [filterCollections, itemCollections]);


    const filterWithStatus : () => {} = async () => {
        try {
            setSortedItems([])
            //     const result = await axios.get('http://localhost:8080/items')
            //     const filteredData = applyInputFilter(result.data)
            //     setSortedItems(filteredData)
            // } else {
                //     const result = await axios.get(
                    //         `http://localhost:8080/items/item/status/${handleFilter}`
                    //     )
                    //     const filteredData = applyInputFilter(result.data)
                    //     setSortedItems(filteredData)
                    // }
                    const query = useQuery({
                        queryKey : ['items'],
                        queryFn :async () => {
                    if (handleFilter === 'All') {
                   return axios.get('http://localhost:3001/items')
                }else {
                    const data = await axios.get(`http://localhost:3000/items/item/status/${handleFilter}`) 
                    const filteredData = applyInputFilter(data)
                    setSortedItems(filteredData)
                }
                    }
                })
            return query
        } catch (error) {
            console.error(error)
        }
    }

    const applyInputFilter = (data : any) => {
        if (inputFilter) {
            return data.filter((item : any) =>
                item.name.toLowerCase().includes(inputFilter.toLowerCase())
            )
        }
        return data
    }

    const fetchBrandItems = async () => {
        try {
            setSortedItems([])
            const result = await axios.get(`http://localhost:3001/brands/`)
            // console.log(result.data)
            setBrands(result.data)

            if (filterBrands) {
                const brandResult = await axios.get(
                    `http://localhost:8080/collections/item/${filterBrands}`
                    )
                    console.log(brandResult);
                    setSortedItems(brandResult.data[0]?.items || [])
                }
            } catch (error) {
                console.error(error)
            }
        }
        
        // console.log(brands, "dsqcfs")
    const fetchCategoryItems = async () => {
        try {
            setSortedItems([])
            const result = await axios.get('http://localhost:8080/items')
            const uniqueCategories : any = Array.from(
                new Set(result.data.map((item : any) => item.category))
            )
            setCategory(uniqueCategories)

            if (filterCategory) {
                const categoryResult = await axios.get(
                    `http://localhost:3001/Items/brands/${filterCategory}`
                )
                setSortedItems(categoryResult.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    // const fetchCollectionItems = async () => {
    //     try {
    //         setFilterCollections([]);
    //         if (itemCollections) {
    //             const result = await axios.get(`http://localhost:8080/collections`);
    //             setFilterCollections(result.data);

    //             const collectionResult = await axios.get(
    //                 `http://localhost:8080/item/collections/${itemCollections}`
    //             );
    //             setSortedItems(collectionResult.data);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <MyContext.Provider
            value={{
                setHandleFilter,
                sortedItems,
                // setBrands,
                brands,
                setFilterBrands,
                filterBrands,
                setCategory,
                category,
                filterCategory,
                setFilterCategory,
                setInputFilter,
                filterWithStatus,
                handleFilter,
                setSortedItems,
                inputFilter,
                // itemCollections,
                // setItemCollections,
                // filterCollections,
                // setFilterCollections,
                setImgDetails,
                imgDetails
            }}
        >
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
