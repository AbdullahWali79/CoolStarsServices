import React from 'react'
import Header from '../components/Header'
import TopServices from '../components/TopDoctors'
import Banner from '../components/Banner'
import Map from '../components/Map'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <TopServices />
      <Banner />
      <Map />
    </div>
  )
}

export default Home
