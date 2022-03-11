const axios = require("axios")
const { UniversityModel } = require("./models/University")
const mongoose = require("mongoose")
const countries = [
  "argentina",
  "brazil",
  "chile",
  "colombia",
  "paraguay",
  "peru",
  "suriname",
  "uruguay",
]
mongoose
  .connect(
    "mongodb+srv://carlos_lima:zUZZb7QzlTim31pz@cluster0.dwnwv.mongodb.net/universities_db?retryWrites=true&w=majority"
  )
  .then(() => {
    countries.forEach(async (country, index) => {
      await axios
        .get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(async function (response) {
          console.log(index + "de" + countries.length)
          const universities = response.data
          universities.forEach(async (university, index) => {
            await UniversityModel(university).save()
            console.log(index + "de" + universities.length)
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    })
  })
