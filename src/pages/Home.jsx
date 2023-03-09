import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PhotoCollage from '../components/PhotoCollage/PhotoCollage';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';

function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <PhotoCollage />
        <ProductList />
        <Footer />
      </Layout>
    </>
  )
}

export default Home