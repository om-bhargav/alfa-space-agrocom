"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { useParams } from "next/navigation";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import { getProductByID } from "@/actions/actions";
import Loading from "@/components/Loading";
interface ProductStructure{_id:string,title:string,category:string,image:string,description:string,specifications:string}
const Product = () => {
  const { id } = useParams();
  const [productDetails,setProductDetails] = useState<ProductStructure>({_id:"",title:"",category:"",image:"",description:"",specifications:""});
  const [isLoaded,setisLoaded] = useState(false);
  useEffect(()=>{
    const fetchProduct = async () => {
        const data = await getProductByID(id as string);
        setProductDetails(JSON.parse(data));
        setisLoaded(true);
    };
    fetchProduct();
  },[id]);
  return (
    <Layout>
      <section className="bg-gray-100 py-8 flex-grow flex flex-col gap-12">
        { isLoaded ? 
        <><div className="container gap-5 mx-auto max-w-[1200px] px-3 flex gap-5 items-start flex-col lg:flex-row">
          <div className="transition duration-300 hover:shadow-lg">
            <img src="/rice.png" className="object-contain lg:h-100 rounded-lg hover:shadow-lg"/>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[#7c2528] text-3xl font-semibold">{productDetails.title}</div>
            <div className="max-w-full text-md text-justify lg:max-w-3xl">{productDetails.description}</div>
            <div>
              <div className="text-[#7c2528] text-2xl font-semibold">Specifications</div>
              {/* <ul className="list-inside list-disc text-lg">
                <li>Specifications</li>
                <li>Specifications</li>
                <li>Specifications</li>
                <li>Specifications</li>
                <li>Specifications</li>
              </ul> */}
              <div> 
                <pre className="text-lg">{productDetails.specifications}</pre>
              </div>
            </div>
          </div>
        </div>
        <div className="container gap-5 mx-auto max-w-[1200px] px-3 text-center">
          <div className="text-[#7c2528] text-3xl font-semibold self-center">You Might Also Like</div>
            <Carousel category={productDetails.category}/>
        </div></>
        : <Loading color="var(--main-theme)" className="place-self-center" size={40}/>}

      </section>
    </Layout>
  );
};

export default Product;
