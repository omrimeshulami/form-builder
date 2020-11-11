const mongoose = require('mongoose');
//creating the model for the collection
const formSubs = new mongoose.Schema({
    formID:{
        type: String
    },
    data:{
        type: Array
    }
})
    module.exports = FORMSUB = mongoose.model('formSubs',formSubs);