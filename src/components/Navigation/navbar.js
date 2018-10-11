 import React from 'react';

const navbar =({onRouteChange, isSignedIn})=>{
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
                <a href={'home'} onClick={() => onRouteChange('signIn')} className="nav-link">
                    <i className="fa fa-user-circle"></i> Login
                </a>
            </li>
            <li className="nav-item">
                <a href= {'!#'} onClick={() => onRouteChange('register')}  className="nav-link" data-toggle="modal"
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
                   <i className="fa fa-user"></i> Welcome Ayabonga
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
                    <a href="index.html" onClick={() => onRouteChange('SignOut')}  className="nav-link">
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