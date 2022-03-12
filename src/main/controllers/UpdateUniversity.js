const httpResponse = require("../../main/helpers/httpResponse")
const {
  UpdateUniversityCase,
} = require("../../domain/universityCases/updateUniversityCase")
const UniversityDb = require("../../infra/MongoDb/queries/universityQueries")
module.exports = {
  async UpdateUserController(httpRequest) {
    const validatedUniversity = await UpdateUniversityCase(
      httpRequest.body,
      httpRequest.params.id
    )
    if (!validatedUniversity.success) {
      return validatedUniversity.error
    }
    const updatedUniversity = await UniversityDb.update(
      httpRequest.params.id,
      httpRequest.body
    )
    if (!updatedUniversity.success) {
      return httpResponse.serverError("Error on update user")
    }
    return httpResponse.success({
      success: true,
      university: updatedUniversity,
    })
  },
}
