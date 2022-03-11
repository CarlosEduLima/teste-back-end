const httpResponse = require("../helpers/httpResponse")
const UniversityDB = require("../../infra/MongoDB/queries/universityQueries")
module.exports = {
  async GetUniversityByIdController(httpRequest) {
    if (!httpRequest.params.id) {
      return httpResponse.badRequest("User id was not provided")
    }

    const universityId = httpRequest.params.id

    const query = await UniversityDB.getById(universityId)

    if (!query.success) {
      return httpResponse.serverError()
    }

    return httpResponse.success(query.university)
  },
}
