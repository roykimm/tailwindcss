import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import Hyundai from './pages/Hyundai';
import Ms from './pages/Ms';
import Nike from './pages/Nike';
import Bellog from './pages/Bellog';
import Next from './pages/Next';

function App() {
  return (
    <div className="header">
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/test2">
          <Test2 />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/hyundai">
          <Hyundai />
        </Route>
        <Route path="/ms">
          <Ms />
        </Route>
        <Route path="/nike">
          <Nike />
        </Route>
        <Route path="/bellog">
          <Bellog />
        </Route>
        <Route path="/next">
          <Next />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
