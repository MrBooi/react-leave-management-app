import React from 'react';

const Leave_Status =()=>{

return(
  <div className="container mt-5">
  <div className="row">
  <div className="col-md-6 mx-auto">
       <div className="card">
        <div className="card-header">
          <h5>Leave Request</h5>
        </div>
          <div className="card-body">
            <div className="mb-3">
              <h5 className="text-center text-warning">Pending</h5>
              <h6 className="text-center">Requested on Friday 18 October 2018</h6>
            </div>
            <div className="form-group">
            <label htmlFor="start_date">Leave request from</label>
            <h6 className="text-center">18/09/2018</h6>
            </div>
            <div className="form-group">
            <label htmlFor="start_date">Leave request to</label>
               <h6 className="text-center">20/09/2018</h6>
            </div>

            <div className="form-group">
            <label htmlFor="start_date">Employee Comment</label>
            <p className="mx-5">Planning overseas holiday pending leave approval</p>
            </div>

             <div className="mb-3">
             <button className="btn btn-success btn-inline-block" 
            >Approve Leave</button>
             <button className="btn btn-danger btn-inline-block float-right m" 
            >Decline Leave</button>
             </div>
           
            <button className="btn btn-defualt btn-inline-block float-right">Cancel</button>
       </div>
      </div>
     </div>
  </div>  
  </div>
)

}


export default Leave_Status;
