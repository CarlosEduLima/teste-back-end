const mongoose = require("mongoose")

module.exports = new mongoose.Schema({
  country: {
    type: String,
  },
  name: {
    type: String,
  },
  domains: {
    type: Array,
  },
  alpha_two_code: {
    type: String,
  },
  state_province: {
    type: String,
  },
  age: {
    type: String,
  },
  web_pages: {
    type: Array,
  },
})
