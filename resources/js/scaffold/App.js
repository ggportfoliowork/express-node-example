import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import React from 'react'
import DashboardView from "../pages/dashboard/DashboardView";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={DashboardView}/>
                </div>
            </Router>
        );
    }
}

export default App