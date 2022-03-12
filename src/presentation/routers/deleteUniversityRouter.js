const {
  DeleteUniversityController,
} = require("../../main/controllers/DeleteUniversity")
module.exports = function DeleteUniversityRoute() {
  return {
    async route(HttpRequest) {
      const response = await DeleteUniversityController(HttpRequest)
      return response
    },
  }
}
