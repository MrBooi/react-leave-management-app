import React, { Component } from 'react';
import Navbar from './components/Navigation/navbar';
import Login from  './components/Login/login';
import Footer from  './components/Footer/footer';
import Register from './components/Register/register';
import Dashboard from './components/Dashboard/dashboard';
import RequestLeave from './components/Request_leave/request_leave';
import LeaveStatus from  './components/Leave_status/leave-status';

import './App.css';



const initialState ={
  route :'home',
  isSignedIn: false,
  user:{
    id: 0,
    first_name:'',
    last_name:'',
    position :'',
    email:''
  }
  ,
    appliedLeaves:[]
}

class App extends Component {
  constructor (props){
    super(props);
     this.state =initialState
  } 

  loadUser =(user)=>{
     let userData = user.data[0];
    this.setState({user:{
    id: userData.id,
    first_name:userData.first_name,
    last_name:userData.last_name,
    position :userData.position,
    email:userData.email
    }})
    this.onUserLeaves()
  }

  onRouteChange = (route) => {
    
    if (route === 'signOut'){
      this.setState(initialState);
    } else if(route === 'dashboard'){
      this.setState({isSignedIn:true});
    }
    this.setState({route:route});
  }
  
  onUserLeaves =()=> {
    let userId =Number(this.state.user.id);
    fetch('http://localhost:3000/api/user/applied/leaves/'+userId,{
      method: 'GET',
      headers:{'Content-Type':'application/json'}
  })
      .then(response => response.json())
      .then(user =>{
          console.log(user)
          this.setState({appliedLeaves:user.data})
  })
  }
 


  render() {
    const {route,isSignedIn,first_name,user,appliedLeaves} = this.state;
     
  console.log(this.state);
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
           
         ?  <div>
           <Dashboard appliedLeaves={appliedLeaves} onRouteChange={this.onRouteChange} />
           </div>
         
        : (route === 'applyForLeave') 
        ? <RequestLeave onRouteChange={this.onRouteChange} userId={user.id} />
        :  (route === 'viewLeave')
         ?    <LeaveStatus />
         :    <LeaveStatus />
         )
  
       }
      
       <Footer />
       </div>
   
    )

  }
}

export default App;
