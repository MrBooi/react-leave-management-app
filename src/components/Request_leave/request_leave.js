import React from 'react';

class RequestLeave extends React.Component{

  constructor(props){
    super(props);
    this.state={
      leaveType:'',
      description:'',
      startDate:'',
      endDate: ''
    }
  }

 

  onLeaveTypeChange=(event)=>{
    this.setState({leaveType:event.target.value});
  }

  onDescriptionChange=(event)=>{
    this.setState({description:event.target.value});
  }

  onStartDateChange=(event)=>{
    this.setState({startDate:event.target.value});
  }
  onEndDateChange=(event)=>{
    this.setState({endDate:event.target.value});
  }

  onApplyLeaveSubmit=()=>{
   console.log(this.state);
   console.log(this.props.userId)
    fetch('http://localhost:3000/api/request/leave',{
      method: 'Post',
      headers:{'Content-Type':'application/json',
      Authorization: window.sessionStorage.getItem('token')
     },
      body : JSON.stringify({
          user_id      : this.props.userId,
          leaveType    : this.state.leaveType,
          description  : this.state.description,
          start_date   : this.state.startDate,
          end_date     : this.state.endDate
      })
  })
      .then(response => response.json())
      .then(user =>{
               console.log(user);
              if (user.success) {
                  this.props.loadUser(user.data);
                  this.props.onRouteChange('dashboard');
          }
           else{
              this.props.onRouteChange('dashboard');
          }
  })
  }
render(){
return (
    <div className='container mt-1'>
     <div className="row">
      <div className="col-md-6 mx-auto">
       <div className="card">
        <div className="card-header">
          <h5>Apply for a leave</h5>
        </div>
          <div className="card-body">
          <div className="form-group">
                            <label htmlFor="category">Leave Type</label>
                            <select className="form-control" 
                            onChange={this.onLeaveTypeChange}>
                              <option value="sick leave">Sick Leave</option>
                              <option value="unpaid leave">Unpaid Leave</option>
                              <option value="paid leave">Paid Leave</option>
                              <option value="family leave">Family Leave</option>
                            </select>
                          </div>
                <div className="form-group">
                        <label htmlFor="body">Description</label>
                        <textarea name="editor1" className="form-control"
                         onChange={this.onDescriptionChange}
                        ></textarea>
                      </div>
                 <div className="row">
                 <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="start_date">From</label>
                             <input type="date" className="form-control" 
                              onChange={this.onStartDateChange}
                              />
                         </div>
                     </div>
                     <div className="col-md-6">
                     <div className="form-group">
                     <label htmlFor="end_date">To</label>
                     <input type="date" className="form-control" 
                       onChange={this.onEndDateChange}
                     />
                     </div>
                     </div>
                 </div>
          </div>
            <button className="btn btn-primary btn-block" 
            onClick={this.onApplyLeaveSubmit}
            >Apply</button>
            <button className="btn btn-warning btn-block">Cancel</button>
       </div>
      </div>
     </div>
    </div>
)
}
}

export default RequestLeave;


