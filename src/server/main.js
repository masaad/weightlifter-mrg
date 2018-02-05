
import { Server } from '../config';

const express = require('express');
const helmet = require('helmet');


const app = express();

app.use(helmet());

app.listen(Server.portNo, () => {
  console.log(`Server is running at http://localhost:${Server.portNo}`);
});

module.exports = app;

