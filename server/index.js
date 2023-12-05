import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

import Seed from './model/Seeds.js';

const app = express();
app.use(express.json());

const connectMongoDB = async () =>{
  const connection = await mongoose.connect(process.env.MONGODB_URI);
  if(connection){
    console.log("Connected to MongoDB");
  }
}
connectMongoDB();

const PORT = 5000;




app.post('/seeds', async (req, res) => {
  const {name, price, description, image} = req.body;

  const seed = new Seed({
    name:name,
    description: description,
    price: price,
    image: image
  });


 try {
   const savedSeed = await seed.save();

    res.json({
      success : true,
      data: savedSeed,
      message: 'Product added successfully'
    })
   } catch (e) {
     res.json({success:false,
     message: e.message
   })

  }

})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});