import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import {userRouter} from './routes/users.js'

const app = express()


app.use(cors())
app.use(express.json())

app.use("/auth",userRouter)

mongoose.connect("mongodb+srv://danielakinyemi:p4QYTQm50BToHW4S@jollylyrecipe.1yycsej.mongodb.net/jollylyrecipe?retryWrites=true&w=majority")

app.listen(3001, ()=>{console.log("SERVER STARTED!")})