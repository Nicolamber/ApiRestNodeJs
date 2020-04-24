var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/clients/:idClient/contracts')
    .get(function(req,res){
        res.send(`GET contracts from client with idClient = ${req.params.idClient}`)

    })
    .post(function(req,res){
        res.send(`POST contract from client with idClient = ${req.params.idClient}`)

    })

router.route('/clients/:clientId/contracts/:contractId')
    .get(function(req,res){
     res.send(`Hello from GET client ${req.params.clientId}  contract = ${req.params.contractId}`)
    })
    .post(function(req,res){
      res.send(`Hello from POST client ${req.params.clientId} contract = ${req.params.contractId}`)  
    })
    .put(function(req,res){
      res.send(`Hello from PUT client ${req.params.clientId} contract = ${req.params.contractId}`) 
    })
    .delete(function(req,res){
      res.send(`Hello from DELETE client ${req.params.clientId} contract = ${req.params.contractId}`) 
    })
  
router.route('/clients/:clientId/contracts')
    .get(function(req,res){
      res.send(`Hello from GET all client contracts = ${req.params.clientId}`)
    })
    .post(function(req,res){
      res.send(`Hello from POST all client contracts = ${req.params.clientId}`)
    })
    .delete(function(req,res){
      res.send(`Hello from DELETE all client contracts = ${req.params.clientId}`)
    })
    .put(function(req,res){
      res.send(`Hello from PUT all client contracts = ${req.params.clientId}`)
    })

    router.route('/clients/:clientId')
    .get(function(req,res){
      res.send(`Hello from GET a client= ${req.params.clientId}`)
    })
    .delete(function(req,res){
      res.send(`Hello from DELETE a client= ${req.params.clientId}`)
    })

router.route('/clients')
    .get(function(req,res){
      res.send(`Hello from GET clients`)
    })
    .post(function(req,res){
      res.send(`Hello from POST clients`)  
    })
    .put(function(req,res){
      res.send(`Hello from PUT clients`) 
    })
    .delete(function(req,res){
      res.send(`Hello from DELETE clients`) 
    })

module.exports = router;
