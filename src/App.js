import { Footer } from './Components/Footer'
import {Navbar} from './Components/Navbar'
import {GlobalStyle} from './styles/global'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {BrowserRouter as Router} from 'react-router-dom'
import {MyRoutes} from './routes'
function App() {
 
  return (
    <div id = "wrapper">
      <GlobalStyle/>
      <Navbar/>
      <Router>
        <MyRoutes/>
      </Router>
      <Footer/>
    </ div>
  );
}

export default App;
