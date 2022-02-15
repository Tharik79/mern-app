import './App.css';
import Home from './components/home.js';
import NavBar from './components/NAvBar.js';
import AllUsers from './components/AllUsers.js';
import AddUser from './components/AddUSer';
import EditUser from './components/EditUser';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/notfound';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>   

        <Route exact path='/allusers'>
          <AllUsers/>
        </Route> 

        <Route exact path='/adduser'>
          <AddUser/>
        </Route> 

        <Route exact path='/edituser/:id'>
          <EditUser/>
        </Route>   
                {/* dynamic routing is apply for edit method using individual id */}

        <Route exact path='/notfound'>
          <NotFound/>
        </Route> 

      </Switch>
        
      
      
      
    </div>
  );
}

export default App;
