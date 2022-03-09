import React, {useState} from "react";

let  Users =() => {
    let [state, setState] = useState({
        user :
            {
                name: '',
                contact : '',
                email: '',
                role: ''
            }
    });

    let {user}= state;

    return(
        <React.Fragment>
            <div className="container mt-5">

                    <div className="row">
                        <div className="col">
                         <h4>Users</h4>
                        </div>
                    <div className="col">
                                <button className="btn bg-white border-danger">
                                    <span className="fa fa-calendar-o text-danger border-danger"></span>
                                </button>
                    </div>
                    <div className="col">
                            Clear Date
                    </div>
                    <div className="col">
                            <button className="btn bg-white border-danger text-danger">Export</button>
                    </div>
                     <div className="col">
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal">
                                Add User
                            </button>
                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title">Add User </h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                              <div className="row">
                                                  <div className="col">
                                                      <label>
                                                          Username
                                                          <input
                                                              value={user.name}
                                                              type="text" name="name"/>
                                                      </label>
                                                  </div>
                                                  <div className="col">
                                                      <label>
                                                          Contact
                                                          <input
                                                              value={user.contact}
                                                              type="text" name="contact"/>
                                                      </label>
                                                  </div>
                                              </div>
                                               <div className="row">
                                                   <div className="col">
                                                       <label>
                                                           Email
                                                           <input
                                                               value={user.email}
                                                               type="email" name="email"/>
                                                       </label>
                                                   </div>
                                                   <div className="col">
                                                       <label>
                                                           Role
                                                           <input
                                                               value={user.role}
                                                               type="text" name="role"/>
                                                       </label>
                                                   </div>
                                               </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger">ADD</button>
                                            <button type="button" className="btn border-danger" data-dismiss="modal">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="content-container">
                        <div className="card">
                            <table className="table table-hover text-center table-striped">
                                <thead className="-table ">
                                <tr>
                                    <th>User ID</th>
                                    <th>User Name</th>
                                    <th>Date</th>
                                    <th>Contact No.</th>
                                    <th>Email ID</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Users;