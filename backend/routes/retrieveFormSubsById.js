const express = require('express');
let router = express.Router();
const services = require('../db/services/services')

router.route("/:formid")
    .get( async (req, res) => {
        let subs;
        try {
            subs = await services.retrieveFormSubsById(req.params.formid)
            res.send(subs)
        }
        catch (e){
            console.log(e)
        }
    })
module.exports = router