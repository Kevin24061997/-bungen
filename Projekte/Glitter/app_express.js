const express = require("express");
const cors = require("cors");
const app = express();
const { Client } = require("pg");
const { response } = require("express");

const client = new Client({
  host: "localhost",
  port: 3333,
  user: "postgres",
  password: "TPKD369W",
  database: "glitter",
});

class Glitt {
  id;
  user;
  text;
  datetime;
}

class Session {
  id;
  user_id;
  token;
}

class User {
  id;
  firstName;
  lastName;
  username;
  password;
}

client.connect();

app.use(cors());
app.use(express.json());

app.get("/glitts", (req, res) => {
  client.query("SELECT * FROM glitts", (err, results) => {
    const glitts = [];
    // results.rows.forEach((g) => glitts.push(new Glitt(g)));
    res.send(results.rows);
  });
});

app.post("/glitts", (req, res) => {
  const payload = req.body;
  console.log(payload);

  client.query(
    'INSERT INTO glitts ("user", text) VALUES ($1, $2);',
    [payload.user, payload.text],
    (err, results) => {
      if (err) {
        res.status(400).send("Error");
      } else {
        res.send(payload);
      }
    }
  );
});

getUserfromDB = (req, res) => {
  client.query(
    "SELECT * FROM users where username = $1",
    [req.body.username],
  );
};

getPWfromDB = (req, res) => {
  client.query(
    "SELECT * FROM users where password = $1",
    [req.body.password],
    (err, results) => {
      res.send(results.rows);
    }
  );
};

app.post("/sessions", postSession, getUserfromDB, getPWfromDB, (req, res) => {
  client.query(
    "SELECT * FROM users where username = $1",
    [req.body.username],
  ).then((err, res) => {
    if (err) {
      res.status(401).send("Error");
    }
    else if (req.body.username === getPWfromDB) {
      res.status(200).send("User User exist")

      client.query()
        .then()
    }
  });
});

app.post('/sessions', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).send('Invalid request. Both username and password are required.');
  }

  client.query('SELECT * FROM users WHERE username = $1 and password = $2', [username, password], (err, result) => {
    try{

    if (user.password !== password) {
      return res.status(401).send('Username or password is incorrect.');
    }

    else if (result.rows.length === 0) {
      return res.status(401).send('Username or password is incorrect.');
    }

    const user = result.rows[0];
  
    return res.status(200).send('Login successful.');
    }

  catch (err) {
      return res.status(500).send('Error retrieving user from database.');
    }
  })
});



// function postSession (req, res) {
//   const {username, password} = req.body

//   if (!username || !password) {
//     res.status(400),send("Please enter username and passwort");
//   }
// }

// app.get("/session/check", checkValidSession);

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
