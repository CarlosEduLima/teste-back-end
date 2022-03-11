const {
  GetUniversitiesController,
} = require("../../main/controllers/GetUniversities")
module.exports = function GetUniversitiesRoute() {
  return {
    async route(HttpRequest) {
      const response = await GetUniversitiesController(HttpRequest)
      return response
    },
  }
}
