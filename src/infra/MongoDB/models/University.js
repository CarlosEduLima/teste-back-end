const mongoose = require("mongoose")
const universitySchema = require("../schemas/universitySchema")

const UniversityModel = mongoose.model("University", universitySchema)

module.exports = { UniversityModel }
