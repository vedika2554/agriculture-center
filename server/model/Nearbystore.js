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

});

const Nearbystore = model('Nearbystore',NearbySchema);

export default Nearbystore;
