import { Schema , model } from 'mongoose'

const seedsorderSchema = new Schema({
    seed: {
        type: Schema.Types.ObjectId,
        ref: 'Seed',
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

const Seedorder = model('Seedorder', seedsorderSchema);

export default Seedorder;