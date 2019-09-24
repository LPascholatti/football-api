const { Router } = require('express')
const Team = require('./model.js')
const City = require('../city/model')
const router = new Router()

router.get('/team', (req, res, next) => 
Team.findAll()
.then(teamList => res.json(teamList))
.catch(next)
);

router.get('/team/:id', (req, res, next) =>
Team.findByPk(req.params.id, {include: [City]})
.then(id => res.json(id))
.catch(next)
);

router.post('/team', (req, res, next) => 
Team.create(req.body)
.then(newTeam => res.json(newTeam))
.catch(next)
);


module.exports = router;

