 import React from 'react';
 import { Link } from "react-router-dom";

const navbar =({onRouteChange, isSignedIn,first_name})=>{ 

   
const signOut = () => {

    fetch(`http://localhost:3000/api/user/signOut`,{
    method: 'Get',
    headers:{'Content-Type':'application/json',
    Authorization:window.sessionStorage.getItem('token')}
})
    .then(response => response.json())
    .then(user =>{ 
       if (user.success) {
         window.sessionStorage.removeItem('token');
         onRouteChange('SignOut');
       }
})
}




   if(!isSignedIn){
    return (
        <div>
       <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
     <div className="container">
      <a href={'home'}  className="navbar-brand">MrBooi</a>
      <button className="navbar-toggler"
      data-toggle="collapse" data-target="#navbarHome">
        <span className="navbar-toggler-icon"></span>
      </button>
       <div className="collapse navbar-collapse" id="navbarHome">
        <ul className="navbar-nav ml-auto">
 
            <li className="nav-item">
                <a  onClick={() => onRouteChange('signIn')} className="nav-link">
                    <i className="fa fa-user-circle"></i> Login
                </a>
            </li>
            <li className="nav-item">
                <a onClick={() => onRouteChange('register')}  className="nav-link" data-toggle="modal"
                 data-target="#register-modal">
                    <i className="fa fa-user-circle"></i> Register
                </a>
            </li>
        </ul>
       </div>
    </div>
  </nav>
        </div>
    )

   } else{
     return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
        <div className="container">
            <a href="{}" className="navbar-brand">MrBooi</a>
            <button className="navbar-toggler" data-toggle="collapse"
             data-target="#navbarNav" >
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="navbar-items px-2">
                  <a href="{}" className="nav-link active">dashboard</a>
                </li>
                <li className="navbar-item"></li>
            </ul>
               
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown mr-3">
                <a href="{}" className="nav-link dropdown-toggle"
                data-toggle="dropdown">
                   <i className="fa fa-user"></i> Welcome {first_name} 
            </a>
               <div className="dropdown-menu">
                   <a href="{}" onClick={() => onRouteChange('')}  className="dropdown-item">
                       <i className="fa fa-user-circle"></i> Profile
                   </a>
                   <a href="{}" onClick={() => onRouteChange('applyForLeave')}  className="dropdown-item" data-toggle="modal" data-target="#leaveModal">
                        <i className="fa fa-gear"></i> Apply for leave
                    </a>
               </div>
                </li>
                <li className="nav-item">
                    <a href="{}" onClick={() => signOut()}  className="nav-link">
                        <i className="fa fa-user-times"></i> Logout
                    </a>
                </li>
            </ul>
    
            </div>
        </div> 
        </nav>
     )
   }
  
}

export default navbar;