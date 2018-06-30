import {
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

import React from 'react'
import '../../../node_modules/grommet-css'
import Split from 'grommet/components/Split'

import HeaderScaffold from './HeaderScaffold'
import SidebarScaffold from './SidebarScaffold'
import DashboardView from "../pages/dashboard/DashboardView";

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderScaffold />
                <Split flex='right'
                       separator={true}>
                    <SidebarScaffold />
                    <Router>
                        <div>
                            <Route exact path="/" component={DashboardView}/>
                        </div>
                    </Router>
                </Split>
            </div>
        );
    }
}

export default App