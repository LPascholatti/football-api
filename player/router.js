const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')
const router = new Router()

router.get('/player', (req, res, next) => 
  Player
    .findAll()
    .then(playersList => res.json(playersList))
    .catch(next)
);

router.get('/player/:id', (req, res, next) =>
  Player
    .findByPk(req.params.id, { include: [Team]})
    .then(id => res.json(id))
    .catch(next)
);

router.post('/player', (req, res, next) => 
  Player
    .create(req.body)
    .then(newPlayer => res.json(newPlayer))
    .catch(next)
);

module.exports = router;