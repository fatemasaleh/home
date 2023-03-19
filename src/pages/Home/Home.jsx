import React from 'react'

import Hero from '../../Components/Hero/Hero'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Categories from '../../Components/Categories/Categories'
function Home() {
  return (
    <div>
      <Hero />
     
      <div className="gradient-04 z-[-1]" />
      <FeaturedProducts />
      <Categories />
      <FeaturedProducts />
    </div>
  )
}

export default Home
