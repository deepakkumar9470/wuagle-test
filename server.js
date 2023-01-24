import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 8000
const app = express()
import apiRoute from './routes/api.js'
import connDb from './db/db.js'
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended  : true}))

app.use('/api', apiRoute)
app.get('/')

connDb()
app.listen(PORT, ()=>{
    console.log('Server run om PORT 5000')
})