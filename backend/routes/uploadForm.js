const express = require('express');
const router = express.Router();
const services = require('../db/services/services')

router.route("")
    .post(async (req, res) => {
        let result
        try {
            result = await services.uploadForm(req.body)
            res.json(result)
        } catch (e) {
            console.log(e)
        }
    })
module.exports = router