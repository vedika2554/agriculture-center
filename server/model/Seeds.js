import { Schema, model } from 'mongoose';

const seedsSchema = new Schema({
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

const Seeds = model('Seeds', seedsSchema);

export default Seeds;
