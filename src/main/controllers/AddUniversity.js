const httpResponse = require("../../main/helpers/httpResponse")
const {
  AddUniversityCase,
} = require("../../domain/universityCases/addUnivertyCase")
const UniversityDB = require("../../infra/MongoDb/queries/universityQueries")

module.exports = {
  async AddUniversityController(httpRequest) {
    const university = httpRequest.body

    const validateUser = await AddUniversityCase(university)
    if (!validateUser.success) {
      return validateUser.error
    }
    const createdUniversity = await UniversityDB.create(university)
    if (!createdUniversity.success) {
      return httpResponse.serverError("University not creaded")
    }
    return httpResponse.success("University created")
  },
}
