import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const port = process.env.PORT || 3002

cors()
// just a comment
app.listen(port, ()=>{`Sever started on localhost://${port}`})