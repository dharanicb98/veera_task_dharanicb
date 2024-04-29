const express = require('express');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
       const {principal, rate, time_period_months, time_period_years } = req.body;

       if (!principal) {
          throw new Error('Please Enter Principal')
        }
        if (!rate) {
          throw new Error('Please Enter Rate')
        }
        if (!time_period_months && !time_period_years) {
          throw new Error('Please Enter Time')
        }


       const timeInYears = time_period_years + time_period_months / 12;

        //converting type
        const p = parseFloat(principal);
        const r = parseFloat(rate);
        const t = parseFloat(timeInYears);

        let result = ( p * r * t) / 100 

        //after decimal 2 digits 
        let finalResult = result.toFixed(2);
    
        res.status(200).send({result:finalResult})
       
    }
    catch (e) {
      res.status(500).send({error:`error ${e?.message}`})
    }
})


module.exports = router

