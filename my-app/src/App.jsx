import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments' 
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/services/:speciality' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointments/:serviceId' element={<Appointments />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
