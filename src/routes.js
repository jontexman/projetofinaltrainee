
import { Switch, Route } from "react-router-dom";
import { Jogo } from './pages/jogo';
import { Home } from './pages/home';
import { Publisher } from './pages/publisher';
import { UserPage } from './pages/UserPage';
import {Login_page} from './pages/LoginPage'
import {Category} from './pages/category'
import {CreateGame} from './pages/creategame'


export const MyRoutes = () => {
  return (
    <Switch>
      <Route path='/jogo'>
        <Jogo />
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
      <Route path="/UserPage">
        <UserPage />
      </Route>
      <Route path="/criar_jogo">
        <CreateGame />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}