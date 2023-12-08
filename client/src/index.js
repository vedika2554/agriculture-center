import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './View/Home/Home'
import Fruit from './View/Fruit/Fruit';
import Flowers from './View/Flowers/Flowers'
import Seeds from './View/Seed-card/Seed-card'
import Nearbystore from './View/Nearbystore/Nearbystore'
import Buy from './View/Buy/Buy'
import MyOrders from './View/Myorder/Myorder';



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
    'path': "/",
     'element': <Home/>
  },
  {
    'path': "/seeds",
     'element': <Seeds/>
  },
  {
    'path': "/buy/:id",
     'element': <Buy/>
  },
  {
    'path': "/myorder",
     'element': <MyOrders/>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
 
)