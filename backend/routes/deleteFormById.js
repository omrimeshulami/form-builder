const express = require('express');
const router = express.Router();
const services = require('../db/services/services')

router.route("")
    .post(async (req, res) => {
        try {
            await services.deleteFormById(req.body.key)
            res.send("success")
        } catch (e) {
            console.log(e)
        }
    })
module.exports = router