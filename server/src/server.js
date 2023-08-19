const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "APi testing is working",
  });
});

app.post("/test", (req, res) => {
  res.status(200).send({
    message: "post :APi testing is working",
  });
});

app.put("/test", (req, res) => {
  res.status(200).send({
    message: "put :APi testing is working",
  });
});

app.delete("/test", (req, res) => {
  res.status(200).send({
    message: "delete :APi testing is working",
  });
});

app.listen(3001, () => {
  console.log(`server listening on at http://localhost:3001`);
});
