const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// app.use(controllers);
app.use(require("./controllers/api.js"))
app.use(require("./controllers/view.js"))

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

