const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
// Connect DB
connectDB();

// Initial middelware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "hello" }));

// define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/bets", require("./routes/bets"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
