var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API REST NICO' });
});

router.route('/clients/:clientId/contracts/:contractId')
    .get(function(req,res){
     //res.send(`Hello from GET client ${req.params.clientId}  contract = ${req.params.contractId}`)
     res.json({
       status: 200,
       message: "Hello from GET a specific contract of a specific client",
       user: req.params.clientId,
       contract: req.params.contractId //TODO igual aca, deberia llamar con este parametro al getContracts(idClient: String, idContract: String): Contract{}
     })
    })
    .post(function(req,res){
      //res.send(`Hello from POST client ${req.params.clientId} contract = ${req.params.contractId}`)  
      res.json({
        status: 200,
        message: "Hello from POST a specific contract of a specific client",
        user: req.params.clientId,
        contract: req.params.contractId //TODO nose si hace falta en un post pasar el contractId, salvo que sea para actualizar pero para eso esta el put
      })
    })
    .put(function(req,res){
      //res.send(`Hello from PUT client ${req.params.clientId} contract = ${req.params.contractId}`) 
      res.json({
        status: 200,
        message: "Hello from PUT a specific contract of a specific client",
        user: req.params.clientId,
        contract: req.params.contractId //TODO igual aca, deberia llamar con este parametro al updateContract(contract: Contract): Boolean{}
    })
  })
    .delete(function(req,res){
     // res.send(`Hello from DELETE client ${req.params.clientId} contract = ${req.params.contractId}`) 
     res.json({
      status: 200,
      message: "Hello from DELETE a specific contract of a specific client",
      user: req.params.clientId,
      contract: req.params.contractId //TODO igual aca, deberia llamar con este parametro al deleteContract(id: String): Boolean{}
    })
})
  
router.route('/clients/:clientId/contracts')
    .get(function(req,res){
        //res.send(`GET contracts from client with idClient = ${req.params.clientId}`)
        res.json({
          status: 200,
          message: "Hello from GET all contracts of a specific client",
          user: req.params.clientId,
          contract: [1,5,2,6,55] //TODO aca deberia estar la llamada para obtener los contratos por cliente getContracts(id: String): List<Contracts>{}
        })
    })
    .post(function(req,res){
        //res.send(`POST contract from client with idClient = ${req.params.clientId}`)
        res.json({
          status: 200,
          message: "Hello from POST all contracts of a specific client",
          user: req.params.clientId,
          contract: [1,5,2,6,55] //TODO NOSE SI HACE FALTA UN POST ACA, PREGUNTAR
        })
    })

router.route('/clients/:clientId')
    .get(function(req,res){
      //res.send(`Hello from GET a client= ${req.params.clientId}`)
      res.json({
        status: 200,
        message: "Hello from GET a specific client",
        user: req.params.clientId,
        contract: req.params.contractId //TODO igual aca, deberia llamar con este parametro al getClient(id: String): Client{}
      })
    })
    .delete(function(req,res){
      //res.send(`Hello from DELETE a client= ${req.params.clientId}`)
      res.json({
        status: 200,
        message: "Hello from DELETE a specific client",
        user: req.params.clientId,
        contract: req.params.contractId //TODO igual aca, deberia llamar con este parametro al deleteClient(id: String): Boolean{}
      })
    })

router.route('/clients')
    .get(function(req,res){
      //res.send(`Hello from GET clients`)
      res.json({
        status: 200,
        message: "Hello from GET all clients"
      })
    })
    .post(function(req,res){
      //res.send(`Hello from POST clients`)  
      res.json({
        status: 200,
        message: "Hello from POST all clients"
      })
    })
    .put(function(req,res){
     // res.send(`Hello from PUT clients`) 
     res.json({
      status: 200,
      message: "Hello from PUT all clients"
    })
    })
    .delete(function(req,res){
     // res.send(`Hello from DELETE clients`) 
     res.json({
      status: 200,
      message: "Hello from DELETE all clients"
    })
    })

module.exports = router;
