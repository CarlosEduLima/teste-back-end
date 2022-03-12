const adpter = require("../config/express-router.adpter")
const getUniversitiesRouter = require("../../presentation/routers/getUniversitiesRouter")
const getUniversityRouter = require("../../presentation/routers/getUniversityRouter")
const addUniversityRouter = require("../../presentation/routers/addUniversityRouter")
const updateUniversityRouter = require("../../presentation/routers/updateUniversityRouter")
module.exports = (router) => {
  router.get("/universities", adpter(getUniversitiesRouter()))
  router.get("/university/:id", adpter(getUniversityRouter()))
  router.post("/universities", adpter(addUniversityRouter()))
  router.put("/universities/:id", adpter(updateUniversityRouter()))
}
