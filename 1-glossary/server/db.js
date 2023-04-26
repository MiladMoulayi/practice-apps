const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect("mongodb://127.0.0.1:27017/glossary", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to DB"))
  .catch(console.error("Could not connect to DB"))

const EntrySchema = new Schema({
  word: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  partOfSpeech: {
    type: String,
    required: true
  }
});

const Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;