import { Schema, model } from "mongoose";

const NearbySchema = new Schema({
    image: {
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    description:  {
        type:String,
        required:true
    },
    mobile:  {
        type:String,
        
    },
    hours:  {
        type:String,
        
    },
    url:{
        type:String,
       
    },
    image1: {
        type:String,
        
    },  image2: {
        type:String,
        
    },  image3: {
        type:String,
     
    },

});

const Nearbystore = model('Nearbystore',NearbySchema);

export default Nearbystore;
