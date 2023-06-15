//
const express = require('express');
const cors = require('cors');
const fileRoute = require('./routes/fileRoute');
// 
const app = express();
// 
app.use(cors());
// 
app.use(express.json({ limit: '50mb' }));
// 
app.use('/file', fileRoute);
// listen port
app.listen(8081, () => {
	console.log(`Example app listening at http://localhost:8081`)
})