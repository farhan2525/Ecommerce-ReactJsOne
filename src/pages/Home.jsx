import React from 'react'
import Announce from"../components/Announce";
import Navbar from"../components/Navbar";
import Slider from"../components/Slider";
import Catagories from"../components/Catagories";
import Products from"../components/Products";
import NewsLetter from"../components/NewsLetter";
import Footer from"../components/Footer";

function Home() {
  return (
    <div>
      <Announce/>
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
