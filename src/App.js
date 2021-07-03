import { Footer } from './Components/Footer'
import {Navbar} from './Components/Navbar'
import {GlobalStyle} from './styles/global'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {BrowserRouter as Router} from 'react-router-dom'
import {MyRoutes} from './routes'
import { useState, useEffect} from 'react'
import {api} from './services/api'
function App() {
  
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    api.get('category/index')
    .then((response) => {setCategories(response.data)})
  }, [])
  return (
    <div id = "wrapper">
      <GlobalStyle/>
      <Navbar/>
      <ul>
      {categories.map((category) => {return <li key= {category.id}>{category.name}</li>})}
      </ul>
      <Router>
        <MyRoutes/>
      </Router>
      <Footer/>
    </ div>
  );
}

export default App;
