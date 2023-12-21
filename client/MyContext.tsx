import axios from 'axios'
import React, { SetStateAction, createContext, useEffect, useState } from 'react'

export const MyContext = createContext({})

export const ContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [sortedItems, setSortedItems] = useState([])
    const [handleFilter, setHandleFilter] = useState('All')
    const [brands, setBrands] = useState([])
    const [filterBrands, setFilterBrands] = useState('')
    const [category, setCategory] = useState([])
    const [filterCategory, setFilterCategory] = useState(null)
    const [inputFilter, setInputFilter] = useState('')
    const [imgDetails, setImgDetails] = useState('')
    // const [filterCollections, setFilterCollections] = useState([]);
    // const [itemCollections, setItemCollections] = useState('');
    useEffect(() => {
        filterWithStatus()
    }, [handleFilter, inputFilter])

    useEffect(() => {
        fetchBrandItems()
    }, [filterBrands])

    useEffect(() => {
        fetchCategoryItems()
    }, [filterCategory])

    // useEffect(() => {
    //     fetchCollectionItems();
    // }, [filterCollections, itemCollections]);


    const filterWithStatus = async () => {
        try {
            setSortedItems([])
            if (handleFilter === 'All') {
                const result = await axios.get('http://localhost:8080/items')
                const filteredData = applyInputFilter(result.data)
                setSortedItems(filteredData)
            } else {
                const result = await axios.get(
                    `http://localhost:8080/items/item/status/${handleFilter}`
                )
                const filteredData = applyInputFilter(result.data)
                setSortedItems(filteredData)
            }
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
            const result = await axios.get(`http://localhost:8080/brands`)
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
                    `http://localhost:8080/items/brands/${filterCategory}`
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
                setBrands,
                brands,
                setFilterBrands,
                filterBrands,
                setCategory,
                category,
                filterCategory,
                setFilterCategory,
                setInputFilter,
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
