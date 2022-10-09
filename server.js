const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/form-submit", (req, res) => {
    console.log({
        form: req.body
    })
    
    res.status(200).send("Submitted!");
});

const PORT = process.env.PORT ?? 80;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
