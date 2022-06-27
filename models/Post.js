const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// YOU CAN ALSO MAKE OBJECTS LIKE THIS:

// mongoose.Schema({
//     username: String,
//     Password: String,

// })

module.exports = mongoose.model('Posts', PostSchema);