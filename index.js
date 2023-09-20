import express from 'express';

const app = express()
// const connectdb = require('./src/db/index')
import { connectdb,syncdb } from './src/db/index.js'
connectdb();
// syncdb();

const port= process.env.PORT



app.listen(port,()=>{
  console.log(`Port listening on port ${port}`)
})