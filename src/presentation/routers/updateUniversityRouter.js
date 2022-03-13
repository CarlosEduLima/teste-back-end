//camada de apresentação, aplicações que consumirem a API irão se comunicar somente com essa camada
//ele recebe um request e retorna um response
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
