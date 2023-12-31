require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.get('/greeting', (req, res) => {
  res.json({ greeting: 'Hi there!'})
})

app.get('/checkout', (req, res) => {
  const sessionId = req.session_id;
  res.json({sessionId})
})

app.post('/users/', (req, res) => {

  const values = [req.body.session_id, req.body.first_name, req.body.last_name, req.body.email, req.body.password,
    req.body.address_line_one, req.body.address_line_two, req.body.city, req.body.state,
    req.body.zip_code, req.body.phone_number, req.body.credit_card_num,
    req.body.expiration_date, req.body.cvv, req.body.billing_zip]

  const q = `INSERT INTO users (session_id, first_name, last_name, email, password,
             address_line_one, address_line_two, city, state, zip_code, phone_number,
             credit_card_num, expiration_date, cvv, billing_zip)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`

  db.query(q, values, (err, results) => {
    if (err) {
      console.error("Error posting data!", err);
      return;
    }
    res.json(req.body);

  })

})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
