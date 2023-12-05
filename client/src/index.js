import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Fruit from './views/Fruit/Fruit'
import Flowers from './views/Flowers/Flowers'


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


])



root.render(
  <RouterProvider router={router}/>
 
)
