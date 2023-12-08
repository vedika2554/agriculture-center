import { Schema, model } from "mongoose";

const flowersSchema = new Schema({
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

const Flowers = model('Flowers',flowersSchema);

export default Flowers;
