const express = require('express');
const router = express.Router();
const services = require('../db/services/services')

router.route("/:formid")
    .get(async (req, res) => {

        let form;
        try {
            form = await services.retrieveFormById(req.params.formid)
            res.send(form)
        } catch (e) {
            console.log(e)
        }
    })

module.exports = router