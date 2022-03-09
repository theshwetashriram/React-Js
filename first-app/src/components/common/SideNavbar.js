import React from "react";

let SideNavbar = () => {

    return (
        <React.Fragment>

        <div className="sidebar-container">
                 <div className="sidebar-logo">
                     <p className="h6 text-primary">HDFC</p><span className="text-danger">LIFE</span>
                     <img src="/src/assets/img/HDFC-Life-Logo.png" alt=""/>
                 </div>

            <div>
                <ul className="sidebar-navigation">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-dashcube"></i>Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-commenting-o"></i> Feedback
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-bar-chart"></i> Reports
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-question-circle-o"></i> Business
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-commenting-o"></i> Call Records
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-user-circle"></i> Users
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-cog"></i>
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
        </div>
</React.Fragment>
    )
}

export default SideNavbar;