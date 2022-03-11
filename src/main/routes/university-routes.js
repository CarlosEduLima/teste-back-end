const adpter = require("../config/express-router.adpter")
const getUniversitiesRouter = require("../../presentation/routers/getUniversitiesRouter")
module.exports = (router) => {
  router.get("/universities", adpter(getUniversitiesRouter()))
}
