
// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String , required: true, maxLength: 100, minLength: 3 },
});

genreSchema.virtual("url").get(function () {
    return `/catalog/genre/${this._id}`;
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("Genre", genreSchema);
