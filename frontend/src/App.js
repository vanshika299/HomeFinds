import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/Dashboard';
import Page from './Components/Admin/Page';
import BuyNow from './Components/BuyNow';
import BuyPage from './Components/BuyPage';
import Donate from './Components/Donate';
import ContactUs from './Components/LandingPages/ContactUs';
import Home from './Components/LandingPages/Home';
import ProductAdd from './Components/Product/ProductAdd';
import RentPage from './Components/RentPage';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
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
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;


