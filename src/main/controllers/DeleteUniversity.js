const httpResponse = require("../../main/helpers/httpResponse")
const {
  DeleteUniversityCase,
} = require("../../domain/universityCases/deleteUniversityCase")
const UniversityDB = require("../../infra/MongoDB/queries/universityQueries")
module.exports = {
  async DeleteUniversityController(httpRequest) {
    const validateUniversity = await DeleteUniversityCase(httpRequest)
    if (!validateUniversity.success) {
      validateUniversity.error
    }

    const deletedUniversity = await UniversityDB.delete(httpRequest.params.id)

    if (!deletedUniversity.success) {
      return httpResponse.badRequest({
        success: false,
        error: deletedUniversity.error,
      })
    }

    return httpResponse.success(deletedUniversity)
  },
}
