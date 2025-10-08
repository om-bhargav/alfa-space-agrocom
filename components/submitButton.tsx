"use client";
import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import Loading from "./Loading";
const submitButton = ({text,...props}:{text:string}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#7c2528] text-white flex justify-center my-2 py-2 px-4 rounded-lg hover:bg-[#5e1c1f] transition"
    {...props}>
      {pending ? <Loading/> : text}
    </button>
  );
};

export default submitButton;
