import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function Layout() {

  //seacrh function
  const [allProducts , SetAllProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async()=>{
      const products = await fetch("http://127.0.0.1:8000/api/products");
      const setProducts = await products.json();
      // console.log(setProducts.result);
      SetAllProducts(await setProducts.result);
    };
    getProducts();
  }, [])


  return <>
  <Navbar placeholder = "What do you want..."  data={allProducts}/>
  <Outlet></Outlet>
  <Footer />
  </>
}
