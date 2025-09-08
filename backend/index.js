const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
}

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/api/temperature", (req, res) => {
  const minTemp = -40;
  const maxTemp = 50;
  const temp = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
  res.json({ temperature: temp });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
