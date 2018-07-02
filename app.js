import express from 'express'
import passport from 'passport'
import ApiRoutes from './routes/api'
import WebRoutes from './routes/web'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'

require('dotenv').config()
let db = require('./config/database')

// App Initialization
const app = express()

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Web Routes
app.use('/', WebRoutes)
app.use('/api', ApiRoutes)

// App Distribution
app.use("/dist", express.static(__dirname + '/dist'));

// Session Initialization
app.use(cookieParser());
app.use(session({
        secret: process.env.APP_KEY,
        cookie: {
            maxAge: 60000
        },
        resave: true,
        saveUninitialized: true
}));

// View Setup
app.set('view engine', 'jade');
app.set('views', __dirname + '/resources/views');

// App Locals
app.locals.csrf_token = ''
app.locals.title = process.env.APP_NAME

db.connect(process.env.DB_HOST, function(err) {
    if (err) {
        process.exit(1)
    } else {
        app.listen(process.env.APP_PORT, () => console.log(process.env.APP_ENV + ' server is running'))
    }
})