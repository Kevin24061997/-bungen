// Importing the necessary modules and dependencies
import express, { Request, Response } from "express";
import { Pool } from "pg";

// Creating an instance of the express application and a connection pool to the PostgreSQL database
const app = express();
const pgClient = new Pool();

// Setting up a DELETE route for the "/Benutzer" endpoint and associating it with the deleteAccount function
app.delete("/Benutzer", deleteAccount);

// An asynchronous function that handles the DELETE request to the "/Benutzer" endpoint
async function deleteAccount(request: Request, response: Response) {
    try {
        // Extracting the email and password from the request body
        const { email, password } = request.body;
        // Defining the SQL query string to delete a user from the "benutzer" table where the email and password match
        const queryString = "DELETE FROM benutzer WHERE email = $1 AND password = $2";
        // Sending the query to the database with the email and password as parameters and waiting for the result
        const result = await pgClient.query(queryString, [email, password]);

        // If at least one row is affected by the query, sending a 200 response with a success message
        if (result.rowCount > 0) {
            response.status(200).send("User deleted successfully");
        } else {
            // If no rows are affected by the query, sending a 400 response with an invalid email or password message
            response.status(400).send("Invalid email or password");
        }
    } catch (err) {
        // If there is an error, sending a 400 response with the error stack trace
        response.status(400).send(err.stack);
    }
}
