const UniversityModel = require("../models/University")
module.exports = {
  async create(university) {
    try {
      const createdUniversity = await UniversityModel(university).save()
      return { success: true, university: createdUniversity }
    } catch (err) {
      return { success: false, error: err }
    }
  },
  async getById(id) {
    try {
      const university = await UniversityModel.findById(id)
      if (!university) {
        return { success: false }
      }
      return { success: true, university: university }
    } catch (err) {
      return { success: false, error: err }
    }
  },
  async getByCountry(country) {
    try {
      const university = await UniversityModel.findOne({
        country: country,
      }).select("name country alpha_two_code")
      return { success: true, university: university }
    } catch (err) {
      return { success: false, error: err }
    }
  },
  async getByName(name) {
    try {
      const university = await UniversityModel.findOne({
        name: name,
      }).select("name country alpha_two_code")
      return { success: true, university: university }
    } catch (err) {
      return { success: false, error: err }
    }
  },
  async getAll(page) {
    try {
      const universities = await UniversityModel.find({})
        .limit(20)
        .select("name country alpha_two_code")
        .skip(page)
      return { success: true, universities: universities }
    } catch (err) {
      return { success: false, error: err }
    }
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
