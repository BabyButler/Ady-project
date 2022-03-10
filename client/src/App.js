import './App.css';
import NavBar from './components/NavBar'
import {Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/Profile/UserProfile';
import AdminProfile from './components/Profile/AdminProfile';
import SignUp from './components/Auth/SignUp'
function App() {
  let userIsConnected = JSON.parse(localStorage.getItem('current_user'))
  return (
    <div className="App">
      {userIsConnected ? 
      <div>
       <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/AdminProfile" component={AdminProfile} />
      </Switch>
      </div>
      :
      <div>
          <SignUp />
      </div>
      }
      
    </div>
  );
}

export default App;
