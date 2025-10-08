"use client";
import React, { useEffect, useState } from "react";
import { getUserByID,updateProfile,updatePassword } from "@/actions/auth-actions";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/submitButton";
import { hashPassword } from "@/lib/passtechniques";
const Settings: React.FC = () => {
  const [data,setData] = useState({"name":"","email":"","pno":"","id":""});
  const [loaded,setLoaded] = useState(false);
  const {data:session,status} = useSession();
  const router = useRouter();
  const onChangeHandler = (e: any) => {
    setData({...data,[e.target.name]:e.target.value});
  };
  useEffect(()=>{
      if(session){
        const fetchDetails = async () => {
          const response = await getUserByID(session?.user?.id as string);
          const parsed_data = JSON.parse(response as string);
          setData({...parsed_data,"pno":parsed_data.phone_no,"id":parsed_data._id});
          setLoaded(true);
        };
        fetchDetails();
      }
  },[status]);
  return (
    <div className="py-5 px-4 container mx-auto flex flex-col gap-5 items-center bg-white rounded max-w-[1100px] my-10">
      {loaded ? 
      <div className="flex flex-col w-full text-center items-center justify-center gap-5">
        <div className="md:max-w-[700px] gap-5 grid w-full">
          <div>
            <div className="text-2xl font-bold">Profile Settings</div>
            <form action = {async formdata =>{
                await updateProfile(data.id,data);
                toast.success("Profile Updated Successfully");
                router.refresh();
            }} className="grid gap-5 mt-4">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="self-start text-md font-semibold" htmlFor="fullname">Your Name:</label>
                  <input type="text" onChange={onChangeHandler} className="outline-none border rounded-lg px-2 py-1" name="name" value={data.name} id="fullname" />
                </div>
                <div className="flex flex-col">
                  <label className="self-start text-md font-semibold" htmlFor="email">Your Email:</label>
                  <input type="text" onChange={onChangeHandler} className="outline-none border rounded-lg px-2 py-1" name="email" value={data.email} id="email" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="self-start text-md font-semibold" htmlFor="pno">Your Phone No.:</label>
                  <input type="text" onChange={onChangeHandler} className="outline-none border rounded-lg px-2 py-1" name="pno" id="pno" value={data.pno} />
                </div>
                <div className="flex flex-col">
                  <label className="self-start text-md font-semibold" htmlFor="userid">Your User ID:</label>
                  <input type="text" className="outline-none border rounded-lg px-2 py-1 bg-gray-200" name="uid" value={data.id} id="userid" disabled />
                </div>
              </div>
              <div className="w-full grid md:flex md:justify-end"><SubmitButton text="Update Profile"/></div>
            </form>
          </div>

          <div>
            <div className="text-2xl font-bold">Password Settings</div>
            <form
            action={
              async formdata =>{
                const {status,message} = await updatePassword(data.id,formdata);
                if(status==="success"){
                  toast.success(message);
                }else{
                  toast.error(message);
                }
              }
            }
             className="flex gap-3 mt-3 flex-col">

                
                <div className="flex grow flex-col"><label className="self-start text-md font-semibold" htmlFor="cpass">Enter Current Password:</label><input id="cpass" name="cpass" className="outline-none border rounded-lg px-2 py-1" type="password" placeholder="Current Password"/></div>
                
                <div className="flex grow flex-col"><label className="self-start text-md font-semibold" htmlFor="npass">Enter New Password:</label><input id="npass" name="npass" className="outline-none border rounded-lg px-2 py-1" type="password" placeholder="New Password"/></div>
                <SubmitButton text="Change Password"/>
            </form>
          </div>
        </div>
      </div>:<Loading size={40} color="var(--main-theme)"/>
  }
    </div>
  );
};

export default Settings;
