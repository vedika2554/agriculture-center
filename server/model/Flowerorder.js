import { Schema , model } from 'mongoose'

const flowerorderSchema = new Schema({
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

const Flowerorder = model('Flowerorder', flowerorderSchema);

export default Flowerorder;