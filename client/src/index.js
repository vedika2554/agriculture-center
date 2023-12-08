import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './View/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';




import Fruit from './View/Fruit/Fruit';
import Flowers from './View/Flowers/Flowers'
import Seeds from './View/Seed-card/Seed-card'
import Nearbystore from './View/Nearbystore/Nearbystore'
import Vegitable from './View/Vegitable/Vegitable'




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
    'path':"/vegitable",
    'element': <Vegitable/>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
 
)