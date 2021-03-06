const axios = require("axios")
const UniversityModel = require("./models/University")
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
  .connect(process.env.URI)
  .then(async () => {
    const data = await UniversityModel.find()
    if (data) {
      console.log("Database is already populated")
    } else {
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
    }
  })
  .catch((error) => {
    console.log("Database error: " + error)
  })
