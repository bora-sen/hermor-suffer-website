import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PhotoCollage from '../components/PhotoCollage/PhotoCollage';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
        <Navbar />
        <PhotoCollage />
        <ProductList />
        <Footer />
    </>
  )
}

export default Home