import {Switch, Route} from "react-router-dom";
import {Jogo} from './pages/jogo'
import {Home} from './pages/home'
import {Login_page} from './pages/LoginPage'
import {Publisher} from './pages/publisher'
import {Category} from './pages/category'

export const MyRoutes = () => {
  return(
    <Switch>
      <Route path='/jogo'>
        <Jogo/>
      </Route>
      <Route path='/publisher/:name'>
        <Publisher/>
      </Route>
      <Route path='/category/:name'>
        <Category/>
      </Route>
      <Route path="/Login">
        <Login_page />
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      
    </Switch>
  );
}