import React from 'react';

const request_leave =() =>{
return (
    <div className="modal fade" id="leaveModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">Apply for a leave</h5>
              <button className="close" data-dismiss="modal"><span>&times;</span></button>
            </div>
            <div className="modal-body">
                    <div className="form-group">
                            <label for="category">Leave Type</label>
                            <select className="form-control">
                              <option value="">Sick Leave</option>
                              <option value="">Unpaid Leave</option>
                              <option value="">Paid Leave</option>
                              <option value="">Study Leave</option>
                            </select>
                          </div>
                <div className="form-group">
                        <label for="body">Description</label>
                        <textarea name="editor1" className="form-control"></textarea>
                      </div>
                 <div className="row">
                     <div className="col-md-6">
                        <div className="form-group">
                          <label for="name">From</label>
                             <input type="password" className="form-control" />
                         </div>
                     </div>
                     <div className="col-md-6">
                     <div className="form-group">
                     <label for="name">To</label>
                     <input type="password" className="form-control"/>
                                  </div>
                     </div>
                 </div>
                
                
             
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button className="btn btn-warning" data-dismiss="modal">Apply</button>
            </div>
          </div>
        </div>
      </div>
)
}

export default request_leave;