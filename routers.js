// To import express library
const express = require("express");

// Import database.js
const { connection } = require("./database");

// define a router object
let router = express.Router();

// define an API to return all the users
router.get("/users/all", (request, response) => {
    connection.query("select * from users", (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        response.status(200).send(results);
      }
    });
  });

  // define an API to return by account number
router.get("/user/by-acn", (request, response) => {
  connection.query(
    `select * from users where account_number = ${request.query.acn}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        if (results.length == 0) {
          response.status(404).send("user not found");
        }else
        response.status(200).send(results);
      }
    }
  );
});

// define an API to return all the accounts
router.get("/accounts/all", (request, response) => {
  connection.query("select * from accounts", (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Something went wrong...");
    } else {
      response.status(200).send(results);
    }
  });
});

// define an API to return accounts by account number
router.get("/account/by-acn", (request, response) => {
  connection.query(
    `select * from accounts where account_number = ${request.query.acn}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        if (results.length == 0) {
          response.status(404).send("user not found");
        }else
        response.status(200).send(results);
      }
    }
  );
});

// define an API to return all the transactions
router.get("/transactions/all", (request, response) => {
  connection.query("select * from transactions", (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Something went wrong...");
    } else {
      response.status(200).send(results);
    }
  });
});

// define an API to return transactions by account number
router.get("/transactions/by-acn", (request, response) => {
  connection.query(
    `select * from transactions where account_number = ${request.query.acn}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        if (results.length == 0) {
          response.status(404).send("user not found");
        }else
        response.status(200).send(results);
      }
    }
  );
});

// define an POST API for a BUY order
router.post("/transactions/add/buy", (request, response) => {
  connection.query(
    `insert into transactions (account_number, stock_ticker, transaction_type, quantity, price, fee, date_time) 
    values ("${request.body.account_number}", "${request.body.stock_ticker}", "${request.body.transaction_type}", "${request.body.quantity}", "${request.body.price}", "${request.body.fee}", "${request.body.date_time}")`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        response.status(200).send("Buy order completed");
      }
    }
  );
});

// define an POST API for a SELL order
router.post("/transactions/add/sell", (request, response) => {
  connection.query(
    `insert into transactions (account_number, stock_ticker, transaction_type, quantity, price, fee, date_time) 
    values ("${request.body.account_number}", "${request.body.stock_ticker}", "${request.body.transaction_type}", "${request.body.quantity}", "${request.body.price}", "${request.body.fee}", "${request.body.date_time}")`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Something went wrong...");
      } else {
        response.status(200).send("Sell order completed");
      }
    }
  );
});
  module.exports = { router };
