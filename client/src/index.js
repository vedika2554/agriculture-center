import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './View/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Buyflower from './View/Buyflower/Buyflower'
import Buyfruit from './View/Buyfruit/Buyfruit'
import Buyseeds from './View/Buyseeds/Buyseeds'
import Detailnearbystore from './View/Detailnearbystore/Detailnearbystore'




import Fruit from './View/Fruit/Fruit';
import Flowers from './View/Flowers/Flowers'
import Seeds from './View/Seed-card/Seed-card'
import Nearbystore from './View/Nearbystore/Nearbystore'

import Vegitable from './View/Vegitable/Vegitable'


import About from './View/About/About';

import Signup from './View/Signup/Signup'
import Login from './View/Login/Login'

import Buyvegetable from './View/Buyvegetable/Buyvegetable'
import MyOrders from './View/Myorder/Myorder';

import FlowerOrders from './View/Myorder/FlowerOrders';
import FruitOrders from './View/Myorder/FruitOrders';
import SeedsOrders from './View/Myorder/SeedOrders';
import VegetableOrders from './View/Myorder/VegetableOrders';



const router = createBrowserRouter([

  {
  'path': '/fruits',
  'element': <Fruit/>
},
{
  'path': '/flowers',
  'element': <Flowers/>
},
{
  'path': '/nearbystore',
  'element': <Nearbystore/>
},
  {

        path: "/",
        element: <Home/>
    },
    {
      path: "/buyflower/:id",
      element: <Buyflower/>
  },
  {
    path: "/buyfruit/:id",
    element: <Buyfruit/>
},
{
  path: "/buyseed/:id",
  element: <Buyseeds/>
},
{
  path: "/detail/:id",
  element: <Detailnearbystore/>
},

  
  {
    'path': "/seeds",
     'element': <Seeds/>
  },
  {

    'path':"/vegitable",
    'element': <Vegitable/>
  },

  {
    "path":"/orders",
    "element": <FlowerOrders/>
  },
  {
    "path":"/orders",
    "element": <FruitOrders/>
  },
  {
    "path":"/orders",
    "element": <SeedsOrders/>
  },
  {
    "path":"/orders",
    "element": <VegetableOrders/>
  },

  {
    'path': "/nearbystore",
     'element': <Nearbystore/>
  },


  {
    'path': "/signup",
     'element': <Signup/>
  },
  {
    'path': "/login",
     'element': <Login/>
  },
{
  'path': "/buyvegetable/:id",
  'element': <Buyvegetable/>
},
{
  'path': "/about",
  'element': <About/>
},
{
  'path': "/myorders",
  'element': <MyOrders/>
}


])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
 
)