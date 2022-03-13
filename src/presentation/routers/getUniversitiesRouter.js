//camada de apresentação, aplicações que consumirem a API irão se comunicar somente com essa camada
//ele recebe um request e retorna um response
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
