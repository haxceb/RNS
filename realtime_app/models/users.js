const mongoose = require('mongoose')

const userSchema = mongoose.model("userSchema",{
    FirstName:{
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String
    }

});

module.exports = userSchema;