import { Switch, Route } from 'react-router-dom'
import SideDrawer from './layout/SideDrawer';
import SimpleCard from './component/card/Card';
import Login from './container/auth/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/admin' component={SideDrawer} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
