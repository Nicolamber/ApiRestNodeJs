var express = require("express");
var router = express.Router();
const redis = require("redis");
const database = redis.createClient();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "API REST NICO" });
});

/*-------------------------------------------------------------------*/
router.route("/clients/:clientId/contracts/:contractId")
  .get(function (req, res) {
    database.hgetall(`client#${req.params.clientId}contract#${req.params.contractId}`,
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
          response: {},
        });
      }
    });
  })

  put(function (req, res) {
    body = JSON.stringify(req.body);
    database.hmset(
      `client#${req.params.clientId}contract#${req.params.contractId}`,
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
    database.del(`client#${req.params.clientId}contract#${req.params.contractId}`,
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
/*-------------------------------------------------------------------*/
router.route("/clients/:clientId/contracts")
  .get(function (req, res) {
    database.keys(`client#${req.params.clientId}contract#*`, (err, result) => {
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
    body = JSON.stringify(req.body);
    database.hmset(
      `client#${req.params.clientId}contract#${req.body["contractId"]}`,
      req.body, //send in body clientId
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

/*-------------------------------------------------------------------*/
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

.put(function (req, res) {
  body = JSON.stringify(req.body);
  database.hmset(
    `client#${req.params.clientId}`,
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
  database.del(`client#${req.params.clientId}`,
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

/*-------------------------------------------------------------------*/
router.route("/clients")
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
.get(function (req, res) {
  database.keys("client#*", (err, result) => {
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



module.exports = router;
