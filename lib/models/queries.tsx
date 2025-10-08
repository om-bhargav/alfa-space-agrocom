import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});


const Query = mongoose.models.queries ||  mongoose.model("queries",QuerySchema);
export default Query;