"use client";
import React, { useState } from 'react'
import { addProduct,uploadImage } from '@/actions/actions'
import SubmitButton from '@/components/submitButton'
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
const page = () => {
  const [imageUrl,setImageUrl] = useState("");
  const router = useRouter();
  return (
   <div className="py-5 px-4 container mx-auto flex flex-col gap-5 items-center bg-white rounded max-w-[1100px] my-10">
        <div className='text-3xl font-semibold'>Add Product</div>
        <form action={async formData => {
            const data = Object.fromEntries(formData.entries());
            const url = await uploadImage(data.img as File);
            await addProduct({...data,img:url as string});
            setImageUrl("");
            toast.success("Product Added Successfully");
            router.back();
        }} className='grid w-full lg:w-[80%] gap-3'>
            <div className='grid'>
                <label htmlFor="imgup">Select Product Image:</label>
                <label htmlFor="prod-image" id="imgup"><img src={imageUrl || "/upload-image.png"} className='py-3 rounded-lg h-40 cursor-pointer'/></label>
                <input onChange={(e)=>{
                    const file = (e.target as HTMLInputElement)?.files?.[0];
                    const url = URL.createObjectURL(file as File);
                    console.log(url as string);
                    setImageUrl(url as string);
                }} type="file" name="img" accept="image/png,image/gif,image/jpeg,image/jpg" id="prod-image" required className='hidden' />
            </div>
            <div className='grid gap-2'>
                <label htmlFor="">Enter Product Title:</label>
                <input className='border rounded p-2 outline-none' name="name" type="text" required/>
            </div>
            <div className='grid gap-2'>
                <label htmlFor="">Enter Product Description:</label>
                <textarea className='border rounded p-2 outline-none' name="description" rows={5} required ></textarea>
            </div>
            <div className='grid gap-2'>
                <label htmlFor="">Enter Product Specifications:</label>
                <textarea className='border rounded p-2 outline-none' name="specifications" rows={5}  required></textarea>
            </div>
            <div className='grid gap-2'>
                <label htmlFor="">Select Product Category:</label>
                <select  className='border rounded p-2 outline-none' name="category" defaultValue="rice">
                    <option value="rice">Rice</option>
                    <option value="wheat">Wheat</option>
                    <option value="wheatflour">Wheat Flour</option>
                    <option value="pulse">Pulse</option>
                </select>
            </div>
            <SubmitButton text="Add Product"/>
        </form>
   </div>
  )
}

export default page