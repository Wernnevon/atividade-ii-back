const express = require("express");
const routes = express.Router();
const controller = require("./controller");

routes.get('/', controller.spotify);
routes.get("/artistas/:name", controller.indexByName);
routes.get("/artistasRelacionados/:id", controller.showRelated);
routes.get("/artista/:id", controller.show);

module.exports = routes;