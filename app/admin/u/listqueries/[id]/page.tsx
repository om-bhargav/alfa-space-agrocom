"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { getQueryByID } from "@/actions/actions";
import { useParams } from "next/navigation";
const page = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>({
    name: "",
    email: "",
    message: "",
    createdAt: "",
  });
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const details = JSON.parse(await getQueryByID(id as string));
        const date = new Date(details.createdAt);
        setData({ ...details, createdAt: date.toLocaleString() });
        setisLoaded(true);
      };

      fetchData();
    }
  }, [id]);
  return (
    <div className="p-5 container mx-auto flex flex-col gap-8 items-center bg-white rounded max-w-[1100px] my-10">
      <div className="text-3xl font-semibold">Query Details</div>
      {isLoaded ? (
        <div className="grid w-full gap-3">
          <div className="grid gap-2">
            <label htmlFor="name">Name:</label>
            <input type="text" className="rounded border p-2" id="name" disabled value={data.name} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input type="text" className="rounded border p-2" id="email" disabled value={data.email} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" className="rounded border p-2" disabled value={data.message}></textarea>
          </div>
          <div className="bg-[var(--main-theme)] p-2 rounded text-white">Submitted On: {data.createdAt}</div>
        </div>
      ) : (
        <Loading color="var(--main-theme)" size={40} />
      )}
    </div>
  );
};

export default page;
