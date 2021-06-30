import {Switch, Route} from "react-router-dom";
import {Jogo} from './pages/jogo'
import {Home} from './pages/home'
import {Login} from './pages/LoginPage/Login'

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
        <Login />
      </Route>
    </Switch>
  );
}