import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './View/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';







import Buyflower from './View/Buyflower/Buyflower'
import Buyfruit from './View/Buyfruit/Buyfruit'
import Buyseeds from './View/Buyseeds/Buyseeds'
import Detailnearbystore from './View/Detailnearbystore/Detailnearbystore'

import FlowerOrders from './View/Myorder/FlowerOrders';
import FruitOrders from './View/Myorder/FruitOrders'
import SeedsOrders from './View/Myorder/SeedOrders';
import VegetableOrders from './View/Myorder/VegetableOrders';


import Fruit from './View/Fruit/Fruit';
import Flowers from './View/Flowers/Flowers'
import Seeds from './View/Seed-card/Seed-card'
import Nearbystore from './View/Nearbystore/Nearbystore'

import Vegitable from './View/Vegitable/Vegitable'

import Buy from './View/Buy/Buy'
//import MyOrders from './View/Myorder/Myorder';
import Buyvegetable from './View/Buyvegetable/Buyvegetable'


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

    'path': "/buy/:id",
     'element': <Buy/>
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
  'path': "/buyvegetable/:id",
  'element': <Buyvegetable/>
}

])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
 
)