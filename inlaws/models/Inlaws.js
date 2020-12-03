var mongoose = require('mongoose');
var InlawSchema = new mongoose.Schema({
  name: String,
  relation: String,
  birthday: String,
  hobbies: String,
  notes: String,
});
mongoose.model('Inlaw', InlawSchema);