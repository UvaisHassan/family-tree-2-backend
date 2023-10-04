const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectDB(URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
