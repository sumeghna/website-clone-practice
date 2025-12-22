const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    brand:{
        type: String,
        default: "Campus",
    },
    category:{
        type: String,
        required: true,
        enum: ["Men","Women","Kids"],
    },
    price:{
        type:Number,
        required: true,
        min: 0,
    },
    image:{
        type:[String],
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    rating:{
        type: Number,
        default: 0,
        min:0,
        max: 5,
    },
    stock:{
        type: Number,
        required: true,
        min:0,
    },
},
{
    timestamos: true,
}
);

module.exports=mongoose.model("Product", productSchema);