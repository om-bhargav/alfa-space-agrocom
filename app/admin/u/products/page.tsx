"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { listProducts } from "@/actions/actions";
import Loading from "@/components/Loading";
interface ProductStructure{_id:string,title:string,category:string,image:string,description:string,specifications:string}
const EditProducts = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [products, setProducts] = useState<any>([]);
  const [searchedproducts, setSearchedProducts] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchedText,setSearchedText] = useState<string>("");
  useEffect(() => {
    const fetchProducts = async () => {
      const tempProducts = JSON.parse(await listProducts());
      setProducts(tempProducts);
      setSearchedProducts(tempProducts);
      setIsLoaded(true);
    };
    fetchProducts();
  }, []);
  return (
    <div className="py-5 px-4 container mx-auto flex flex-col gap-5 items-center bg-white rounded max-w-[1100px] my-10">
      <div className="flex w-full text-center justify-between md:flex-row flex-col gap-5">
        <div className="text-3xl font-bold">Products</div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search Products Here..."
            className="grow outline-none border rounded border-gray-900 bg-white py-1 px-3"
            onChange={(e)=>setSearchedText(e.target.value)}
            value={searchedText}
          />{" "}
          <button className="bg-[#9c2528] text-lg text-white px-2 py-1 rounded font-semibold"
          onClick={()=>{
            setIsLoaded(false);
            setSearchedProducts(products.filter((product: ProductStructure)=>product.title.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase())));
            setIsLoaded(true);
          }}>
            Search
          </button>
        </div>
        <button
          onClick={() => router.push(`${pathname}/addproduct`)}
          className="bg-[#9c2528] text-white p-2 rounded font-semibold"
        >
          Add Product +
        </button>
      </div>
      <div className="w-full grid text-center">
        <div className="border-b grid grid-cols-4 pb-2">
          <div className="font-bold text-blue-800">
            <a href="#">#</a>
          </div>
          <div className="font-bold text-blue-800">
            <a href="#">Product Name</a>
          </div>
          <div className="font-bold text-blue-800">
            <a href="#">Category</a>
          </div>
          <div className="font-bold text-blue-800">
            <a href="#">Action</a>
          </div>
        </div>
        {isLoaded ? (
          searchedproducts.length>0 ? searchedproducts.map((product:ProductStructure,ind: number) => {
            return (<div className="grid grid-cols-4 gap-5 border-b items-center hover:bg-gray-200 p-2" key={product._id}>
              <div>{ind+1}</div>
              <div>{product.title}</div>
              <div>{product.category}</div>
              <div>
                <button onClick={()=>router.push(`${pathname}/editproduct/${product._id}`)} className="bg-[#7c2528] btn-sm text-white font-semibold text-xs md:text-sm p-2 rounded transition duration-300 hover:bg-[#9c2528]">
                  Edit Product
                </button>
              </div>
            </div>)
          }):<div className="mt-5 text-semibold text-2xl">No Products Found!</div>
        ) : (
          <Loading
            size={40}
            className="place-self-center mt-5"
            color="var(--main-theme)"
          />
        )}
      </div>
    </div>
  );
};

export default EditProducts;
