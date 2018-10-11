import React from 'react';

const leave_card =() =>{
 
    return (
        <div className="container mt-2">
        <div className="row">
       <div className="col-md-3">
           <div className="card">
               <div className="card-body">
                <h3>Total leave</h3>
                <h5 className="display4">
                    19
                  </h5>
               </div>
           </div>
       </div>
       
       <div className="col-md-3">
          <div className="card">
              <div className="card-body">
               <h3>Applied Leave</h3>
               <h5 className="display4">
                   2
                 </h5>
              </div>
          </div>
       </div>
        
       <div className="col-md-3">
           <div className="card">
               <div className="card-body">
                <h3>Rejected leave</h3>
                <h5 className="display4">
                    1
                  </h5>
               </div>
           </div>
        </div>
       
       </div>
       </div>
    )
}

export default leave_card;