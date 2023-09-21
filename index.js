import express from 'express';
const app = express()
app.use(morgan);

import { connectdb } from './src/db/index.js'
connectdb();
import router from './src/routes/index.js';
import morgan from 'morgan';

app.use(router)

const port= process.env.PORT

app.listen(port,()=>{
  console.log(`Port listening on port ${port}`)
})