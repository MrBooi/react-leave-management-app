import React from 'react';

class  Register extends React.Component {
    constructor(props){
     super(props);
    this.state = {
     firstName :'',
     lastName  :'',
     email     :'',
     position   :'',
     password  : '',
     confirm_password:''
    }
    }

    onFirstNameChange =(event)=>{
        this.setState({firstName:event.target.value});
      }

      onLastNameChange =(event)=>{
        this.setState({lastName:event.target.value});
      }

    onEmailChange =(event)=>{
        this.setState({email:event.target.value});
      }

      onPositionChange =(event)=>{
        this.setState({position:event.target.value});
      }
      
      onPasswordChange =(event)=>{
          this.setState({password:event.target.value});
        }

     onConfirmPasswordChange =(event)=>{
      this.setState({confirm_password:event.target.value});
     }
    
    
     onRegisterSubmit=()=>{
       
     fetch('http://localhost:3000/api/addUser',{
        method: 'Post',
        headers:{'Content-Type':'application/json'},
        body : JSON.stringify({
            first_name : this.state.firstName,
            last_name  : this.state.lastName,
            position   : this.state.position,
            email      : this.state.email,
            password   :  this.state.password,
            password2  : this.state.confirm_password 
        })
    })
        .then(response => response.json())
        .then(user =>{
               console.log(user);
                if (user.success) {
                    this.props.loadUser(user.data[0]);
                    this.props.onRouteChange('home');
            }
             else{
                this.props.onRouteChange('register');
            }
    }) 
     }

 render(){
 return (
    <div className="container mt-4">
    <div className="row">
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h5>Register</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                   <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputFirst-name1">First Name</label>
                         <input type="text" className="form-control" 
                         id="exampleInputFirst-name1" 
                          placeholder="Enter First Name"
                          onChange={this.onFirstNameChange} 
                        />
                        </div>
                   </div>
                   <div className="col-md-6">
                           <div className="form-group">
                                   <label htmlFor="exampleInputLast-name1">Last Name</label>
                                   <input type="text" className="form-control"
                                    id="exampleInputlast-name1" 
                                     placeholder="Enter Last Name"
                                      onChange={this.onLastNameChange} 
                                     />  
                                 </div>
                   </div>
                  <div className="col-md-6">
                       <div className="form-group">
                               <label htmlFor="exampleInputEmail1">Email address</label>
                               <input type="email" className="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                 placeholder="Enter email"
                                  onChange={this.onEmailChange} 
                                 />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                             </div>
                  </div>
                  <div className="col-md-6">
                       <div className="form-group">
                               <label htmlFor="category">Position</label>
                               <select className="form-control"  onChange={this.onPositionChange} >
                                 <option value="Web Developer">Web Developer</option>
                                 <option value="Fullstack Developer">Fullstack Developer</option>
                                 <option value="Tester">Tester</option>
                                 <option value="Manager">Manager</option>
                               </select>
                              
                             </div>
                  </div>
                  <div className="col-md-6">
                       <div className="form-group">
                               <label htmlFor="exampleInputPassword1">Password</label>
                               <input type="password" className="form-control"
                                id="exampleInputPassword1" placeholder="Password"
                                onChange={this.onPasswordChange} 
                                />
                               </div>
                  </div>
                  <div className="col-md-6">
                       <div className="form-group">
                               <label htmlFor="exampleInputPassword2">Confirm Password</label>
                               <input type="password" className="form-control"
                                id="exampleInputPassword2"
                                 placeholder="Password"
                                 onChange={this.onConfirmPasswordChange} 
                                 />
                               </div>
                  </div>
            
                    </div>
                     
                    <button className="btn btn-success btn-block"
                    onClick={this.onRegisterSubmit}>Register</button>
                   
                </div>
            </div>
           </div>
    </div>
</div>
 )
}
}

export default Register;