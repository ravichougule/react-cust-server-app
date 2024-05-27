var express = require("express");
var router = express.Router();
const {loginService, regService} = require('../services/customerService')
const validateToken = require('../../utils/validateToken')

//Login service
router.post("/login",async function (req, res, next) {
  try {
    console.log("service")
    const data = req.body.data;
    console.log(req.body.data);
    const result = await loginService(data);
    res.send(result);

  } catch (ex) {
    console.error(ex);
    res.send(ex.message);
  }
})

//getOrders service
router.get('/getOrders', validateToken, async function(req, res, next){
   res.send('my orders list');
} )


//register service
router.post('/register', validateToken, async function (req, res, next) {
  try {
      console.log('controller')
      var data = req.body.data;
      const result = await regService(data)
      res.send(result)

  } catch (ex) {
      console.error(ex);
      res.send(ex.message);
  }

})

module.exports = router;