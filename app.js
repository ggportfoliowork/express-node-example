import express from 'express'
import ApiRoutes from './routes/api'
import WebRoutes from './routes/web'
import session from 'express-session'

require('dotenv').config()

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

app.listen(process.env.APP_PORT, () => console.log(process.env.APP_ENV + ' server is running'))