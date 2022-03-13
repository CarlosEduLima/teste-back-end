//camada que irá fazer o controle do fluxo de dados
//se comunica com a infra e domain
const httpResponse = require("../helpers/httpResponse")
const UniversityDB = require("../../infra/MongoDB/queries/universityQueries")
module.exports = {
  async GetUniversityByIdController(httpRequest) {
    if (!httpRequest.params.id) {
      return httpResponse.badRequest("university id was not provided")
    }

    const universityId = httpRequest.params.id

    const query = await UniversityDB.getById(universityId)

    if (!query.success) {
      return httpResponse.serverError()
    }

    return httpResponse.success(query.university)
  },
}
