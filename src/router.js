import { createBrowserRouter } from 'react-router-dom';

// import App from "./pages/App";
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Product from './pages/Product';
import ForgotPass from './pages/ForgotPass';
import Home from './pages/Home';
import Payment from './pages/Payment';
import ProductDetail from './pages/ProductDetail';
import History from './pages/History';
import Profile from './pages/Profile';
// import Error from "./pages/Error";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <Error /> },
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/product', element: <Product /> },
  { path: '/forgotpass', element: <ForgotPass /> },
  { path: '/payment', element: <Payment /> },
  { path: '/productdetail', element: <ProductDetail /> },
  { path: '/history', element: <History /> },
  { path: '/profile', element: <Profile /> },
  // { path: "/product", element: <product /> },
  // { path: "/home", element: <home /> },
]);

export default router;
