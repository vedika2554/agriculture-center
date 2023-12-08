import { Schema , model } from 'mongoose'

const vegetableSchema = new Schema({
    Vegetable: {
        type: Schema.Types.ObjectId,
        ref: 'Flower',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    quantity:{
        type: Number,
        default: 1,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    image1: {
        type:String,
        
    },  image2: {
        type:String,
        
    },  image3: {
        type:String,
     
    },
});

const Vegetable = model('Vegetable', vegetableSchema);

export default Vegetable;