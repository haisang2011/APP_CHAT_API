const http = require('http');

const path = require('path');

const cors = require('cors');

const helmet = require('helmet');

const morgan = require('morgan');

const logger = require('./config/logger');

const express = require('express');

const Router = require('./routes/v1');

const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config(".env");

const connectDB = require('./config/mongo');

connectDB().then(() => console.log("Connect to Database MongoDB Successfully!!!"))
           .catch(() => console.log("Connect to DB Fail"))

const socketio = require('socket.io');

let app = express();

let server = http.createServer(app);

let io = socketio(server);

app.use('/assets', express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(helmet());

app.use(morgan( "combined", { stream: logger.stream }));

app.use(Router)

server.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server is listening on port: ${process.env.BACKEND_PORT}`);
})