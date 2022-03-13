//camada de apresentação, aplicações que consumirem a API irão se comunicar somente com essa camada
//ele recebe um request e retorna um response
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
