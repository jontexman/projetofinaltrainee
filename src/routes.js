
import { Switch, Route } from "react-router-dom";
import { Jogo } from './pages/jogo';
import { Home } from './pages/home';
import { Publisher } from './pages/publisher';
import { UserPage } from './pages/UserPage';
import {Login_page} from './pages/LoginPage'


export const MyRoutes = () => {
  return (
    <Switch>
      <Route path='/jogo'>
        <Jogo />
      </Route>
      <Route path='/publisher'>
        <Publisher />
      </Route>
      <Route path="/Login">
        <Login_page />
      </Route>
      <Route path="/UserPage">
        <UserPage />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}