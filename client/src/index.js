import ReactDOM from 'react-dom/client';
import Home from './Views/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from "./component/Footer/Footer";

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