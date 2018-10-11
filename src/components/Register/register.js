import React from 'react';

const register =()=>{
 return (
    <div class="container mt-4">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-header">
                    <h5>Register</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                   <div class="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputFirst-name1">First Name</label>
                         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" />
                        </div>
                   </div>
                   <div class="col-md-6">
                           <div class="form-group">
                                   <label for="exampleInputEmail1">Last Name</label>
                                   <input type="text" class="form-control" id="exampleInputlast-name1" aria-describedby="Last-nameHelp" placeholder="Enter Last Name"/>  
                                 </div>
                   </div>
                  <div class="col-md-6">
                       <div class="form-group">
                               <label for="exampleInputEmail1">Email address</label>
                               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                             </div>
                  </div>
                  <div class="col-md-6">
                       <div class="form-group">
                               <label for="category">Position</label>
                               <select class="form-control">
                                 <option value="">Web Developer</option>
                                 <option value="">Fullstack Developer</option>
                                 <option value="">Tester</option>
                                 <option value="">Manager</option>
                               </select>
                             </div>
                  </div>
                  <div class="col-md-6">
                       <div class="form-group">
                               <label for="exampleInputPassword1">Password</label>
                               <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                               </div>
                  </div>
                  <div class="col-md-6">
                       <div class="form-group">
                               <label for="exampleInputPassword2">Confirm Password</label>
                               <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password"/>
                               </div>
                  </div>
                     
                    

                    </div>
                   
                     
                    
                   
                    
                              
                    
                    <a href="dashboard.html" class="btn btn-success btn-block">Register</a>
                   
                </div>
            </div>
           </div>
    </div>
</div>
 )
}

export default register;