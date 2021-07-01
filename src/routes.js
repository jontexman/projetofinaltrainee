import {Switch, Route} from "react-router-dom";
import {Jogo} from './pages/jogo'
import {Home} from './pages/home'
import {Login_page} from './pages/LoginPage'

export const MyRoutes = () => {
  return(
    <Switch>
      <Route path='/jogo'>
        <Jogo/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      <Route path="/Login">
        <Login_page />
      </Route>
    </Switch>
  );
}