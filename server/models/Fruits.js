import { Schema, model } from "mongoose";

const fruitsSchema = new Schema({
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

});

const Fruits = model('Fruits',fruitsSchema);

export default Fruits;
