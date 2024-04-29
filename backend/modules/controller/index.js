const express = require('express');
const services =  require('../services')

const router = express.Router();



router.get('/', async (req, res) => {
    try {
       const {column_name, column_value} = req.query;
       const data = await services.getAllUsers(column_name, column_value);
       res.status(200).send(data)
    }
    catch (e) {
      res.status(500).send({error:`error ${e?.message}`})
    }
})


module.exports = router

