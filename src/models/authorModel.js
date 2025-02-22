const mongoose = require("mongoose")
require("mongoose-type-email")
const authorSchema = new mongoose.Schema(
    { fname: { 
        type: String,
        required: true
    }, 
    lname: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    }, 
    email: {
        type: mongoose.SchemaTypes.Email, 
        required: true},
 
    password: {
        type: String,
        required: true
    },

},
    
{timestamps:true})


module.exports = mongoose.model('AuthorProject', authorSchema)

