import React from "react";

let TopNavbar = () => {

    return (
     <React.Fragment>
       <div className="container mt-5">
           <div className="card">
           <div className="row">
                <div className="col-md-10">
                    {/*<a className="navbar-brand justify-content-md-center" href="#"> </a> */}
                        <i className="fa fa-bell-o"> </i>
                        <span className="badge">2</span>

                </div>
                <div className="col-auto">
               {/*     <a className="navbar-brand" href="#"> </a> */}
                        <i className="fa fa-user-circle"> </i>
                        John Doe <br/>
                        ********10

                </div>
           </div>
            </div>
       </div>
       {/*  <nav class="navbar navbar-light bg-light">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="navbar-brand justify-content-md-center" href="#">
                                <i className="fa fa-bell-o"></i>
                                <span className="badge">.</span>
                        </a>
                    </li>
                    <li className="nav-item">
                         <a className="navbar-brand" href="#">
                            <i className="fa fa-user-circle"></i>
                             John Doe <br/>
                            ********10
                        </a>
                    </li>
                </ul>
            </nav>*/}
     </React.Fragment>
    )
}

export default TopNavbar;