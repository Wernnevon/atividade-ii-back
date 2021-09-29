const express = require( "express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
//  Rotas
app.use("/", require("./src/routes"));

app.listen(3001);
