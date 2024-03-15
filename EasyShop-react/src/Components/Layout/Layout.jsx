import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const pathsToShowFooter = ['/register', '/login'];
  const showFooter = pathsToShowFooter.includes(location.pathname);
  return <>


  <Navbar />
  <Outlet></Outlet>
  {showFooter ? '' :<Footer />}
  </>
}
