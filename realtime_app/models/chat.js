const mongoose = require('mongoose')

const chatSchema = mongoose.model("chatSchema", {
    to: {
        type: String
    },
    Message: {
        type: String
    },
    from: {
        type: String
    }
})

module.exports = chatSchema;