const httpResponse = require("../../main/helpers/httpResponse")
const {
  AddUniversityCase,
} = require("../../domain/universityCases/addUniversityCase")
const UniversityDB = require("../../infra/MongoDb/queries/universityQueries")

module.exports = {
  async AddUniversityController(httpRequest) {
    const university = httpRequest.body

    const validateUniversity = await AddUniversityCase(university)
    if (!validateUniversity.success) {
      return validateUniversity.error
    }
    const createdUniversity = await UniversityDB.create(university)
    if (!createdUniversity.success) {
      return httpResponse.serverError("University not creaded")
    }
    return httpResponse.success("University created")
  },
}
