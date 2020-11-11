const express = require("express");
const connectDB = require("./db/services/connection");
const bodyParser = require("body-parser");
const uploadForm = require("./routes/uploadForm");
const deleteFormById = require("./routes/deleteFormById");
const submitSubForForm = require("./routes/submitSubForForm");
const retrieveFormById = require("./routes/retrieveFormById");
const retrieveFormSubsById = require("./routes/retrieveFormSubsById");
const retrieveForms = require("./routes/retrieveForms");

connectDB();

const app = express();

app.use(bodyParser.json());
app.use("/uploadForm", uploadForm);
app.use("/deleteFormById", deleteFormById);
app.use("/submitSubForForm", submitSubForForm);
app.use("/retrieveFormById", retrieveFormById);
app.use("/retrieveFormSubsById", retrieveFormSubsById);
app.use("/retrieveForms", retrieveForms);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
