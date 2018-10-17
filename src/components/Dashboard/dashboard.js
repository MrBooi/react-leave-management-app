import React from 'react';
import Header from '../Dashboard_header/dashboard-header'
import Leavecard from '../Leave-Card/leave_card'; 

const dashboard =({appliedLeaves})=>{
  
    return (
        <div><Header />
             <Leavecard />
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
                              <td>{current.first_name}</td>
                             <td>{current.leave_type}</td>
                             <td>2018/10/09</td>
                             <td>{current.leave_status}</td>
                             <td><a href="{}" className="btn btn-secondary">
                            <i className="fa fa-angle-double-right"></i> View
                            </a></td>
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

export default dashboard;