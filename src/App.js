import { Footer } from './Components/Footer'
import {Navbar} from './Components/Navbar'
import {GlobalStyle} from './styles/global'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {BrowserRouter as Router} from 'react-router-dom'
import {MyRoutes} from './routes'
import { useState, useEffect} from 'react'
import {api} from './services/api'
import {UserProvider} from './contexts/userContext'

function App() {
  
  
  return (
    <div id = "wrapper">
      <UserProvider>
        <GlobalStyle/>
        <Navbar/>
        <Router>
          <MyRoutes/>
        </Router>
        <Footer/>
      </UserProvider>
    </ div>
  );
}

export default App;
