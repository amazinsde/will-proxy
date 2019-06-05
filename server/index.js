const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// const {findByUuid} = require('../db/index.js');
app.use(express.json());
app.use(express.static('./public'))


// app.get('/api/images', (req, res)=>{
//     findByUuid(1000, (err, data)=>{
//       if(err){console.log('cannot query find')
//       } else {
//           res.send(data);
//       } 
//     }) 
// })
app.listen(port, ()=>{console.log('listening at port', port)})