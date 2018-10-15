import React, { Component } from 'react';
import Navbar from './components/Navigation/navbar';
import Login from  './components/Login/login';
import Footer from  './components/Footer/footer';
import Register from './components/Register/register';
import Dashboard from './components/Dashboard/dashboard';
import RequestLeave from './components/Request_leave/request_leave';

import './App.css';



const initialState ={
  route :'home',
  isSignedIn: false,
  user:{
    id: '',
    first_name:'',
    last_name:'',
    position :'',
    email:''

  }
}

class App extends Component {
  constructor (props){
    super(props);
     this.state =initialState
  } 

  loadUser =(user)=>{
    this.setState({user:{
      id: user.id,
      first_name:user.first_name,
    last_name:user.last_name,
    position :user.position,
    email:user.email
    }})
  }

  onRouteChange = (route) => {
    
    if (route === 'signOut'){
      this.setState(initialState);
    } else if(route === 'dashboard'){
      this.setState({isSignedIn:true});
    }
    this.setState({route:route});
  }

  render() {
    const {route,isSignedIn,first_name} = this.state;
    return (
      <div>  
      <Navbar onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} 
      first_name={first_name}/>
       {route === 'home' 
       ?
       <div>
       <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
       </div>
       : (
         route ==='register'
        ?  <div>
        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        </div>
        : (route ==='dashboard')
         
        ?  <Dashboard />
        : (route === 'applyForLeave') 
        ? <RequestLeave />
        : <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
         )
       }
      
       <Footer />
       </div>
   
     
    )
  }
}

export default App;
