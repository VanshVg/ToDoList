const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let taskList = [];
app.get("/", (req, resp) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let day = today.toLocaleDateString("en-us", options);
  resp.render("list", { Today: day, newTask: taskList });
});

app.post("/", (req, resp) => {
  let task = req.body.addTask;
  taskList.push(task);
  resp.redirect("/");
});

app.listen(4000, () => {
  console.log("Server is listening on 4000");
});
