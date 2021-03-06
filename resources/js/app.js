// Globals
window._ = require('lodash')
window.moment = require('moment')
window.$http = require('./lib/HttpClient')

// React Scaffold
import React from 'react'
import ReactDOM from 'react-dom'

// App Scaffold
import App from './scaffold/App'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)