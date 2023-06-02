import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'

const app = express();


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://danielakinyemi:p4QYTQm50BToHW4S@jollylyrecipe.1yycsej.mongodb.net/jollylyrecipe?retryWrites=true&w=majority")

app.listen(3001, ()=> console.log("SERVER STARTED!"))