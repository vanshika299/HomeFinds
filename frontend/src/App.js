import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import AdminLogin from './Components/Admin/AdminLogin';
import BuyProducts from './Components/Admin/BuyProducts';
import AdminDashboard from './Components/Admin/Dashboard';
import DonateProducts from './Components/Admin/DonateProducts';
import Page from './Components/Admin/Page';
import RentProducts from './Components/Admin/RentProducts';
import BuyNow from './Components/BuyNow';
import BuyPage from './Components/BuyPage';
import Donate from './Components/Donate';
import ContactUs from './Components/LandingPages/ContactUs';
import Home from './Components/LandingPages/Home';
import ProductAdd from './Components/Product/ProductAdd';
import UpdateProduct from './Components/Product/UpdateProduct';
import RentPage from './Components/RentPage';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import UpdateUser from './Components/User/UpdateUser';
import UserProfile from './Components/User/UserProfile';
import UserType from './Components/User/UserType';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/ContactUs',
      element: <ContactUs />
    },
    
    {
      path: '/buyNow',
      element: <BuyNow />,
    },
    {
      path: '/productAdd',
      element: <ProductAdd />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/Signup',
      element: <Signup />,
    },
   
    {
      path: '/UserType',
      element: <UserType />,
    },
    {
      path: '/UserProfile',
      element: <UserProfile />,
    },
    {
      path: '/AdminLogin',
      element: <AdminLogin />
    },
    {
      path: '/AdminDashboard',
      element: <AdminDashboard />
    },
    {
      path: '/BuyPage',
      element: <BuyPage />
    },
    {
      path: '/RentPage',
      element: <RentPage />
    },
    {
      path:'/AboutUs',
      element: <AboutUs/>
    },
    {
      path:'/Donate',
      element:<Donate/>
    },
    {
      path:'/Page',
      element:<Page/>
    },
    {
      path:'/BuyProducts',
      element:<BuyProducts/>
    },
    {
      path:'/DonateProducts',
      element:<DonateProducts/>
    },
    {
      path:'/RentProducts',
      element:<RentProducts/>
    },
    {
      path:'/UpdateUser',
      element:<UpdateUser/>
    },
    {
      path:'/UpdateProduct/:id',
      element:<UpdateProduct/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;


