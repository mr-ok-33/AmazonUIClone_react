import Navbar from './Component/Navbar/navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Product from './Component/Home/Product/Product'
import { Routes, Route } from 'react-router-dom';
import Cart from '../src/Component/Home/Product/Addtocart';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='product' element={<Product />}> </Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;
