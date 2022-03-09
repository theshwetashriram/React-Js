import React, {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Form from "./components/home/Form";
import SideNavbar from "./components/common/SideNavbar";
import "./stylesheets/common/SideNavbar.css";
import TopNavbar from "./components/common/TopNavbar";
import Users from "./components/Users";
//import AddUserButton from "./components/AddUserButton";
//import AddForm from "./components/home/AddForm";

let App = () => {
  return(
      <Fragment>

     
      {/*  <Form/> */}

   {/*     <Router>
           <Switch>
              <Route path="/name" component={Form}/>
            </Switch>
      </Router>
      */}
          {/* <SideNavbar/>*/}
            <TopNavbar/>
          <Users/>
          {/*   <AddForm/>  */}
         {/* <AddUserButton/> */}
      </Fragment>

   
  )
}
export default App;
