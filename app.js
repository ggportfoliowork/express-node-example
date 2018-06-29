import express from 'express'
import ApiRoutes from './routes/api'
import WebRoutes from './routes/web'
import session from 'express-session'

require('dotenv').config()
let db = require('./config/database')

// App Initialization
const app = express()

// Web Routes
app.use('/', WebRoutes)
app.use('/api', ApiRoutes)

// View setup
app.set('view engine', 'jade');
app.set('views', __dirname + '/resources/views');

// Session Initialization
app.use(session({
        secret: process.env.APP_KEY,
        cookie: {
            maxAge: 60000
        },
        resave: true,
        saveUninitialized: true
}));

app.locals.title = process.env.APP_NAME
app.locals.csrf_token = ''

db.connect(process.env.DB_HOST, function(err) {
    if (err) {
        process.exit(1)
    } else {
        app.listen(process.env.APP_PORT, () => console.log(process.env.APP_ENV + ' server is running'))
    }
})