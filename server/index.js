import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import Nearbystore from './model/Nearbystore.js';

import Flowers from './model/Flowers.js'
import Fruits from './model/Fruits.js'

import Seeds from './model/Seeds.js'


const app = express();
app.use(express.json());

const connectMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI);
  if (connection) {
    console.log("Connected to MongoDB");
  }
}
connectMongoDB();

// post api for flower

app.post('/flower', async (req, res) => {
  const { name, price, description, image } = req.body;

  const flower = new Flowers({
    name: name,
    price: price,
    description: description,
    image: image
  });
  try {

    const savedFlowers = await flower.save();

    res.json({
      success: true,
      data: savedFlowers,
      message: 'flowers added successfully'
    })
  } catch (e) {
    res.json({
      success: false,
      message: e.message
    })
  }
})



// get api for flower

app.get('/flowers', async (req, res) => {

  const flowers = await Flowers.find();

  res.json({
    success: true,
    data: flowers,
    message: 'flowes get successfully'
  })
})

app.get('/flowers/:id', async (req, res) => {
  const { id } = req.params;

  const flowers = await Flowers.findOne({ _id: id });
  res.json({
    success: true,
    data: flowers,
    message: 'flowers retrive successfully'
  })
})



// delete api for flower

app.delete('/flowers/:id', async (req, res) => {
  const { id } = req.params;

  const flower = await Flowers.deleteOne({ _id: id });
  res.json({
    success: true,
    data: flower,
    message: 'flower deleted successfully'
  })

})

// put api for flower

app.put('/flower/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;

  await Flowers.updateOne({ _id: id }, {
    $set: {
      name: name,
      price: price,
      description: description,
      image: image
    }
  });
  const updatedFlower = await Flowers.findOne({ _id: id });

  res.json({
    success: true,
    data: updatedFlower,
    message: 'Flower update successfully'
  })
})











// post api for fruit


app.post('/fruit', async (req, res) => {
  const { name, price, description, image } = req.body;

  const fruit = new Fruits({
    name: name,
    price: price,
    description: description,
    image: image
  });
  try {

    const savedFruits = await fruit.save();

    res.json({
      success: true,
      data: savedFruits,
      message: 'fruits added successfully'
    })
  } catch (e) {
    res.json({
      success: false,
      message: e.message
    })
  }
})


// get api for fruit

app.get('/fruits', async (req, res) => {

  const fruits = await Fruits.find();

  res.json({
    success: true,
    data: fruits,
    message: 'fruits get successfully'
  })
})

app.get('/fruits/:id', async (req, res) => {
  const { id } = req.params;

  const fruits = await Fruits.findOne({ _id: id });
  res.json({
    success: true,
    data: fruits,
    message: 'fruits retrive successfully'
  })
})


// delete api for fruit

app.delete('/fruits/:id', async (req, res) => {
  const { id } = req.params;

  const fruit = await Fruits.deleteOne({ _id: id });
  res.json({
    success: true,
    data: fruit,
    message: 'fruit deleted successfully'
  })

})

// put api for fruit

app.put('/fruit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;

  await Fruits.updateOne({ _id: id }, {
    $set: {
      name: name,
      price: price,
      description: description,
      image: image
    }
  });
  const updatedFruit = await Fruits.findOne({ _id: id });

  res.json({
    success: true,
    data: updatedFruit,
    message: 'Fruit update successfully'
  })
})







app.post('/nearby', async (req, res) => {
  const { name, description, image } = req.body;

  const store = new Nearbystore({
    name: name,
    description: description,
    image: image
  });
  try {

    const savedStore = await store.save();

    res.json({
      success: true,
      data: savedStore,
      message: 'store added successfully'
    })
  } catch (e) {
    res.json({
      success: false,
      message: e.message
    })
  }
})

app.get('/stores', async (req, res) => {

  const store = await Nearbystore.find();

  res.json({
    success: true,
    data: store,
    message: 'stores get successfully'
  })
})

app.get('/stores/:id', async (req, res) => {
  const { id } = req.params;

  const stores = await Nearbystore.findOne({ _id: id });
  res.json({
    success: true,
    data: stores,
    message: 'stores retrive successfully'
  })
})

app.delete('/store/:id', async (req, res) => {
  const { id } = req.params;

  const store = await Nearbystore.deleteOne({ _id: id });
  res.json({
    success: true,
    data: store,
    message: 'store deleted successfully'
  })

})
app.put('/store/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;

  await Nearbystore.updateOne({ _id: id }, {
    $set: {
      name: name,
      description: description,
      image: image
    }
  });
  const updatedStore = await Nearbystore.findOne({ _id: id });

  res.json({
    success: true,
    data: updatedStore,
    message: 'store update successfully'
  })
})




// post api for seed


app.post('/seeds', async (req, res) => {
  const { name, price, description, image } = req.body;

  const seed = new Seeds({
    name: name,
    description: description,
    price: price,
    image: image
  });


  try {
    const savedSeed = await seed.save();

    res.json({
      success: true,
      data: savedSeed,
      message: 'Product added successfully'
    })
  } catch (e) {
    res.json({
      success: false,
      message: e.message
    })

  }

})


// get api for seeds


app.get('/seeds', async (req, res) => {
  const seeds = await Seeds.find();

  res.json({
    success: true,
    data: seeds,
    message: "Seeds get successfully"
  })
})



app.get('/seeds/:id', async (req, res) => {
  const { id } = req.params;

  const seeds = await Seeds.findOne({ _id: id });
  res.json({
    success: true,
    data: seeds,
    message: 'seeds retrive successfully'
  })
})


// delete api for seeds

app.delete('/seeds/:id', async (req, res) => {
  const { id } = req.params;

  const seeds = await Seeds.deleteOne({ _id: id });
  res.json({
    success: true,
    data: seeds,
    message: 'seeds deleted successfully'
  })

})

// put api for seeds

app.put('/seeds/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;

  await Seeds.updateOne({ _id: id }, {
    $set: {
      name: name,
      price: price,
      description: description,
      image: image
    }
  });
  const updatedSeeds = await Seeds.findOne({ _id: id });

  res.json({
    success: true,
    data: updatedSeeds,
    message: 'Seeds update successfully'
  })
})

//  post api for order 

/*app.post("/order", async(req, res)=>{
  const {product, user, quantity, shippingAddress} = req.body;

  const order = new Order({
    product: product,
    user: user,
    quantity: quantity,
    shippingAddress: shippingAddress
  });

  try{

  const savedOrder = await order.save();
 
    res.json({
      success: true,
      data: savedOrder,
      message: "Order placed successfully"
    })
  }
  catch(e){
    res.json({
      success:false,
      message: e.message
    })
  }
})

  

app.get("/orders", async(req, res)=>{
  const {id} = req.query;

  const orders = await Order.find({user: id}).populate('product user');

  res.json({
      success: true,
      data: orders,
      message: "Orders retrived successfully"

  })
})
*/

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});