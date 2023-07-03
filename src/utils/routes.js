import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import App from '../App'
import Signup from '../components/pages/Signup'
import Login from '../components/pages/Login'
import Home from '../components/pages/Home'
import Categories from '../components/pages/Categories'
import ProductInfo from '../components/pages/ProductInfo'
import Sell from '../components/pages/Sell'
import Cart from '../components/pages/Cart'
import Profile from '../components/pages/Profile'

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route indexElement={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/product-info' element={<ProductInfo />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/login' element={<login />} />
      <Route path='/signup' element={<Signup />} />
    </>
  )
)
