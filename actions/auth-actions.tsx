"use server";
import User from "@/lib/models/users";
import { signIn, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/db";
import { hashPassword,compare } from "@/lib/passtechniques";
export async function validateAndSignin(formdata: FormData) {
  const email = formdata.get("email");
  const password = formdata.get("pass");
  try {

    await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    return { message: "Welcome To Admin Panel", status: "success" };
  } catch (err) {
    return { message: "Invalid Credentials", status: "error" };
  }
}
export async function validateAndSignOut() {
  await signOut({ redirect: false });
  redirect("/admin");
}

export async function getUserByEmail(email: string) {
  await connectDB();
  const user = await User.findOne({ email: email });
  if (!user) return null;
  return user;
}

export async function getUserByID(id: string) {
  await connectDB();
  const user = await User.findById(id);
  if (!user) return null;
  return JSON.stringify({
    name: user.name,
    email: user.email,
    phone_no: user.phone_no,
    _id: user._id,
  });
}
export async function updateProfile(id: string, formdata: any) {
  await connectDB();
  const user = await User.findByIdAndUpdate(id, {
    $set: {
      name: formdata.name,
      email: formdata.email,
      phone_no: formdata.pno,
    },
  });
  await user.save();
}
export async function updatePassword(id: string,formdata: FormData){
    await connectDB();
    const cpass = formdata.get("cpass") as string;
    const newpassword = formdata.get("npass") as string;
    const user = await User.findById(id);
    const res = await compare(cpass,user.password); 
    if(!res){
        return {"message":"Invalid Current Password!","status":"error"};
    }   
    const hashedPassword = await hashPassword(newpassword);
    const updated_user = await User.findByIdAndUpdate(id,{$set:{password:hashedPassword}});
    await updated_user.save();
    return {"message":"Password Updated Successfully!","status":"success"};
}
