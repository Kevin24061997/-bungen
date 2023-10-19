import express, { request, response } from "express";
import cors from "cors";
import { Client } from "pg";
import jwt from "jsonwebtoken";

const pgClient = new Client({
  user: "postgres",
  database: "Benutzer",
  password: "TPKD369W",
  port: 3333,
  host: "localhost",
});

pgClient.connect();

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

class Benutzer {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;

  constructor(data: Record<string, unknown>) {
    this.id = data.id as number;
    this.firstname = data.firstname as string;
    this.lastname = data.lastname as string;
    this.username = data.username as string;
    this.email = data.email as string;
    this.password = data.password as string;
  }
}

app.post("/Benutzer", postUser);

function postUser(request, response) {
  const user = new Benutzer(request.body);
  console.log(user);

  const queryString =
    "INSERT INTO benutzer (firstname, lastname, username, email, password) VALUES ($1, $2, $3, $4, $5)";
  pgClient.query(
    queryString,
    [user.firstname, user.lastname, user.username, user.email, user.password],
    (err, results) => {
      if (err) {
        response.status(400).send(err.stack);
      } else {
        response.status(201).send(user);
      }
    }
  );
}

app.post("/login", login);

async function login(request, response) {
  try {
    const passwordQuery =
      "SELECT * FROM benutzer WHERE email = $1 AND password = $2";
    const passwordParams = [request.body.email, request.body.password];

    const passwordResult = await pgClient.query(passwordQuery, passwordParams);

    if (passwordResult.rowCount === 0) {
      console.log("Passwort ungültig.");
      response.status(400).send("scheiß passwort");
    } else {
      const token = jwt.sign(request.body, "geheimerSchluessel", {
        expiresIn: "3m",
      });
      const verifiedToken = verifyToken(token);
      if (verifiedToken) {
        console.log("Token verifiziert:", verifiedToken);
      } else {
        console.log("Token ungültig oder abgelaufen.");
      }
      console.log(token);
      response.status(201).send(
        JSON.stringify({
          token: token,
        })
      );
    }

    console.log("Anmeldung erfolgreich.");
    return true;
  } catch (err) {
    console.log("Fehler beim Ausführen der Anfrage: ", err.stack);
    response.status(400).send(err.stack);
  }
}

function verifyToken(token: string) {
  try {
    const decodedToken = jwt.verify(token, "geheimerSchluessel");
    return decodedToken;
  } catch (err) {
    console.error(err);
  }
}

// -----------------Tagebuch---------------------!!!!

app.post("/tagebuch", postTagebuch);
app.get("/tagebuch", getTagebuch);


class Tagebuch {
  id: number;
  text: string;

  constructor(data: any) {
    this.id = data.id;
    this.text = data.text;
  }
}

async function getAllTagebuch(): Promise<Array<Tagebuch>> {
  const res = await pgClient.query("SELECT * FROM tagebuch;");
  return res.rows.map(g => new Tagebuch(g))
}


function postTagebuch(request, response) {
  const glitt = new Tagebuch(request.body);
  console.log(glitt);

  const queryString =
    'INSERT INTO tagebuch ( text ) VALUES ($1)';
  pgClient.query(
    queryString,
    [glitt.text],
    (err, results) => {
      if (err) {
        response.status(400).send(err.stack);
      }
      response.status(201).send(glitt);
    }
  );
}

async function getTagebuch(request, response) {
  const tagebuch = await getAllTagebuch();
  response.send(tagebuch);
}

//-------------Einträge!!!--------------

app.post("/create", createEinträge);
app.post("/eintrage", postEinträgeID);


class Eintrag {
  id: number;
  text: string;
  tagebuch_id: number;

  constructor(data: any) {
    this.id = data.id;
    this.text = data.text;
    this.tagebuch_id = data.tagebuch_id
  }
}

async function getAllEinträgeID(tagebuch_id): Promise<Array<Eintrag>> {
  const res = await pgClient.query(`SELECT * FROM eintrag WHERE tagebuch_id = ${tagebuch_id}`);
  return res.rows.map(g => new Eintrag(g))
}


function createEinträge(request, response) {
  const eintrag = new Eintrag(request.body);
  console.log(eintrag);

  const queryString =
    'INSERT INTO eintrag ( text , tagebuch_id ) VALUES ($1, $2)';
  pgClient.query(
    queryString,
    [eintrag.text, eintrag.tagebuch_id],
    (err, results) => {
      if (err) {
        response.status(400).send(err.stack);
      }
      response.status(201).send(eintrag);
    }
  );
}

async function postEinträgeID(request, response) {
  const tagebuch_id = request.body.tagebuch_id
  const tagebuch = await getAllEinträgeID(tagebuch_id);
  response.send(tagebuch);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
