import React, { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { storage } from '@/firebase_auth';

import { addPosts, addProfile, changeBgImagec } from '../utils/profile/profile';


interface UploadImageProps {
  uploaded: boolean;
  setUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  change: string;
  id: number | undefined;
}


const UploadImage: React.FC <UploadImageProps> = ({ uploaded, setUploaded, change, id }) => {
  const [imageUpload, setImageUpload] = useState<File | undefined>(undefined)
  const [chang, setChang] = useState<string | null>(null);
    const [kind, setKind] = useState('')
    const [post, setPost] = useState('')
   
    const uploagbg=changeBgImagec()
    const addposts=addPosts();
    const imageProfile=addProfile();
    //////////////:///////////change bg image//////////////////////////////////
    const changeBgImage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:number|undefined, imageUpload: File|undefined, setUploaded: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> => {
      e.preventDefault();
  if (imageUpload){
      const imageRef = ref(storage, `img/${imageUpload.name }`);
      await uploadBytes(imageRef, imageUpload);
  
      const downloadurl = await getDownloadURL(imageRef);
       uploagbg.mutate( { id, downloadurl})
      
          setUploaded(false);
  }
  else {
    console.error('No image selected for upload');
  }
  };
    //////////////////////add post///////////////////////////////////////////
    const addPost = async (status:string, e:React.MouseEvent<HTMLButtonElement, MouseEvent>,imageUpload:File|undefined) => {
        e.preventDefault()
        if (imageUpload){
        console.log('a')
        const imageRef = ref(storage, `img/${imageUpload.name }`)
        await uploadBytes(imageRef, imageUpload)

        const downloadurl = await getDownloadURL(imageRef)
                addposts.mutate({id,downloadurl,status})
                setUploaded(false)
     }
     else{ console.error('No image selected for upload');}}

    //////////////////////:change pf image//////////////////////////////////////
    const changePfImage = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,imageUpload: File|undefined) => {
        e.preventDefault()
        console.log(55555555555)
        if(imageUpload){
        const imageRef = ref(storage, `img/${imageUpload.name }`)
        await uploadBytes(imageRef, imageUpload)

        const downloadurl = await getDownloadURL(imageRef)
       imageProfile.mutate({id,downloadurl})
            
                setUploaded(false)
        } else { console.error('No image selected for upload');}  
    }

    ////////////////////////////:edit profile details//////////////////////////////::
    // const handleChange = (kind, chang, e) => {
    //     e.preventDefault()
    //     var obj = {}
    //     obj[kind] = chang
    //     console.log(obj)
    //     console.log(kind, chang)
    //     axios
    //         .put(`http://localhost:8080/creators/${kind}/${id}`, obj)
    //         .then((response) => console.log(response))
    //         .catch((error) => console.error(error))
    // }

    ////////////////////////////////render forms////////////////////////////////////
    if (change === 'bgimage')
        return (
            <div className="flex items-center justify-center lg:p-12 backdrop-blur-lg ">
                <div className="mx-auto w-full max-w-[550px]  bg-orange-100">
                    <form className="px-9 py-6 ">
                    <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="sr-only"
                                    onChange={(e) =>
                                        setImageUpload(e.target.files?.[0])
                                    }
                                />
                                <label
                                    htmlFor="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] lg:p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-[#07074D]">
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        

                        <div>
                            <button
                                onClick={async (e) => {
                                    console.log('test')
                                    changeBgImage(e,id,imageUpload,setUploaded)
                                }}
                                className="hover:shadow-form cursor-pointer w-full rounded-md bg-orange-200 px-8 py-3 text-center text-base font-semibold text-orange-800 outline-none"
                            >
                                Send File
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    else if (change === 'pfimage')
        return (
            <div className="flex items-center justify-center lg:p-12 backdrop-blur-lg">
                <div className="mx-auto w-full max-w-[550px] bg-orange-100">
                    <form className="px-9 py-6">
                    <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="sr-only"
                                    onChange={(e) =>
                                        setImageUpload(e.target.files?.[0])
                                    }
                                />
                                <label
                                    htmlFor="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] lg:p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-[#07074D]">
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        
                        <div>
                            <button
                                onClick={async (e) => {
                                    changePfImage(e,imageUpload)
                                }}
                                className="hover:shadow-form  cursor-pointer w-full rounded-md bg-orange-200 px-8 py-3 text-center text-base font-semibold text-orange-800 outline-none"
                            >
                                Send File
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    else if (change === 'profile')
        return (
            <div className="flex items-center justify-center lg:p-12 backdrop-blur-lg">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <div className="light flex h-screen flex-col items-center justify-center">
                        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                                    Edit Profil{' '}
                                </h2>
                                <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
                                    <input
                                        id="bordered-radio-1"
                                        type="radio"
                                        value="status"
                                        name="bordered-radio"
                                        className="h-4 w-4 border-gray-300 bg-gray-100 text-Liver focus:ring-2 focus:ring-Liver dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-Liver"
                                        onClick={(e) => setKind('status')}
                                    />
                                    <label
                                        htmlFor="bordered-radio-1"
                                        className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Status
                                    </label>
                                </div>
                                <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
                                    <input
                                        checked
                                        id="bordered-radio-2"
                                        type="radio"
                                        value="bio"
                                        name="bordered-radio"
                                        className="h-4 w-4 border-gray-300 bg-gray-100  text-Liver focus:ring-2 focus:ring-Liver dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-Liver"
                                        onClick={(e) => setKind('bio')}
                                    />
                                    <label
                                        htmlFor="bordered-radio-2"
                                        className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Bio
                                    </label>
                                </div>
                                <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
                                    <input
                                        checked
                                        id="bordered-radio-2"
                                        type="radio"
                                        value="adress"
                                        onClick={(e) => setKind('adress')}
                                        name="bordered-radio"
                                        className="h-4 w-4 border-gray-300 bg-gray-100 text-Liver focus:ring-2 focus:ring-Liver dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-Liver"
                                    />
                                    <label
                                        htmlFor="bordered-radio-2"
                                        className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Address
                                    </label>
                                </div>
                            </div>
                            <form className="flex flex-col">
                                <input
                                    placeholder="Enter your edit here"
                                    className="mb-4 mt-2 rounded-md border-0 bg-gray-100 p-2 text-gray-800 transition duration-150 ease-in-out focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-Liver"
                                    onChange={(e) => {
                                        setChang(e.target.value)
                                    }}
                                    type="text"
                                />

                                <button
                                    className="mt-4 rounded-md  cursor-pointer bg-orange-200 bg-gradient-to-r to-blue-500 px-4 py-2 font-bold text-orange-800 transition duration-150 ease-in-out hover:bg-Liver hover:to-PaleDogwood"
                                    onClick={(e) => {
                                        
                                    }}
                                    type="submit"
                                >
                                    Edit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (change === 'post')
        return (
            <div className="flex items-center justify-center lg:p-12 backdrop-blur-lg">
                <div className="mx-auto w-full max-w-[550px] bg-orange-100">
                    <form className="px-9 py-6 ">
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    className="sr-only"
                                    onChange={(e) =>
                                        setImageUpload(e.target.files?.[0])
                                    }
                                />
                                <label
                                    htmlFor="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] lg:p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span className="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-[#07074D]">
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input
                                className=" w-50 mb-4 mt-2 rounded-md border-0 bg-gray-100 p-2 text-gray-800 transition duration-150 ease-in-out focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-Liver"
                                type="text"
                                onChange={(e) => {
                                    setPost(e.target.value)
                                }}
                            ></input>
                        </div>
                        <div>
                            <button
                                onClick={async (e) => {
                                    console.log('testing add post')
                                    addPost(post, e,imageUpload)
                                }}
                                className="hover:shadow-form cursor-pointer w-full rounded-md bg-orange-200 px-8 py-3 text-center text-base font-semibold text-orange-800  outline-none"
                            >
                                Send Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default UploadImage
