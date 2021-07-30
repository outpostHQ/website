const mongoose = require('./index.js');
const { Schema } = mongoose;

const snippetSchema = new Schema({
  code: {
    type: String,
    maxlength: 65025,
  },
});

module.exports.Snippet = mongoose.model('Snippet', snippetSchema);
