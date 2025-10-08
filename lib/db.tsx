
import React from "react";
import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database Connected!");
  } catch (err) {
    console.log(err);
  }
};
