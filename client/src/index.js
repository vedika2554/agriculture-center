import ReactDOM from 'react-dom/client';
import Home from './View/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
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