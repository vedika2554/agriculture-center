import { Schema, model } from "mongoose";

const vegitableSchema = new Schema({
    image: {
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    } ,
    description:  {
        type:String,
        required:true
    },
    image1: {
        type:String,
        
    },  image2: {
        type:String,
        
    },  image3: {
        type:String,
     
    },

});

const Vegitable = model('Vegitable',vegitableSchema);

export default Vegitable;
