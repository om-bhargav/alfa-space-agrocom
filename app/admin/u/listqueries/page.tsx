"use client";
import React, { useEffect, useState } from "react";
import { listQueries } from "@/actions/actions";
import Loading from "@/components/Loading";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
const page = () => {
  const [queries, setQueries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(await listQueries());
      setQueries(data);
      setLoaded(true);
    };
    fetchData();
  }, []);
  return (
    <div className="p-5 container mx-auto flex flex-col gap-8 items-center bg-white rounded max-w-[1100px] my-10">
      <div className="text-3xl font-bold">Customer Queries</div>
      <div className="w-full grid text-center">
        <div className="border-b grid grid-cols-4 pb-2">
          <div className="font-bold text-blue-800">
            <a href="#">#</a>
          </div>
          <div className="font-bold text-blue-800">
            <a href="#">Name</a>
          </div>
          <div className="font-bold text-blue-800">
            <a href="#">Email</a>
          </div>
          <div className="font-bold text-blue-800">
            <a href="#">Action</a>
          </div>
        </div>

        {loaded ? (
          queries.map((query: { name: string; email: string ,_id:string }, ind) => {
            return (
              <div
                key={ind}
                className="grid grid-cols-4 gap-5 border-b items-center hover:bg-gray-200 p-2"
              >
                <div>{ind + 1}</div>
                <div className="break-words">{query.name}</div>
                <div className="break-words">{query.email}</div>
                <div>
                  <button
                    onClick={()=>router.push(`${pathname}/${query._id}`)}
                    className="whitespace-nowrap bg-[#7c2528] btn-sm text-white text-xs md:text-sm p-2 rounded transition duration-300 hover:bg-[#9c2528]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <Loading
            color="var(--main-theme)"
            className="place-self-center mt-5"
            size={40}
          />
        )}
      </div>
    </div>
  );
};

export default page;
