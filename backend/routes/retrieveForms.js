const express = require('express');
let router = express.Router();
const services = require('../db/services/services')

router.route("")
    .get(  async (req, res) => {
        let docs;
        try {
             docs = await services.retrieveForms()
            res.send(docs)
        }
        catch (e){
            console.log(e)
        }
    })
module.exports = router