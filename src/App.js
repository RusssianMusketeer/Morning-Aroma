import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Pay from "./Components/Pay/pay.component";
import HomePage from './Pages/HomePage/HomePage.component';
import ProductList from './Pages/ProductList/ProductList.component';
import { MusicProvider } from './Context/musicContext';
import DarkRoast from './Pages/Shop/DarkRoast/DarkRoast.component';
import ShopHomePage from './Pages/Shop/ShopHomePage/ShopHomePage.component';
import LightRoast from './Pages/Shop/LightRoast/LightRoast.component';
import Espresso from './Pages/Shop/Espresso/Espresso.component';
import Decaf from './Pages/Shop/Decaf/Decaf.component';
import Product from './Components/Product/Product.component';
import About from './Pages/About/About.component';
import Cart from './Components/Cart/Cart.component';
import LoginList from './Pages/Login/LoginList.component';
import SignIn from './LoginElements/SignIn/SignIn.component';
import Register from './LoginElements/Register/Register.component';
import Account from './Pages/Account/Account.component';

const App =()=>{
  return(
    <div className="App">
      <MusicProvider>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
      <Route path="/pay" element={<Pay/>}/> 
      <Route path="shop" element={<ProductList/>}>
        <Route index element={<ShopHomePage/>}/>
        <Route path=":product" element={<Product/>}/>
        <Route path="Dark_Roast" element={<DarkRoast/>}/>
        <Route path="Light_Roast" element={<LightRoast/>}/>
        <Route path="Espresso" element={<Espresso/>}/>
        <Route path="Decaf" element={<Decaf/>}/>
        <Route path="Cart" element={<Cart/>}/>
      </Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<LoginList/>}>
        <Route index element={<SignIn/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
      <Route path="/account" element={<Account/>}/>
     </Routes>
     </MusicProvider>
     </div>
  )
}

export default App;
