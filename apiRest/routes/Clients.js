var express = require("express");
var router = express.Router();
const redis = require("redis");
const database = redis.createClient();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "API REST NICO" });
});
router.route("/clients/:clientId/contracts/:contractId")
  .get(function (req, res) {
    database.hgetall(`contract#${req.params.contractId}`, (err, result) => {
      if (result) {
        res.json({
          status: 200,
          message: "success",
          response: result,
        });
      } else {
        res.json({
          status: 404,
          message: "Error, file not found",
          response: {},
        });
      }
    });
  })

  .post(function (req, res) {
    body = JSON.stringify(req.body);
    database.hmset(
      `contract#${req.body["contractId"]}`,
      req.body,
      (err, result) => {
        if (result) {
          res.json({
            status: 200,
            message: "success",
            response: req.body,
          });
        } else {
          res.json({
            status: 400,
            message: "Error during the insert",
            response: {},
          });
        }
      }
    );
  })
  .put(function (req, res) {
    body = JSON.stringify(req.body);
    database.hmset(
      `contract#${req.body["contractId"]}`,
      req.body,
      (err, result) => {
        if (result) {
          res.json({
            status: 200,
            message: "success",
            response: req.body,
          });
        } else {
          res.json({
            status: 401,
            message: "Error during the update",
            response: {},
          });
        }
      }
    );
  })
  .delete(function (req, res) {
    body = JSON.stringify(req.body);
    database.del(`contract#${req.body["contractId"]}`,
    (err, result) => {
      if (result) {
        res.json({
          status: 200,
          message: "success",
          response: {},
        });
      } else {
        res.json({
          status: 402,
          message: "Error during the delete",
          response: {},
        });
      }
    });
  });

router.route("/clients/:clientId/contracts") 
  .get(function (req, res) {
    database.hgetall(`client#${req.params.clientId}`, 
    ["contractId"],

    (err, result) => {
      if (result) {
        res.json({
          status: 200,
          message: "success",
          response: result,
        });
      } else {
        res.json({
          status: 404,
          message: "Error, file not found",
          response: {err},
        });
      }
    });
  })
  .post(function (req, res) {
    //res.send(`POST contract from client with idClient = ${req.params.clientId}`)
    res.json({
      status: 200,
      message: "Hello from POST all contracts of a specific client",
      user: req.params.clientId,
      contract: [1, 5, 2, 6, 55], //TODO NOSE SI HACE FALTA UN POST ACA, PREGUNTAR
    });
  });

router.route("/clients/:clientId")
.get(function (req, res) {
  database.hgetall(`client#${req.params.clientId}`, (err, result) => {
    if (result) {
      res.json({
        status: 200,
        message: "success",
        response: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Error, file not found",
        response: {},
      });
    }
  });
})

.post(function (req, res) {
  body = JSON.stringify(req.body);
  database.hmset(
    `client#${req.body["clientId"]}`,
    req.body,
    (err, result) => {
      if (result) {
        res.json({
          status: 200,
          message: "success",
          response: req.body,
        });
      } else {
        res.json({
          status: 400,
          message: "Error during the insert",
          response: {},
        });
      }
    }
  );
})
.put(function (req, res) {
  body = JSON.stringify(req.body);
  database.hmset(
    `client#${req.body["clientId"]}`,
    req.body,
    (err, result) => {
      if (result) {
        res.json({
          status: 200,
          message: "success",
          response: req.body,
        });
      } else {
        res.json({
          status: 401,
          message: "Error during the update",
          response: {},
        });
      }
    }
  );
})
.delete(function (req, res) {
  body = JSON.stringify(req.body);
  database.del(`client#${req.body["clientId"]}`,
  (err, result) => {
    if (result) {
      res.json({
        status: 200,
        message: "success",
        response: {},
      });
    } else {
      res.json({
        status: 402,
        message: "Error during the delete",
        response: {},
      });
    }
  });
});

router.route("/clients")
  .get(function (req, res) {
    //res.send(`Hello from GET clients`)
    res.json({
      status: 200,
      message: "Hello from GET all clients",
    });
  })
  .post(function (req, res) {
    //res.send(`Hello from POST clients`)
    res.json({
      status: 200,
      message: "Hello from POST all clients",
    });
  })
  .put(function (req, res) {
    // res.send(`Hello from PUT clients`)
    res.json({
      status: 200,
      message: "Hello from PUT all clients",
    });
  })
  .delete(function (req, res) {
    // res.send(`Hello from DELETE clients`)
    res.json({
      status: 200,
      message: "Hello from DELETE all clients",
    });
  });

module.exports = router;
