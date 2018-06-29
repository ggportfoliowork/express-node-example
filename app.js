import express from 'express'
import WebRoutes from './routes/web'

require('dotenv').config()

const app = express()

// Web Routes
app.use('/', WebRoutes)

app.listen(3000, () => console.log(process.env.APP_ENV))