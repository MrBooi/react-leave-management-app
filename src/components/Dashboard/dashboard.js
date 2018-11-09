import React from 'react';
import Header from '../Dashboard_header/dashboard-header'
import Leavecard from '../Leave-Card/leave_card'; 

class Dashboard  extends React.Component{

 

  componentDidMount(){
    this.props.onUserLeaves();
  }
  
  onColorChange =(color)=>{
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

 
   render(){ 
       const {appliedLeaves ,onViewChange ,position, userId} = this.props;
    return (
        <div><Header />
          {position !=="Manager"
           ?
           <Leavecard id={userId}/>
           :
           <div></div>
          }
           
        <div className="container mt-4">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h4>Lastest Leave Application</h4>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>Employee Name</th>
                                <th>Leave Type</th>
                                <th>Posting Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                       { appliedLeaves.map((current,i) => {
                     
               return      <tr key={i}>
                             <td>{i+1}</td>
                              <td>{current.first_name} {current.last_name}</td>
                             <td>{current.leave_type}</td>
                             <td>2018/10/09</td>
                             <td className={this.onColorChange(current.leave_status)}>{current.leave_status}</td>
                             <td><button  className="btn btn-secondary" 
                               onClick={()=>onViewChange(current)}>
                            <i className="fa fa-angle-double-right"
                            
                            ></i> View
                            </button></td>
                             </tr>         
                        })
                       
                        }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
        
    </div>
    
    </div>

    )
}
}

export default Dashboard;