const {
  GetUniversityByIdController,
} = require("../../main/controllers/GetUniversityById")
module.exports = function GetUniversitiesRoute() {
  return {
    async route(HttpRequest) {
      const response = await GetUniversityByIdController(HttpRequest)
      return response
    },
  }
}
