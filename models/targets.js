const mongoose = require('mongoose')

const targetsSchema = new mongoose.Schema({
    todo:{
        type : String,
        required : 'true',
    },
    date :{
        type : Date,
        required : 'true',
    },
});

module.exports = mongoose.model('Target', targetsSchema)