import React, { Component } from 'react';
import Navbar from './components/Navigation/navbar';
import Login from  './components/Login/login';
import Footer from  './components/Footer/footer';
import Register from './components/Register/register';
import Dashboard from './components/Dashboard/dashboard';
import RequestLeave from './components/Request_leave/request_leave';
import LeaveStatus from  './components/Leave_status/leave-status';
import BackButton  from  './components/BackButton/backbutton';

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


  componentDidMount(){
    const token = window.sessionStorage.getItem('token'); 
    
     if(token){
      fetch('http://localhost:3000/api/signin',{
        method: 'post',
        headers:{
          'Content-Type': 'application/json',
          Authorization:token
        }
      }) 
      .then(resp=>resp.json())
      .then(data=>{ 
           console.log("data",data)
        if (data && data.id) {
          fetch(`http://localhost:3000/api/profile/${data.id}`, {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              Authorization:token
            }
        })
        .then(resp=>resp.json())
      .then(user=>{ 
         console.log(user.data.id)
          if (user && user.data.id) {
            this.loadUser(user.data)
            this.onRouteChange('dashboard');
          }
      })
    }
      })
      .catch(console.log)
     }
  
    }

  loadUser =(user)=>{
     let userData = user;
     console.log(userData);
     
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
     let userId =this.state.user.id; 
     console.log(userId)
    fetch('http://localhost:3000/api/user/applied/leaves/'+userId,{
      method: 'GET',
      headers:{'Content-Type':'application/json',
      Authorization:window.sessionStorage.getItem('token')}
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
        
        ? <div>
        <BackButton />
        <RequestLeave onRouteChange={this.onRouteChange} userId={user.id} onUserLeaves={this.onUserLeaves} />
        </div>
        :  (route === 'viewLeave') 
            
         ?  <div>
         <BackButton /> 
           <LeaveStatus />
         </div>
         :    <LeaveStatus />
         )
  
       }
      
       <Footer />
       </div>
   
    )

  }
}

export default App;
