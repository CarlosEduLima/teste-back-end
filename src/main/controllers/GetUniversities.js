const httpResponse = require("../helpers/httpResponse")
const UniversityDB = require("../../infra/MongoDB/queries/universityQueries")
module.exports = {
  async GetUniversitiesController(httpResquest) {
    if (httpResquest.query.country) {
      const country = httpResquest.query.country
      country.charAt(0).toUpperCase() + country.slice(1);
      const query = await UniversityDB.getByCountry(country)
      if (!query.success) {
        return httpResponse.serverError(query.error)
      }
      return httpResponse.success(query.university)
    } else {
      const query = await UniversityDB.getAll()
      if (!query.success) {
        return httpResponse.serverError(query.error)
      }
      return httpResponse.success(query.universities)
    }
  },
}
