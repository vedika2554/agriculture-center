import { Schema , model } from 'mongoose'

const fruitsSchema = new Schema({
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

const Fruit = model('Fruit', fruitsSchema);

export default Fruit;