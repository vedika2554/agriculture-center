import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import path from "path";
const _dirname = path.resolve();


import User from './model/User.js';

import Nearbystore from './model/Nearbystore.js';

import Flowers from './model/Flowers.js'
import Fruits from './model/Fruit.js'

import Seeds from './model/Seed.js'

import Vegitable from './model/Vegitable.js'

import Flowerorder from './model/Flowerorder.js'
import Fruitorder from './model/Fruitorder.js'
import Seedorder from './model/Seedorder.js'
import Vegetableorder from './model/Vegetableorder.js';




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
    const { name, price, description, image, image1, image2, image3 } = req.body;

    await Flowers.updateOne({ _id: id }, {
      $set: {
        name: name,
        price: price,
        description: description,
        image: image,
        image1: image1,
        image2: image2,
        image3: image3
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
      const { name, price, description, image, image1, image2, image3 } = req.body;


      const fruit = new Fruits({
        name: name,
        price: price,
        description: description,
        image: image,
        image1: image1,
        image2: image2,
        image3: image3
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
        const { name, price, description, image, image1, image2, image3 } = req.body;

        await Fruits.updateOne({ _id: id }, {
          $set: {
            name: name,
            price: price,
            description: description,
            image: image,
            image1: image1,
            image2: image2,
            image3: image3,
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
          const { name, description, image, mobile, hours, url, image1, image2, image3 } = req.body;


          const store = new Nearbystore({
            name: name,
            description: description,
            image: image,
            mobile: mobile,
            hours: hours,
            url: url,
            image1: image1,
            image2: image2,
            image3: image3,
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
            const { name, description, image, mobile, hours, url, image1, image2, image3 } = req.body;

            await Nearbystore.updateOne({ _id: id }, {
              $set: {
                name: name,
                description: description,
                image: image,
                mobile: mobile,
                hours: hours,
                url: url,
                image1: image1,
                image2: image2,
                image3: image3,
              }
            });
            const updatedStore = await Nearbystore.findOne({ _id: id });


            res.json({
              success: true,
              data: updatedStore,
              message: 'store update successfully'
            })
          })





          app.post('/flowerorder', async (req, res) => {
            const { flower, user, quantity, shippingAddress } = req.body;

            const flowerorder = new Flowerorder({
              flower: flower,
              user: user,
              quantity: quantity,
              shippingAddress: shippingAddress
            });
            try {
              const savedFlower = await flowerorder.save();

              res.json({
                success: true,
                data: savedFlower,
                message: 'order placed successfully'

              })
            }
            catch (e) {
              res.json({
                success: false,
                message: e.message
              })

            }
          })


          app.post('/fruitorder', async (req, res) => {
            const { fruit, user, quantity, shippingAddress } = req.body;

            const fruitorder = new Fruitorder({
              fruit: fruit,
              user: user,
              quantity: quantity,
              shippingAddress: shippingAddress
            });
            try {
              const savedFruit = await fruitorder.save();

              res.json({
                success: true,
                data: savedFruit,
                message: 'order placed successfully'

              })
            }
            catch (e) {
              res.json({
                success: false,
                message: e.message
              })

            }
          })


          app.post('/seedorder', async (req, res) => {
            const { seed, user, quantity, shippingAddress } = req.body;

            const seedorder = new Seedorder({
              seed: seed,
              user: user,
              quantity: quantity,
              shippingAddress: shippingAddress
            });
            try {
              const savedSeed = await seedorder.save();

              res.json({
                success: true,
                data: savedSeed,
                message: 'order placed successfully'

              })
            }
            catch (e) {
              res.json({
                success: false,
                message: e.message
              })

            }
          })

          app.post('/vegetableorder', async (req, res) => {
            const { vegitable, user, quantity, shippingAddress } = req.body;

            const vegetableorder = new Vegetableorder({
              vegitable: vegitable,
              user: user,
              quantity: quantity,
              shippingAddress: shippingAddress
            });
            try {
              const savedVegetable = await vegetableorder.save();

              res.json({
                success: true,
                data: savedVegetable,
                message: 'order placed successfully'

              })
            }
            catch (e) {
              res.json({
                success: false,
                message: e.message
              })

            }
          })







          // post api for seed


          app.post('/seeds', async (req, res) => {



            const { name, price, description, image, image1, image2, image3 } = req.body;


            const seed = new Seeds({
              name: name,
              description: description,
              price: price,
              image: image,
              image1: image1,
              image2: image2,
              image3: image3,
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
            const { name, price, description, image, image1, image2, image3 } = req.body;


            await Seeds.updateOne({ _id: id }, {
              $set: {
                name: name,
                price: price,
                description: description,

                image: image,
                image1: image1,
                image2: image2,
                image3: image3
              }
            });

            const updatedSeeds = await Seeds.findOne({ _id: id });

            res.json({
              success: true,
              data: updatedSeeds,
              message: 'Seeds update successfully'
            })
          })




          //post api for signup 


          app.post("/signup",async(req,res)=>{
            const{name,email,mobile,password}=req.body;
          
            const user = new User({
              
                name:name,
                email:email,
                mobile:mobile,
                password:password
            
            });
            try{
          const savedUser =await user.save();
          
          return res.json({
            success:true,
            data:savedUser,
            message:"User registered successfully"
          })
            }
            catch(e){
              return res.json({
                success:false,
                message:e.message
              })
            }
          
          })
          

          //post api for login
          app.post("/login",async(req,res)=>{
           const {email,password}=req.body;
          
          const user = await User.findOne({email:email,password:password});
          if (user){
            return res.json({
              success:true,
              data:user,
              message:"User logged in successfully"
            })
          }
          else
          {
            return res.json({
              success:false,
              message:"Invalid email or password"
            })
          }
          })
          
          //  post api for order 















// get api for seeds

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

        


app.get('/seeds', async(req, res)=>{
  const seeds = await Seeds.find();

  res.json({
    success:true,
    data: seeds,
    message: "Seeds get successfully"
  })
})



app.get('/seeds/:id', async(req, res)=>{
  const {id} = req.params;

  const seeds = await Seeds.findOne({_id: id});
  res.json({
      success: true,
      data: seeds,
      message: 'seeds retrive successfully'
  })
})


// delete api for seeds

app.delete('/seeds/:id', async (req, res)=>{
  const {id} = req.params;

  const seeds = await Seeds.deleteOne({_id: id});
  res.json({
      success: true,
      data: seeds,
      message: 'seeds deleted successfully'
  })

})

// put api for seeds

app.put('/seeds/:id', async (req, res)=>{
  const {id} = req.params;
  const { name, price, description, image } = req.body;

  await Seeds.updateOne({_id: id}, {$set:{
      name: name,
      price: price,
      description: description,
      image: image
}});
const updatedSeeds = await Seeds.findOne({_id: id});

res.json({
  success: true,
  data: updatedSeeds,
  message: 'Seeds update successfully'
})
})

//post api for vegitable
app.post('/vegitable', async (req, res) => {
  const {name, price, description, image,image1,image2,image3} = req.body;

  const vegitable = new Vegitable({
    name:name,
    description: description,
    price: price,
    image: image,
    image1: image1,
    image2: image2,
    image3: image3,
  });


 try {
   const savedVegitable = await vegitable.save();

    res.json({
      success : true,
      data: savedVegitable,
      message: 'vegitable added successfully'
    })
   } catch (e) {
     res.json({success:false,
     message: e.message
   })
  }
})


//get api for vegitable

app.get('/vegitable', async(req, res)=>{
  const vegitable = await Vegitable.find();

  res.json({
    success:true,
    data: vegitable,
    message: "vegitable get successfully"
  })
})



app.get('/vegitable/:id', async(req, res)=>{
  const {id} = req.params;

  const vegitable = await Vegitable.findOne({_id: id});
  res.json({
      success: true,
      data: vegitable,
      message: 'vegitable retrive successfully'
  })
})

//delete api for vegitable

app.delete('/vegitable/:id', async (req, res)=>{
  const {id} = req.params;

  const vegitable = await Vegitable.deleteOne({_id: id});
  res.json({
      success: true,
      data: vegitable,
      message: 'vegitable deleted successfully'
  })

})


//put api for vegitable

app.put('/vegitable/:id', async (req, res)=>{
  const {id} = req.params;
  const { name, price, description, image,image1,image2,image3 } = req.body;

  await Vegitable.updateOne({_id: id}, {$set:{
      name: name,
      price: price,
      description: description,
      image: image,
      image1: image1,
      image2: image2,
      image3: image3,

}});
const updatedVegitable = await Vegitable.findOne({_id: id});

res.json({
  success: true,
  data: updatedVegitable,
  message: 'Vegitable update successfully'
})
})







app.get('/fruitsorders', async(req, res)=>{
  const {id} = req.query;
  
  const fruitsorders = await Fruitorder.find({user: id}).populate('fruit user')

  res.json({
      success:true,
      data: fruitsorders,
      message: 'orders gets successfully'
  })
})



app.get('/flowersorders', async(req, res)=>{
  const {id} = req.query;
  
  const flowersorders = await Flowerorder.find({user: id}).populate('flower user')

  res.json({
      success:true,
      data: flowersorders,
      message: 'orders gets successfully'
  })
})

app.get('/seedsorders', async(req, res)=>{
  const {id} = req.query;
  
  const seedsorders = await Seedorder.find({user: id}).populate('seed user')
  res.json({
      success:true,
      data: seedsorders,
      message: 'orders gets successfully'
  })
})

app.get('/vegitablesorders', async(req, res)=>{
  const {id} = req.query;
  
  const vegitablesorders = await Vegetableorder.find({user: id}).populate('vegitable user')
  res.json({
      success:true,
      data: vegitablesorders,
      message: 'orders gets successfully'
  })
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(_dirname, '..', 'client', 'build')));

  app.get('*', (req, res)=>{
      res.sendFile(path.join(_dirname, '..', 'client', 'build', 'index.html'))
  });
}




const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
})

