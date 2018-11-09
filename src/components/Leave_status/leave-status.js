import React from 'react';

const Leave_Status =({info,position})=>{
 const {leave_id,fullname,status,comment}=info;

const onChangeStatus=(id,status)=>{ 
  fetch(`http://localhost:3000/api/update/leave/status/${id}/${status}`,{
    method: 'Post',
    headers:{'Content-Type':'application/json',
    Authorization:window.sessionStorage.getItem('token')}
})
    .then(response => response.json())
    .then(user =>{
        console.log(user)
        // this.setState({appliedLeaves:user.data})
})
}
const onColorChange =(color)=>{
  switch (color) {
      case 'Approved':
          return 'text-success'
       case 'Rejected':
       return 'text-danger'
       case 'Pending':
       return 'text-warning'
      default:
      return 'text-danger'           
  }
}




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
            <h5 className="text-center text-primary">{fullname}</h5>
              <h5 className={" text-center "+onColorChange(status)}>{status}</h5>
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
            <p className="mx-5">{comment}</p>
            </div>
            { position === "Manager"
               ?
               <div className="mb-3">
             <button className="btn btn-success btn-inline-block" 
              onClick={()=>onChangeStatus(leave_id,'Approved')}  >Approve Leave</button>
             <button className="btn btn-danger btn-inline-block float-right m" 
               onClick={()=>onChangeStatus(leave_id,'Rejected')}   >Decline Leave</button>
             </div> 
             : 
              status === "Rejected" || status === "Approved" || status === "Canceled"
              ?
              <div></div>
            
             :
             <button className="btn btn-defualt btn-inline-block float-right"
             onClick={()=>onChangeStatus(leave_id,'Canceled')}
             >Cancel</button>
            }
            
           
          
       </div>
      </div>
     </div>
  </div>  
  </div>
)

}


export default Leave_Status;
