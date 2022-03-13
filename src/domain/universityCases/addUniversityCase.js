const httpResponse = require("../../main/helpers/httpResponse")
const UniversityDb = require("../../infra/MongoDB/queries/universityQueries")
module.exports = {
  async AddUniversityCase(university) {
    try {
      if (!university) {
        return {
          success: false,
          error: httpResponse.badRequest("University was not provided"),
        }
      }
      const { name, country, alpha_two_code } = university
      if (!name) {
        return {
          success: false,
          error: HttpResponse.badRequest({
            success: false,
            msg: "name is required to create university",
          }),
        }
      }
      if (!country) {
        return {
          success: false,
          error: HttpResponse.badRequest({
            success: false,
            msg: "country is required to create university",
          }),
        }
      }
      if (!alpha_two_code) {
        return {
          success: false,
          error: HttpResponse.badRequest({
            success: false,
            msg: "alpha_two_code is required to create university",
          }),
        }
      }
      const result = await UniversityDb.getByName(name)
      if (result.success && result.university) {
        if (result.university.country === country) {
          return {
            success: false,
            error: httpResponse.badRequest({
              success: false,
              msg: "University already exist",
            }),
          }
        }
      } else {
        return {
          success: true,
        }
      }
    } catch (e) {
      return {
        success: false,
        error: httpResponse.serverError(e),
      }
    }
  },
}
