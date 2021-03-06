//rotas da aplicação que utilizam o adpter do express, assim a api não precisa depender do framework
const adpter = require("../config/express-router.adpter")
const getUniversitiesRouter = require("../../presentation/routers/getUniversitiesRouter")
const getUniversityRouter = require("../../presentation/routers/getUniversityRouter")
const addUniversityRouter = require("../../presentation/routers/addUniversityRouter")
const updateUniversityRouter = require("../../presentation/routers/updateUniversityRouter")
const deleteUniversityRouter = require("../../presentation/routers/deleteUniversityRouter")
module.exports = (router) => {
  const test = () => {
    return {
      async route() {
        return {
          statusCode: 200,
          body: "api is working",
        }
      },
    }
  }
  router.get("/universities", adpter(getUniversitiesRouter()))
  router.get("/", adpter(test()))
  router.get("/university/:id", adpter(getUniversityRouter()))
  router.post("/universities", adpter(addUniversityRouter()))
  router.put("/universities/:id", adpter(updateUniversityRouter()))
  router.delete("/university/:id", adpter(deleteUniversityRouter()))
}
