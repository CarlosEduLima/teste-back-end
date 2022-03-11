const { UniversityModel } = require("../models/University")
module.exports = {
  async create(university) {
    const createdUniversity = await UniversityModel(university).save()
    if (!createdUniversity) {
      return { success: false }
    }
    return { success: true, university: createdUniversity }
  },
  async getById(id) {
    const user = await UniversityModel.findById(id)
    if (!user) {
      return { success: false }
    }
    return { success: true, foundUser: user }
  },
  async getAll(num) {
    const universities = await UniversityModel.find({}).limit(num)
    if (!universities) {
      return { success: false }
    }
    return { success: true, foundUniversities: universities }
  },
  async delete(id) {
    const deletedUser = await UniversityModel.findByIdAndDelete(id)
    if (!deletedUser) {
      return { success: false }
    }
    return { success: true, user: deletedUser }
  },
  async update(id, user) {
    const { name, email, age, password, cpf, phoneNumber } = user
    const updatedUser = await UniversityModel.findByIdAndUpdate(id, {
      name: name,
      password: password,
      email: email,
      age: age,
      cpf: cpf,
      phoneNumber: phoneNumber,
    })
    if (!updatedUser) {
      return { success: false }
    }
    return { success: true, user: updatedUser }
  },
}
