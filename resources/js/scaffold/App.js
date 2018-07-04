import {
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

import axios from 'axios'
import React from 'react'
import '../../../node_modules/grommet-css'
import Split from 'grommet/components/Split'

import HeaderScaffold from './HeaderScaffold'
import SidebarScaffold from './SidebarScaffold'
import DashboardView from "../pages/dashboard/DashboardView";

class App extends React.Component {

    /**
     * Construct
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = { user: null }
    }

    /**
     * Initial Mount
     */
    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data)
                const persons = res.data;
                this.setState({ persons });
            })
    }

    /**
     * Render Scaffold
     * @returns {*}
     */
    render() {
        return (
            <div>
                <HeaderScaffold />
                <Router>
                    <div>
                        <Route exact path="/" component={DashboardView}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App