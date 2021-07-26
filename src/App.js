import React, { Fragment } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Gallery from './pages/Gallery/Gallery'

function App() {
  return (
    <Fragment>
      <Header />
      <Gallery />
      <Footer />
    </Fragment>
  )
}

export default App
