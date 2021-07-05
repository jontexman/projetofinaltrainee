
import { Switch, Route } from "react-router-dom";
import { Jogo } from './pages/jogo';
import { Home } from './pages/home';
import { Publisher } from './pages/publisher';
import { UserPage } from './pages/UserPage';
import {Category} from './pages/category'
import {CreateGame} from './pages/creategame'
import {CreatePublisher} from './pages/createpublisher'
import {CreateCategory} from './pages/createcategory'


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
      <Route path="/UserPage">
        <UserPage />
      </Route>
      <Route path="/criar_jogo">
        <CreateGame />
      </Route>
      <Route path="/criar_publisher">
        <CreatePublisher />
      </Route>
      <Route path="/criar_categoria">
        <CreateCategory />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}