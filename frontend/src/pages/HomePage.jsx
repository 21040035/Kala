import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestArtwork from "../components/Route/BestDeals/BestArtwork";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Exhibition from "../components/Events/Exhibition";
import Catelogs from "../components/Route/Catelogs";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <BestArtwork />
        <Exhibition />
        <FeaturedProduct />
        <Catelogs />
        <Footer />
    </div>
  )
}

export default HomePage