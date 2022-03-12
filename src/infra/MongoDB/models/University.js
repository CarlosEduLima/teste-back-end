const mongoose = require("mongoose")
const universitySchema = require("../schemas/universitySchema")

module.exports =
  mongoose.models.University || mongoose.model("University", universitySchema)