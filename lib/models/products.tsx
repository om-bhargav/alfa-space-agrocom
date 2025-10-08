import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    specifications:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});



const Product = mongoose.models.products ||  mongoose.model("products",ProductSchema);

export default Product;