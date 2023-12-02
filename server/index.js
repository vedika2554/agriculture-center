import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

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




app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});