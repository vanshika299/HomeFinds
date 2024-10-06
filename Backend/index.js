

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");


require('./configs/dbconfig');

const sessionConfig = require("./configs/sessionConfig");
const passport = require("./configs/passportConfig");
// require('./auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());


app.use((err, req, res, next) => {
  console.error(err);

  if (err.status) res.status(err.status).json({ message: err.message });
  else res.status(500).json({ message: "Internal Server Error" });
});

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);



app.listen(port, (req, res) => {
  console.log(`Server listening to port ${port}`);
});
