import {Switch, Route} from "react-router-dom";
import {Jogo} from './pages/jogo'
import {Home} from './pages/home'
import {Login} from './pages/LoginPage/Login'
import {Publisher} from './pages/publisher'

export const MyRoutes = () => {
  return(
    <Switch>
      <Route path='/jogo'>
        <Jogo/>
      </Route>
      <Route path='/publisher'>
        <Publisher/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
    </Switch>
  );
}