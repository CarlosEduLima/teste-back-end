const adpter = require("../config/express-router.adpter")
const getUniversitiesRouter = require("../../presentation/routers/getUniversitiesRouter")
const getUniversityRouter = require("../../presentation/routers/getUniversityRouter")
module.exports = (router) => {
  router.get("/universities", adpter(getUniversitiesRouter()))
  router.get("/university/:id", adpter(getUniversityRouter()))
}
