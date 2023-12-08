import { Schema , model } from 'mongoose'

const flowerSchema = new Schema({
    flower: {
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
    }
});

const Flower = model('Flower', flowerSchema);

export default Flower;