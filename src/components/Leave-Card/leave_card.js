import React from 'react';

class Leave_card extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            leaveTotal:0,
            rejected:0,
            applied:0

        }
    }

 componentDidMount(){
   this.onAvailableLeaves(this.props.id); 
   console.log(this.props.id)
 }

 onAvailableLeaves=(user_id)=>{ 
 
    fetch(`http://localhost:3000/api/user/total/leaves/${user_id}`,{
    method: 'Get',
    headers:{'Content-Type':'application/json',
    Authorization:window.sessionStorage.getItem('token')}
})
    .then(response => response.json())
    .then(user =>{  
     this.setState({leaveTotal:user.data})

     fetch(`http://localhost:3000/api/user/total/applied/leaves/${user_id}`,{
    method: 'Get',
    headers:{'Content-Type':'application/json',
    Authorization:window.sessionStorage.getItem('token')}
})
    .then(response => response.json())
    .then(user =>{  
     this.setState({applied:user.data[0].count})
})

fetch(`http://localhost:3000/api/user/total/rejected/${user_id}`,{
    method: 'Get',
    headers:{'Content-Type':'application/json',
    Authorization:window.sessionStorage.getItem('token')}
})
    .then(response => response.json())
    .then(user =>{  
     this.setState({rejected:user.data[0].count})
})
}) 



  }


  render(){
      const {leaveTotal,applied,rejected} = this.state;
    return (
        
        <div className="container mt-2">
        <div className="row">
       <div className="col-md-3">
           <div className="card">
               <div className="card-body">
                <h3>Available Leaves</h3>

                <h5 className="display4">
                  {leaveTotal}
                  </h5>
               </div>
           </div>
       </div>
       
       <div className="col-md-3">
          <div className="card">
              <div className="card-body">
               <h3>Applied Leave</h3>
               <h5 className="display4">
                   {applied}
                 </h5>
              </div>
          </div>
       </div>
        
       <div className="col-md-3">
           <div className="card">
               <div className="card-body">
                <h3>Rejected leave</h3>
                <h5 className="display4">
                    {rejected}
                  </h5>
               </div>
           </div>
        </div>
       
       </div>
       </div>
    )
}
}

export default Leave_card;