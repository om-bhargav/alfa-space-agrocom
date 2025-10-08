"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import { totalProductDocs, totalQueryDocs } from "@/actions/actions";
const AdminDashboard = () => {
  const { data: session, status, update } = useSession();
  const [data, setData] = useState<any>({
    name: "",
    email: "",
    pno: "",
    id: "",
  });
  const [counts, setCounts] = useState<any>({
    queriesReceived: 0,
    productsAdded: 0,
  });
  useEffect(() => {
    const fetchDetails = async () => {
      await update();
      const qr = await totalQueryDocs();
      const pr = await totalProductDocs();
      setCounts({ queriesReceived: qr, productsAdded: pr });
    };
      fetchDetails();
  }, []);
  useEffect(() => {
    if(session){
      setData(session.user);
    }
  }, [session?.user]);
  return (
    <div className="container mx-auto max-w-[1200px] my-10 flex flex-col gap-3 text-center md:text-left">
      {status === "loading" ? (
        <Loading
          size={40}
          color="var(--main-theme)"
          className="self-center justify-self-center"
        />
      ) : (
        <>
          <div className="p-2 w-full bg-white rounded flex flex-col md:flex-row justify-center items-center gap-5 shadow-lg">
            <div>
              <img src="/user-admin.png" className="h-50" alt="" />
            </div>
            <div className="grow text-xl flex flex-col gap-2">
              <div className="font-semibold">Name</div> {data.name}
              <div>
                <div className="font-semibold">Email:</div> {data.email}
              </div>
            </div>
            <div className="grow text-xl flex flex-col gap-2">
              <div>
                <div className="font-semibold">Phone Number:</div> {data.pno}
              </div>
              <div>
                <div className="font-semibold">Admin Id:</div> {data.id}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center text-center md:text-left items-center gap-3">
            <div className="grow w-full gap-5 flex items-center justify-center flex-col md:flex-row bg-white rounded shadow-lg p-2">
              <div>
                <img src="/queries.png" className="h-50" />
              </div>
              <div className="text-xl grow">
                <div className="font-semibold">Queries Received:</div>
                {counts.queriesReceived}
              </div>
            </div>
            <div className="grow w-full gap-5 flex items-center justify-center flex-col md:flex-row bg-white rounded shadow-lg p-2">
              <div>
                <img src="/products.png" className="h-50" />
              </div>
              <div className="text-xl grow">
                <div className="font-semibold">Products Added</div>
                {counts.productsAdded}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
