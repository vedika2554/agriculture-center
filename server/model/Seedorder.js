import { Schema , model } from 'mongoose'

const seedsSchema = new Schema({
    seed: {
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

const Seed = model('Seed', seedsSchema);

export default Seed;