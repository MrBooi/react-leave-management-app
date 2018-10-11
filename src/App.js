import React, { Component } from 'react';
import Navbar from './components/Navigation/navbar';
import Login from  './components/Login/login';
import Footer from  './components/Footer/footer';
import Register from './components/Register/register';
import Dashboard from './components/Dashboard/dashboard';


import './App.css';



const initialState ={
  route :'home',
  isSignedIn: false
}

class App extends Component {
  constructor (props){
    super(props);
     this.state =initialState
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
    const {route,isSignedIn} = this.state;
    return (
      <div>  
      <Navbar onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
       {route === 'home' 
       ?
       <div>
       <Login onRouteChange={this.onRouteChange} />
       </div>
       : (
         route ==='register'
        ? <Register/>
        : (route ==='dashboard')
         
        ?  <Dashboard />
        : <Login onRouteChange={this.onRouteChange} />
         )
       }
      
       <Footer />
       </div>
   
     
    )
  }
}

export default App;
