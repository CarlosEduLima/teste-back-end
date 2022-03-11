const httpResponse = require("../helpers/httpResponse")
const UniversityDB = require("../../infra/MongoDB/queries/universityQueries")
module.exports = {
  async GetUniversitiesController(httpResquest) {
    if (httpResquest.query.country) {
      const query = await UniversityDB.getByCountry(httpResquest.query.country)
      if (!query.success) {
        return httpResponse.serverError()
      }
      return httpResponse.success(query.university)
    } else {
      const query = await UniversityDB.getAll(20)
      if (!query.success) {
        return httpResponse.serverError()
      }
      return httpResponse.success(query.universities)
    }
  },
}
