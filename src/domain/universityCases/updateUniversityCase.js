const httpResponse = require("../../main/helpers/httpResponse")
const UniversityDb = require("../../infra/MongoDb/queries/universityQueries")
module.exports = {
  async UpdateUniversityCase(university, universityId) {
    try {
      if (!university) {
        return {
          success: false,
          error: httpResponse.serverError("No university was provided"),
        }
      }
      if (!universityId) {
        return {
          success: false,
          error: httpResponse.serverError("University id was not provided"),
        }
      }

      const query = await UniversityDb.getById(universityId)

      if (!query.success || query.university === "No university found") {
        return {
          success: false,
          error: httpResponse.badRequest({
            success: false,
            msg: "University not found",
          }),
        }
      }
      return {
        success: true,
      }
    } catch (e) {
      return {
        success: false,
        error: httpResponse.serverError({
          success: false,
          msg: "Error on validate user",
        }),
      }
    }
  },
}
