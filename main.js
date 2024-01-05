const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "hello from express" });
});

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
