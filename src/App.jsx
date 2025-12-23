import React from "react";
import {Routes,Route} from "react-router-dom";
// ------Pages-----------------
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
//--------/Pages-------------------
import {GlobalStyle} from "./GlobalStyle";
//-----Components---------
import Header from "./components/Header";
import Footer from "./components/Footer";
//---------/Components---------
//----------Contexts-----------
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
//----------/Contexts---------

function App() {
  return (
    <>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <GlobalStyle/>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
              </Routes>
              <Footer/>
            </CartProvider>
          </FilterContextProvider>
      </AppProvider>
    </>
  )
}

export default App
