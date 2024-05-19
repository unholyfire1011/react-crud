const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reactcrud",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

app.post("/insert", (req, res) => {
  var name = req.body.name;
  var number = req.body.number;
  const sql = "INSERT INTO demo (Name, Number) VALUES (?, ?)";
  db.query(sql, [name, number], function (err, result) {
    if (err) {
      res.status(201).send(err);
    } else {
      res.status(200).send("Inserted Successfully!");
    }
  });
});

app.get("/fetchAll", (req, res) => {
  const sql = "SELECT * FROM DEMO";
  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/delete", (req, res) => {
  const sql = "DELETE FROM demo WHERE Id = (?) ";
  db.query(sql, req.body.id, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send("Delete Successful!");
    }
  });
});

app.post("/fetch", (req, res) => {
  const sql = "SELECT * FROM demo WHERE Id = (?)";
  db.query(sql, req.body.id, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const number = req.body.number;
  const sql = "UPDATE demo SET Name = ?, Number = ? WHERE Id = ?";
  db.query(sql, [name, number, id], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send("Updated Successfully");
    }
  });
});

app.listen(8800, () => {
  console.log("Connect to backend.");
});
