//camada de apresentação, aplicações que consumirem a API irão se comunicar somente com essa camada
//ele recebe um request e retorna um response
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
