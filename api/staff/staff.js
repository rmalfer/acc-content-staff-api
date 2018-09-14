const restful = require('node-restful')
const mongoose = restful.mongoose

const staffSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  local: { type: String, required: true },
  className: { type: String, required: true },
  children: { type: String, required: true }
  })

module.exports = restful.model('staff', staffSchema)
