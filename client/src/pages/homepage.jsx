import React from 'react'
import Header from '../components/common/Header'
import Content from '../components/pageComp/home/Content'
import Footer from '../components/common/Footer'

const Homepage = () => {
  return (
    <div id="pageWrapper" className="page-wrapper">
        <Header/>
        <Content />
        <Footer />
    </div>
  )
}

export default Homepage