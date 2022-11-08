import { createBrowserRouter } from 'react-router-dom';

// import App from "./pages/App";
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Product from './pages/Product';
import ForgotPass from './pages/ForgotPass';
import Home from './pages/Home';
import Payment from './pages/Payment';
import ProductDetail from './pages/ProductDetail';
import ProductDetailAdmin from './pages/Admin/ProductdDetailAdmin';
import ProductAdmin from './pages/Admin/ProductAdmin';
import History from './pages/History';
import Profile from './pages/Profile';
import NewProduct from './pages/Admin/NewProduct';
import NewPromo from './pages/Admin/NewPromo';
import EditPromo from './pages/Admin/EditPromo';
import PrivateElement from './components/privateElement';
// import Error from "./pages/Error";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <Error /> },
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/product', element: <Product /> },
  { path: '/forgotpass', element: <ForgotPass /> },
  { path: '/payment', element: <Payment /> },
  { path: '/productdetailadmin', element: <ProductDetailAdmin /> },
  { path: '/history', element: <History /> },
  // { path: '/newproduct', element: <NewProduct /> },
  // { path: '/newpromo', element: <NewPromo /> },
  { path: '/editpromo', element: <EditPromo /> },
  // { path: '/productadmin', element: <ProductAdmin /> },
  {
    path: '/profile',
    element: (
      <PrivateElement allowedRoles={[`user`]}>
        <Profile />
      </PrivateElement>
    ),
  },

  {
    path: '/productdetail/:id',
    element: (
      <PrivateElement allowedRoles={['user']}>
        <ProductDetail />
      </PrivateElement>
    ),
  },

  {
    path: '/productadmin',
    element: (
      <PrivateElement allowedRoles={['admin']}>
        <ProductAdmin />
      </PrivateElement>
    ),
  },
  {
    path: '/newproduct',
    element: (
      <PrivateElement allowedRoles={['admin']}>
        <NewProduct />
      </PrivateElement>
    ),
  },
  {
    path: '/newpromo',
    element: (
      <PrivateElement allowedRoles={['admin']}>
        <NewPromo />
      </PrivateElement>
    ),
  },
  // {
  //   path: '/editpromo',
  //   element: (
  //     <PrivateElement allowedRoles={['admin']}>
  //       <EditPromo />
  //     </PrivateElement>
  //   ),
  // },

  // { path: "/product", element: <product /> },
  // { path: "/home", element: <home /> },
]);

export default router;
