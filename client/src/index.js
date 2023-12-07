import ReactDOM from 'react-dom/client';
import Fruit from './View/Fruit/Fruit'
import Flowers from  './View/Flowers/Flowers'
import Nearbystore from './View/Nearbystore/Nearbystore'

import Home from './View/Home/Home';
import Buyflower from './View/Buyflower/Buyflower'
import Buyfruit from './View/Buyfruit/Buyfruit'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



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
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<>
< RouterProvider router = { router }/>

</>
);