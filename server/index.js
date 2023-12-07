import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import Flowers from './model/Flowers.js'
import Fruits from './model/Fruits.js'
const app = express();
app.use(express.json());

const connectMongoDB = async () =>{
  const connection = await mongoose.connect(process.env.MONGODB_URI);
  if(connection){
    console.log("Connected to MongoDB");
  }
}
connectMongoDB();

app.post('/flower', async (req,res)=>{
  const { name, price, description, image } = req.body;

  const flower = new Flowers({
    name: name,
    price: price,
    description: description,
    image: image
  });
  try{

    const savedFlowers = await flower.save();
  
      res.json({
          success: true,
          data: savedFlowers,
          message: 'flowers added successfully'
      })
  }catch(e){
      res.json({
          success:false,
          message: e.message
      })
  }
})




app.get('/flowers', async(req, res)=>{

  const flowers = await Flowers.find();
  
     res.json({
      success: true,
      data: flowers,
      message: 'flowes get successfully'
     }) 
  })
  
  app.get('/flowers/:id', async(req, res)=>{
      const {id} = req.params;
  
      const flowers = await Flowers.findOne({_id: id});
      res.json({
          success: true,
          data: flowers,
          message: 'flowers retrive successfully'
      })
  })




  app.delete('/flowers/:id', async (req, res)=>{
    const {id} = req.params;

    const flower = await Flowers.deleteOne({_id: id});
    res.json({
        success: true,
        data: flower,
        message: 'flower deleted successfully'
    })

})
app.put('/flower/:id', async (req, res)=>{
    const {id} = req.params;
    const { name, price, description, image } = req.body;

    await Flowers.updateOne({_id: id}, {$set:{
        name: name,
        price: price,
        description: description,
        image: image
 }});
 const updatedFlower = await Flowers.findOne({_id: id});

 res.json({
    success: true,
    data: updatedFlower,
    message: 'Flower update successfully'
 })
})














app.post('/fruit', async (req,res)=>{
  const { name, price, description, image } = req.body;

  const fruit = new Fruits({
    name: name,
    price: price,
    description: description,
    image: image
  });
  try{

    const savedFruits = await fruit.save();
  
      res.json({
          success: true,
          data: savedFruits,
          message: 'fruits added successfully'
      })
  }catch(e){
      res.json({
          success:false,
          message: e.message
      })
  }
})




app.get('/fruits', async(req, res)=>{

  const fruits = await Fruits.find();
  
     res.json({
      success: true,
      data: fruits,
      message: 'fruits get successfully'
     }) 
  })
  
  app.get('/fruits/:id', async(req, res)=>{
      const {id} = req.params;
  
      const fruits = await Fruits.findOne({_id: id});
      res.json({
          success: true,
          data: fruits,
          message: 'fruits retrive successfully'
      })
  })




  app.delete('/fruits/:id', async (req, res)=>{
    const {id} = req.params;

    const fruit = await Fruits.deleteOne({_id: id});
    res.json({
        success: true,
        data: fruit,
        message: 'fruit deleted successfully'
    })

})
app.put('/fruit/:id', async (req, res)=>{
    const {id} = req.params;
    const { name, price, description, image } = req.body;

    await Fruits.updateOne({_id: id}, {$set:{
        name: name,
        price: price,
        description: description,
        image: image
 }});
 const updatedFruit = await Fruits.findOne({_id: id});

 res.json({
    success: true,
    data: updatedFruit,
    message: 'Fruit update successfully'
 })
})
















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