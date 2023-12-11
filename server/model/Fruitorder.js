import { Schema, model } from "mongoose";

const fruitorderSchema = new Schema({
    fruit:{
        type: Schema.Types.ObjectId,
        ref: 'Fruit',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
    quantity:{
        type:Number,
        default: 1,
    },
    shippingAddress:{
        type:String,
        required: true,
    }

})
const Fruitorder = model('Fruitorder',fruitorderSchema)
 
export default Fruitorder;