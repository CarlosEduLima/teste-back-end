const router = require("express").Router()
//mapeia todas as rodas no diretório routes, no caso só há uma, mas podrias haver as rotas de user por exemplo
module.exports = (app) => {
  app.use("/api", router)
  require("../routes/university-routes")(router)
}
