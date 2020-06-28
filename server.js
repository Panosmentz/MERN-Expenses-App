const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
require("dotenv").config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/logout", require("./routes/api/logout"));

app.use("/api/transactions", require("./routes/api/transactions"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); //serve static frontend - npm run build

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} //sends everything to index.html

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
