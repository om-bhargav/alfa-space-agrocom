"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import { useParams } from "next/navigation";
import Card from "@/components/Card";
import { getProductsByCategory } from "@/actions/actions";
import Loading from "@/components/Loading";
const Product = () => {
  const { category } = useParams();
  const [isLoaded, setisLoaded] = useState(false);
  const [products, setProducts] = useState<Object[]>([]);
  useEffect(() => {
    const fetchDetails = async () => {
      const data = JSON.parse(await getProductsByCategory(category as string));
      setProducts(data);
      setisLoaded(true);
    };
    fetchDetails();
  }, [category]);
  return (
    <Layout>
      <section className="bg-gray-100 py-6 flex-grow">
        <div className="container mx-auto max-w-[1200px] px-3 flex flex-col gap-3 items-center">
          <div className="text-[#7c2528] text-3xl font-semibold capitalize">
            {category}
          </div>
          {isLoaded ? (
            
              products.length > 0 ? <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-full gap-5 text-center">
                {products.map((product,ind) => {
                  return <Card key={ind as number} {...product} />;
                })}
              </div> : 
                <div className="align-self-center text-2xl font-semibold">No Products Added!</div>
          ) : 
            <Loading className="place-self-center mt-5" size={40} color="var(--main-theme)" />
          }
        </div>
      </section>
    </Layout>
  );
};

export default Product;
