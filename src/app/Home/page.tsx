import Homepage from '@/components/Home/page'
import React from 'react'
import AboutPage from '../about/page';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const HomepageMain = () => {
  return (
    <div>
      <Header/>
      <Homepage/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default HomepageMain;
