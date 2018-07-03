import csurf from 'csurf'
import express from 'express'
import passport from 'passport'
import ApiRoutes from './routes/api'
import WebRoutes from './routes/web'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import UserModel from './models/UserModel'
import expressSession from 'express-session'

// Auth Config
const LocalStrategy = require('passport-local').Strategy;

// Config & DB
require('dotenv').config()
const db = require('./config/database')

// App Initialization
const app = express()

// View setup ReactJS
app.set('view engine', 'jade');
app.set('views', __dirname + '/resources/views');

// App Distribution
app.use("/dist", express.static(__dirname + '/dist'));

// Session, Cookie Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.APP_KEY));
app.use(expressSession({
    secret: process.env.APP_KEY,
    cookie: {
        httpOnly: true,
        secure: true
    }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport Configs
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use(csurf({cookie:{key:'XSRF-TOKEN',path:'/'}}))
app.use(function (req, res, next) {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return next();
});

// Web Routes
app.use('/', WebRoutes)
app.use('/api', ApiRoutes)

// App Locals
app.locals.title = process.env.APP_NAME

// Run app if DB is active
db.connect(process.env.DB_HOST, function(err) {
    if (err) {
        console.error("Could not connect...")
        process.exit(1)
    } else {
        app.listen(process.env.APP_PORT, () => console.log(process.env.APP_ENV + ' server is running'))
    }
})