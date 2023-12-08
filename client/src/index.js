import React from 'react';
import ReactDOM from 'react-dom/client';



import Buyflower from './View/Buyflower/Buyflower'
import Buyfruit from './View/Buyfruit/Buyfruit'
import Buyseeds from './View/Buyseeds/Buyseeds'
import Detailnearbystore from './View/Detailnearbystore/Detailnearbystore'


import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './View/Home/Home'
import Fruit from './View/Fruit/Fruit';
import Flowers from './View/Flowers/Flowers'
import Seeds from './View/Seed-card/Seed-card'
import Nearbystore from './View/Nearbystore/Nearbystore'




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
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
 
)