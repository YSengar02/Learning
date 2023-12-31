import express from 'express';
import UserRouter from './src/routes/users_api/index.js';
const app = express()

// import morgan from 'morgan';
import { connectdb,syncdb } from './src/db/index.js'
connectdb();
syncdb();
// app.use(morgan);
// import _sodium from "libsodium-wrappers";
// const auth_header = await (async () => {
//   await _sodium.ready;
//   const sodium = _sodium;
//   let key = sodium.crypto_secretstream_xchacha20poly1305_keygen();
//   let res = sodium.crypto_secretstream_xchacha20poly1305_init_push(key);
//   let [state_out, header] = [res.state, res.header];
//   let c1 = sodium.crypto_secretstream_xchacha20poly1305_push(
//     state_out,
//     sodium.from_string("message1"),
//     null,
//     sodium.crypto_secretstream_xchacha20poly1305_TAG_MESSAGE
//   );
//   let c2 = sodium.crypto_secretstream_xchacha20poly1305_push(
//     state_out,
//     sodium.from_string("message 2"),
//     null,
//     sodium.crypto_secretstream_xchacha20poly1305_TAG_FINAL
//   );
//   let state_in = sodium.crypto_secretstream_xchacha20poly1305_init_pull(header, key);
//   let r1 = sodium.crypto_secretstream_xchacha20poly1305_pull(state_in, c1);
//   let [m1, tag1] = [sodium.to_string(r1.message), r1.tag];
//   let r2 = sodium.crypto_secretstream_xchacha20poly1305_pull(state_in, c2);
//   let [m2, tag2] = [sodium.to_string(r2.message), r2.tag];

//   console.log(m1);
//   console.log(m2);
// })();


app.use(express.json())
app.use("/UserInfo",UserRouter);


const port= process.env.PORT

app.listen(port,()=>{
  console.log(`Port listening on port ${port}`)
})