var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController')

/* GET home page. */
router.get('/', PizzasController.index);

router.get('/pizzas/:id', PizzasController.show);

//Antes como estava:
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;


