const {
  AddUniversityController,
} = require("../../main/controllers/AddUniversity")
module.exports = function AddUniversitiesRoute() {
  return {
    async route(HttpRequest) {
      const response = await AddUniversityController(HttpRequest)
      return response
    },
  }
}
