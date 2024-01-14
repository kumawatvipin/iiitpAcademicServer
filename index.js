const express = require("express");
const app = express();
app.use(express.json({ limit: "10mb" }));
const dotenv = require("dotenv");
dotenv.config("./.env");
const PORT = process.env.PORT;
const Db = require("./DbConnect");
const cookie = require("cookie-parser");

const Sem2Router = require("./router/Sem/Sem2");
const Sem4Router = require("./router/Sem/Sem4");
const Sem6Router = require("./router/Sem/Sem6");
const teacherRouter = require("./router/Teacher/index");

const attendanceRouter = require("./router/AttendanceShow");

app.use(cookie());
app.get("/", (req, res) => {
  res.send("connected");
});

app.use("/sem2", Sem2Router);
app.use("/sem4", Sem4Router);
app.use("/sem6", Sem6Router);
app.use("/teacher", teacherRouter);
app.use('/attendance',attendanceRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  Db();
});
