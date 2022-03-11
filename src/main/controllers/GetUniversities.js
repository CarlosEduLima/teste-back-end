const httpResponse = require("../helpers/httpResponse")
const UniversityDB = require("../../infra/MongoDB/queries/universityQueries")
module.exports = {
  async GetUniversitiesController() {
    const query = await UniversityDB.getAll(20)
    if (!query.success) {
      return httpResponse.serverError()
    }
    return httpResponse.success(query.foundUniversities)
  },
}
