const {
  UpdateUserController,
} = require("../../main/controllers/UpdateUniversity")
module.exports = function UpdateUniversitiesRoute() {
  return {
    async route(HttpRequest) {
      const response = await UpdateUserController(HttpRequest)
      return response
    },
  }
}
