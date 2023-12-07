import ReactDOM from 'react-dom/client';
import Fruit from './View/Fruit/Fruit'
import Flowers from  './View/Flowers/Flowers'
import Nearbystore from './View/Nearbystore/Nearbystore'

import Home from './View/Home/Home';
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
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<>
< RouterProvider router = { router }/>

</>
);