//camada de apresentação, aplicações que consumirem a API irão se comunicar somente com essa camada
//ele recebe um request e retorna um response
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
