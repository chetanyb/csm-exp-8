require("dotenv").config();

const express = require("express");
const { Sequelize } = require("sequelize");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

// Routes
app.get("/", async (req, res) => {
  try {
    const entries = await sequelize.query("SELECT * FROM entries;", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.render("index", { entries });
  } catch (error) {
    console.error("Failed to fetch entries:", error);
    res.status(500).send("Error fetching entries");
  }
});

app.post("/add-entry", async (req, res) => {
  const { data } = req.body;
  try {
    await sequelize.query("INSERT INTO entries (data) VALUES (?);", {
      replacements: [data],
      type: sequelize.QueryTypes.INSERT,
    });
    res.redirect("/");
  } catch (error) {
    console.error("Failed to add entry:", error);
    res.status(500).send("Error adding entry");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
