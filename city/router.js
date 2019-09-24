const { Router } = require('express')
const City = require('./model')
const router = new Router()

router.get('/city', (req, res, next) => 
  City
    .findAll()
    .then(citiesList => res.json(citiesList))
    .catch(next)
);

router.get('/city/:id', (req, res, next) =>
  City
    .findByPk(req.params.id)
    .then(id => res.json(id))
    .catch(next)
);

router.post('/city', (req, res, next) => 
  City
    .create(req.body)
    .then(newCity => res.json(newCity))
    .catch(next)
);


module.exports = router;