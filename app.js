//-------------- Setting up required packages
const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");
const path = require("path");
const hbs = require("express-handlebars");
const pg = require("pg");
const gallery = require("./public/photos");

//-------------- General package setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));
require("dotenv").config();

//-------------- Router package setup
const ViewRouter = require("./Router/viewRouter")(express);

//-------------- setting up database connection
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//-------------- Handlebars setup
// const viewRouter = require("./router/viewRouter")(express);
app.engine(
  "handlebars",
  hbs({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "handlebars");

//-------------- services setup

//-------------- authentication setup
// const setupPassport = require('./authentication/initPassport');
// const loginRouter = require('./router/loginRouter')(express);
// app.use(
//   session({
//     secret: 'supersecret',
//     resave: false,
//     saveUninitialized: true
//   })
// );
// setupPassport(app);

//-------------- Routers routing
app.use("/", ViewRouter);
// app.use("/", loginRouter);
// app.use("/api/projects", new projectRouter(projectService).router());
// app.use("/api/tasks", new taskRouter(taskService).router());
// app.use("/api/subtasks", new subtaskRouter(subtaskService).router());

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key"),
};

const PORT = process.env.PORT;
https.createServer(options, app).listen(PORT, () => {
  console.log(`Server running at ${PORT}.`);
});
