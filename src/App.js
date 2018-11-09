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
    appliedLeaves:[],
    info:{
      leave_id :0,
      fullname: '',
      status :'',
      comment:'',
      requestdate:'',
      from:'',
      to:''}
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

    onViewChange =(data)=>{ 
      console.log(data)
   this.setState({info:{leave_id:data.id,fullname:data.first_name + " " + data.last_name,
       status:data.leave_status,comment:data.leave_description
    }})
  
   this.onRouteChange('viewLeave');
  } 


  loadUser =(user)=>{
     let userData = user;
     
     
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
  
  onUserLeaves = ()=> {
     let userId =this.state.user.id; 
     let position = this.state.user.position;
     if (position !=="Manager") {
      fetch('http://localhost:3000/api/user/applied/leaves/'+userId,{
        method: 'GET',
        headers:{'Content-Type':'application/json',
        Authorization:window.sessionStorage.getItem('token')}
    })
        .then(response => response.json())
        .then(user =>{
           
            this.setState({appliedLeaves:user.data})
    })
     } else{
      fetch('http://localhost:3000/api/users/applied/history',{
        method: 'GET',
        headers:{'Content-Type':'application/json',
        Authorization:window.sessionStorage.getItem('token')}
    })
        .then(response => response.json())
        .then(user =>{
          
            this.setState({appliedLeaves:user.data})
    })
     }
   
  }
 


  render() {
    const {route,isSignedIn,user,appliedLeaves,info} = this.state;
     
  console.log(this.state);
    return (
      <div>  
      <Navbar onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} 
      first_name={user.first_name} />
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
           <Dashboard appliedLeaves={appliedLeaves} 
           onRouteChange={this.onRouteChange} onUserLeaves={this.onUserLeaves} 
           onViewChange={this.onViewChange} position={user.position} userId={user.id}  />
           </div>
         
        : (route === 'applyForLeave') 
        
        ? <div>
        <BackButton />
        <RequestLeave onRouteChange={this.onRouteChange} userId={user.id} onUserLeaves={this.onUserLeaves} />
        </div>
        :  (route === 'viewLeave') 
            
         ?  <div>
         <BackButton /> 
           <LeaveStatus info={info} position={user.position}/>
         </div>
         :     <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
         )
  
       }
      
       <Footer />
       </div>
   
    )

  }
}

export default App;
