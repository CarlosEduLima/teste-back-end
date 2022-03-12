const httpResponse = require("../../main/helpers/httpResponse")
const UniversityDb = require("../../infra/MongoDb/queries/universityQueries")
module.exports = {
  async DeleteUniversityCase(universityId) {
    try {
      if (!universityId) {
        return {
          success: false,
          error: httpResponse.badRequest({
            success: false,
            msg: "University id was not provided",
          }),
        }
      }

      const query = await UniversityDb.getById(universityId)
      if (!query.success) {
        return {
          success: false,
          error: HttpResponse.badRequest({
            success: false,
            msg: "University was not found",
          }),
        }
      }
      return {
        success: true,
      }
    } catch (e) {
      return {
        success: false,
        error: httpResponse.serverError({ success: false, error: e }),
      }
    }
  },
}
