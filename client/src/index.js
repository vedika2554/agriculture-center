import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Fruit from './views/Fruit/Fruit'
import Flowers from './views/Flowers/Flowers'
import Nearbystore from './views/Nearbystore/Nearbystore'


const root = ReactDOM.createRoot(document.getElementById('root'));

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


])



root.render(
  <RouterProvider router={router}/>
 
)
