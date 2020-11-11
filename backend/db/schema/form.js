const mongoose = require('mongoose');
//creating the model for the collection
const form = new mongoose.Schema({
    title:{
        type: String
     },
    submissionsNumber:{
        type: Number
    },
    fields: {
        type: [{
            fieldLabel: {type: String},
            inputName: {type: String},
            inputType: {type: String}
        }]
    }
})
module.exports = Form = mongoose.model('form',form);