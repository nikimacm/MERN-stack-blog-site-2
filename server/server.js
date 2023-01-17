import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

const DB_CONNECTION = process.env.mongodb+srv//nickimacm:<Inesita2017>@mern-blog.dqgfmp4.mongodb.net/?retryWrites=true&w=majority;
const PORT = process.env.PORT || 6000;

mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running @ : http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(error));