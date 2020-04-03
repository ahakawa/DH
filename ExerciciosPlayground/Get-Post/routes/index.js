var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', IndexController.viewContato ) 
router.get('/confirmarcontato', IndexController.confirmarContato ) //vai mostrar na view contato

module.exports = router;
