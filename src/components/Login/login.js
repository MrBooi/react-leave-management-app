import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
         signInEmail:'',
         signInPassword:'',
         id: 0
        }
    }
   
    onEmailChange =(event)=>{
      this.setState({signInEmail:event.target.value});
    }
    
    onPasswordChange =(event)=>{
        this.setState({signInPassword:event.target.value});
      }
    
     onSubmitSigIn = ()=>{
        fetch('http://localhost:3000/api/signIn',{
            method: 'Post',
            headers:{'Content-Type':'application/json',
         },
            body : JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
            }) 
        })
        .then(response => response.json())
        .then(user =>{ 
            if (user.success) {
                window.sessionStorage.setItem('token',user.userId); 
                
                this.props.loadUser([{id:488}])
                this.props.onRouteChange('dashboard');
                //  this.props.onUserLeave(488);
             } 
             else{
                this.props.onRouteChange('home');
            }
        }) 
     }



    render (){
    return (
         <div className="container mt-5">
             <div className="row">
                 <div className="col-md-6 mx-auto">
                     <div className="card">
                         <div className="card-header">
                             <h5>Login</h5>
                         </div>
                         <div className="card-body">
                            
                             <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control"
                               id="exampleInputEmail1" aria-describedby="emailHelp" 
                               placeholder="Enter email"
                               onChange={this.onEmailChange} />
                               <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                               </div>
                            <div className="form-group">
                             <label htmlFor="exampleInputPassword1">Password</label>
                             <input type="password" 
                             className="form-control"
                              id="exampleInputPassword1"
                               placeholder="Password"
                                onChange={this.onPasswordChange}   
                               />
                             </div>
                                
                             <button className='btn btn-primary btn-block'
                              onClick={this.onSubmitSigIn}>Login</button>
                         </div>
                     </div>
                    </div>
             </div>
         </div>
     
    )
}
}

export default Login;