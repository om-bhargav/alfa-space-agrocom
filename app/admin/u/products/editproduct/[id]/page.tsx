"use client";
import React, { useEffect, useState } from "react";
import { updateProduct, uploadImage, getProductByID,deleteProduct } from "@/actions/actions";
import SubmitButton from "@/components/submitButton";
import toast from "react-hot-toast";
import { useParams,useRouter } from "next/navigation";
import Loading from "@/components/Loading";
interface PageProps {
  params: {
    id: string;
  };
}
interface ProductStructure {
  _id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  specifications: string;
}
const page = () => {
  const [image, setImage] = useState<{url:string,file:File|null}>({
    url: "",
    file: null,
  });
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<ProductStructure>({
    _id: "",
    title: "",
    category: "",
    image: "",
    description: "",
    specifications: "",
  });
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);
  const router = useRouter();
  const [deleteButton,setDelete] = useState(false);
  useEffect(() => {
    if (id) {
        const fetchDetails = async () => {
            let data = await getProductByID(id as string);
            setProductDetails(JSON.parse(data));
            setIsLoaded(true);
        };
        fetchDetails();
    }
  }, []);
  const onChangeHandler = async (name: string, value: string) => {
    setProductDetails({ ...productDetails, [name]: value });
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (image.url !== null) {
      const url = await uploadImage(image.file as File);
      await updateProduct({ ...productDetails, image: url as string });
      setImage({ url: "", file: null });
    }
    await updateProduct({ ...productDetails });
    toast.success("Product Updated Successfully");
    router.back();
  };
  return (
    <div className="py-5 px-4 container mx-auto flex flex-col gap-5 items-center bg-white rounded max-w-[1100px] my-10">
      <div className="text-3xl font-semibold">Update Product</div>
      { isLoaded ?
      <form onSubmit={submitHandler} className="grid w-full lg:w-[80%] gap-3">
        <div className="grid">
          <label htmlFor="imgup">Select Product Image:</label>
          <label htmlFor="prod-image" id="imgup">
            <img
              src={image.url || productDetails.image}
              className="py-3 rounded-lg h-40 cursor-pointer"
            />
          </label>
          <input
            onChange={(e) => {
              const file = (e.target as HTMLInputElement)?.files?.[0];
              const url = URL.createObjectURL(file as File);
              setImage({ url: url as string, file:file as File});
            }}
            type="file"
            name="img"
            accept="image/png,image/gif,image/jpeg,image/jpg"
            id="prod-image"
            className="hidden"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="">Enter Product Title:</label>
          <input
            className="border rounded p-2 outline-none"
            name="name"
            type="text"
            value={productDetails.title}
            onChange={(e) => onChangeHandler("title", e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="">Enter Product Description:</label>
          <textarea
            className="border rounded p-2 outline-none"
            name="description"
            rows={5}
            value={productDetails.description}
            onChange={(e) => onChangeHandler("description", e.target.value)}
            required
          ></textarea>
        </div>
        <div className="grid gap-2">
          <label htmlFor="">Enter Product Specifications:</label>
          <textarea
            className="border rounded p-2 outline-none"
            name="specifications"
            rows={5}
            value={productDetails.specifications}
            onChange={(e) => onChangeHandler("specifications", e.target.value)}
            required
          ></textarea>
        </div>
        <div className="grid gap-2">
          <label htmlFor="">Select Product Category:</label>
          <select
            className="border rounded p-2 outline-none"
            name="category"
            defaultValue={productDetails.category}
            onChange={(e) => onChangeHandler("category", e.target.value)}
          >
            <option value="rice">Rice</option>
            <option value="wheat">Wheat</option>
            <option value="wheatflour">Wheat Flour</option>
            <option value="pulse">Pulse</option>
          </select>
        </div>
        <SubmitButton text="Update Product" />
        <input type="button" disabled={deleteButton} onClick={async ()=>{await deleteProduct(id as string);toast.success("Product Deleted Successfully");router.back();}} className="bg-[var(--main-hover-theme)] hover:bg-[#5e1c1f] rounded p-2 text-white cursor-pointer" value="Delete Product" />
      </form> : <Loading color="var(--main-theme)" size={40}/>
}
    </div>
  );
};

export default page;
