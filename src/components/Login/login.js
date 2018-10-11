import React from 'react';

const login = ({onRouteChange})=>{
    
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
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                               <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                               </div>
                            <div className="form-group">
                             <label htmlFor="exampleInputPassword1">Password</label>
                             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                             </div>
                                
                             <button className='btn btn-primary btn-block' onClick={() =>onRouteChange('dashboard')}>Login</button>
                         </div>
                     </div>
                    </div>
             </div>
         </div>
     
    )
}

export default login;