const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config()
const connectDB = require('./config/db')
const apiRoutes = require('./routes/api')
const errorHandler = require('./middleware/errorHandler')


const app = express()


// Middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan('combined'))
app.use(cors({
  origin: [
    process.env.CLIENT_URL, // your Vercel URL, e.g., https://your-app.vercel.app
    process.env.VERCEL_URL, // optional, for preview deployments
  ].filter(Boolean)
}));

// Connect DB
connectDB()


// Routes
app.use('/api', apiRoutes)


// Health
app.get('/health', (req, res) => res.json({ status: 'OK', uptime: process.uptime() }))


// Error handler
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))