const express = require('express');//Require in express
const app = express();//Init express app
const PORT = 3000;//creating port that our application will run on 

app.listen(PORT);
console.log(`Application is running at http:localhost:${PORT}`);
