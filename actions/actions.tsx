"use server";
import { connectDB } from "@/lib/db";
import Query from "@/lib/models/queries";
import Product from "@/lib/models/products";

interface ProductStructure {
  _id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  specifications: string;
}

export async function totalQueryDocs() {
  await connectDB();
  return await Query.countDocuments();
}
export async function totalProductDocs() {
  await connectDB();
  return await Product.countDocuments();
}


export async function sendQuery(formData: FormData) {
  const { name, email, msg } = Object.fromEntries(formData.entries());
  await connectDB();
  const newQuery = await Query.create({ name, email, message: msg });
  await newQuery.save();
}

export async function listQueries() {
  await connectDB();
  const allQueries = await Query.find().sort({ createdAt: -1 });
  return JSON.stringify(allQueries);
}
export async function getQueryByID(id: string) {
  await connectDB();
  const data = await Query.findById(id);
  return JSON.stringify(data);
}

export async function addProduct(formData: any) {
  const { name, category, img, description, specifications } = formData;
  await connectDB();
  const newQuery = await Product.create({
    title: name,
    category,
    image: img,
    description,
    specifications,
  });
  await newQuery.save();
}
export async function deleteProduct(id: string) {
  await connectDB();
  await Product.findByIdAndDelete(id);
}
export async function updateProduct(data: ProductStructure) {
  const { _id, title, category, image, description, specifications } = data;

  await connectDB();
  const updateProduct = await Product.findByIdAndUpdate(_id, { $set: data });
  updateProduct.save();
}

export async function getProductByID(id: string) {
  await connectDB();
  const data = await Product.findById(id);
  return JSON.stringify(data);
}
export async function listProducts() {
  await connectDB();
  const allQueries = await Product.find().sort({ createdAt: -1 });
  return JSON.stringify(allQueries);
}

export async function getProductsByCategory(category: string) {
  await connectDB();
  const data = await Product.find({ category: category });
  return JSON.stringify(data);
}
export async function uploadImage(img: File) {
  let formData = new FormData();
  formData.append("file", img);
  formData.append(
    "upload_preset",
    process.env.CLOUDINARY_UPLOAD_PRESET as string
  );
  let req = await fetch(process.env.CLOUDINARY_URL as string, {
    body: formData,
    method: "POST",
  });
  let res = await req.json();
  return res.secure_url;
}
