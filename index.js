const express = require("express");
const port = 8888;

const app = express();
app.use(express.json());

let { MongoClient, ObjectId } = require("mongodb");

let url =
  "mongodb+srv://nithipramesti:agustus15@cluster0.v34gz.mongodb.net/kanban?retryWrites=true&w=majority&ssl=true";

//connect to mongoDB - testing?
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err);
  }
  console.log("connected to MongoDB cloud");
});

app.get("/get-filter", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db("kanban");
    //console.log(req.body);

    db.collection("tasks")
      .find({ board: "Platform Launch" })
      .toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        }
        console.log("get data success: ", docs);
        res.status(200).send(docs);
      });
  });
});

app.get("/awesome-generator", (req, res) => {
  const { name, isAwesome } = req.query;
  res.send(`Hiho`);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
