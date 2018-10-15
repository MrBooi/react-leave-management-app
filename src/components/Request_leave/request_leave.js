import React from 'react';

const request_leave =() =>{
return (
    <div className='container mt-5'>
     <div className="row">
      <div className="col-md-6 mx-auto">
       <div className="card">
        <div className="card-header">
          <h5>Apply for a leave</h5>
        </div>
          <div className="card-body">
          <div className="form-group">
                            <label htmlFor="category">Leave Type</label>
                            <select className="form-control">
                              <option value="">Sick Leave</option>
                              <option value="">Unpaid Leave</option>
                              <option value="">Paid Leave</option>
                              <option value="">Study Leave</option>
                            </select>
                          </div>
                <div className="form-group">
                        <label htmlFor="body">Description</label>
                        <textarea name="editor1" className="form-control"></textarea>
                      </div>
                 <div className="row">
                 <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">From</label>
                             <input type="password" className="form-control" />
                         </div>
                     </div>
                     <div className="col-md-6">
                     <div className="form-group">
                     <label htmlFor="name">To</label>
                     <input type="password" className="form-control"/>
                     </div>
                     </div>
                 </div>
          </div>
            <button className="btn btn-primary btn-block ">Apply</button>
            <button className="btn btn-warning btn-block">Cancel</button>
       </div>
      </div>
     </div>
    </div>
)
}

export default request_leave;


