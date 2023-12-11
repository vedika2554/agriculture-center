import { Schema , model } from 'mongoose'

const vegetableorderSchema = new Schema({
    vegitable: {
        type: Schema.Types.ObjectId,
        ref: 'Vegitable',
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
 
});

const Vegetableorder = model('Vegetableorder', vegetableorderSchema);

export default Vegetableorder;