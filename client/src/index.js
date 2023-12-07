import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './View/Home/Home'
import Fruit from './View/Fruit/Fruit';
import Flowers from './View/Flowers/Flowers'
import Seeds from './View/Seed-card/Seed-card'
//import Nearbystore from './Views/Nearbystore/Nearbystore'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    'path': '/',
    'element': <Home/>
  },
  {
  'path': '/fruits',
  'element': <Fruit/>
},
{
  'path': '/flowers',
  'element': <Flowers/>
},
{
  'path': '/seeds',
  'element': <Seeds/>
}
//{
  //'path': '/nearbystore',
  //'element': <Nearbystore/>
//},


])



root.render(
  <RouterProvider router={router}/>
 
)