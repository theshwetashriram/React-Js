import React from 'react';
import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';

// IMPORTING PAGES FOR ROUTING
import home from './pages/home';

function MasterPage() {
    return (
        <>
            <Header />
            <div className="clearfix">
                <Router>
                    <Switch>
                        <Route path="/home" component={home} />
                    </Switch>
                </Router>
            </div>
            <Footer />
        </>
    );
}

export default MasterPage;
