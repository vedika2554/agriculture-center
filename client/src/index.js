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


//import MyOrders from './View/Myorder/Myorder';
import About from './View/About/About';

import Signup from './View/Signup/Signup'
import Login from './View/Login/Login'

import Buyvegetable from './View/Buyvegetable/Buyvegetable'

import Fruitorder from './View/Fruitorder/Fruitorder'
import Floweorder from './View/Flowerorder/Flowerorder'
import Seedorder from './View/Seedorder/Seedorder'
import Vegtableorder from './View/Vegetableorder/Vegetableorder'

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
  'path': "/fruitorder",
  'element': <Fruitorder/>
},
{
  'path': "/flowerorder",
  'element': <Floweorder/>
},
{
  'path': "/seedorder",
  'element': <Seedorder/>
},
{
  'path': "/vegetableorder",
  'element': <Vegtableorder/>
},
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
 
)