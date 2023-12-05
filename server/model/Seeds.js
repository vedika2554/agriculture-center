import { Schema, model } from 'mongoose';

const seedSchema = new Schema({
    image: {
        type : String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Seed = model('Seed', seedSchema);

export default Seed;
