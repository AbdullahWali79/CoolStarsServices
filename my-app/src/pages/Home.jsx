import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopServices from '../components/TopDoctors'
import Banner from '../components/Banner'
import Map from '../components/Map'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <WhyChooseUs />
      <TopServices />
      <Testimonials />
      <Banner />
      <Map />
    </div>
  )
}

export default Home
