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
        return { success: true, university: "No university found" }
      }
      return { success: true, university: university }
    } catch (err) {
      return { success: false, error: err }
    }
  },
  async getByCountry(country) {
    try {
      const university = await UniversityModel.find({
        country: country,
      }).select("name country alpha_two_code")
      /*if (!university) {
        return { success: true, university: "No university found" }
      }*/
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
      if (!university) {
        return { success: true, university: "No university found" }
      }
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
      if (!universities) {
        return { success: true, university: "No university found" }
      }
      return { success: true, universities: universities }
    } catch (err) {
      return { success: false, error: err }
    }
  },
  async delete(id) {
    try {
      const deletedUniversity = await UniversityModel.findByIdAndDelete(id)
      return { success: true, university: deletedUniversity }
    } catch (error) {
      return { success: false, error: err }
    }
  },
  async update(id, university) {
    //const { name, email, age, password, cpf, phoneNumber } = user
    const updatedUniversity = await UniversityModel.findByIdAndUpdate(
      id,
      university
    )
    if (!updatedUniversity) {
      return { success: false }
    }
    return { success: true, university: updatedUniversity }
  },
}
