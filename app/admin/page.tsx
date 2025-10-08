"use client";
import Layout from "@/components/layout";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { validateAndSignin } from "@/actions/auth-actions";
import SubmitButton from "@/components/submitButton";
const AdminLogin = () => {
  const router = useRouter();
  return (
    <Layout>
      <section className="grow py-10 px-5 flex justify-center items-center">
        <form
          action={async formdata=>{
            const {status,message} = await validateAndSignin(formdata);
            if(status==="success"){
              router.push("/admin/u/dashboard");
              toast.success(message);
            }else{
              toast.error(message);
            }
          }}
          className="text-lg container mx-auto border font-semibold text-[#9c2528] border-[#7c2528] rounded-lg max-w-[500px] grid place-items-center p-5 gap-5"
        >
          <img src="/favicon.png" className="h-50" />
          <div className="text-center text-4xl font-bold">Admin Login</div>
          <div className="grid w-full gap-1">
            <label htmlFor="email">Enter Admin Email:</label>
            <input
              required
              placeholder="example123@domain.subdomain"
              className="border rounded p-1 text-black outline-none"
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className="grid w-full gap-1">
            <label htmlFor="pass">Enter Admin Password:</label>
            <input
              required
              placeholder="*******"
              className="border rounded p-1 text-black outline-none"
              type="password"
              id="pass"
              name="pass"
            />
          </div>
          <div className="grid w-full">
           <SubmitButton text="Login"/>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default AdminLogin;
