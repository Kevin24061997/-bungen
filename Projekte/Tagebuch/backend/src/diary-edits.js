// Importing required modules and setting up app and database client
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Client } = require('pg');
const pgClient = new Client({
    user: "postgres",
    database: "Benutzer",
    password: "TPKD369W",
    port: 3333,
    host: "localhost",
});

// Connecting to the database
pgClient.connect();

// Using bodyParser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handling PUT requests to update diary entries
app.put('/diary/:id', (req, res) => {
    // Extracting diary ID and updated title/text from the request body
    const diaryId = req.params.id;
    const { newTitle, newText } = req.body;

    // Retrieving the diary entry from the database using the ID
    const diaryEntry = retrieveDiaryEntry(diaryId);

    // If diary entry not found, send a 404 response and exit
    if (!diaryEntry) {
        res.status(404).send('Diary entry not found');
        return;
    }

    // Update the title and text of the diary entry
    diaryEntry.title = newTitle;
    diaryEntry.text = newText;

    // Save the updated diary entry to the database
    saveDiaryEntry(diaryEntry, (err) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send('Error saving diary entry');
            return;
        }

        // Send a success response if the update was successful
        res.status(200).send('Diary entry updated successfully');
    });
});

// Function to retrieve a diary entry from the database given its ID
function retrieveDiaryEntry(diaryId, callback) {
    const query = {
        text: 'SELECT * FROM diary_entries WHERE id = $1',
        values: [diaryId]
    };

    pgClient.query(query, (err, res) => {
        if (err) {
            console.error(err.stack);
            callback(err, null);
            return;
        }

        // If no diary entry is found, return null
        if (res.rows.length === 0) {
            callback(null, null);
            return;
        }

        // Return the first diary entry found (there should only be one)
        const diaryEntry = res.rows[0];
        callback(null, diaryEntry);
    });
}

// Function to save an updated diary entry to the database
function saveDiaryEntry(diaryEntry, callback) {
    const query = {
        text: 'UPDATE diary_entries SET title = $1, text = $2 WHERE id = $3',
        values: [diaryEntry.title, diaryEntry.text, diaryEntry.id]
    };

    pgClient.query(query, (err, res) => {
        if (err) {
            console.error(err.stack);
            callback(err);
            return;
        }

        // Log a message to indicate that the diary entry was updated
        console.log(`Diary entry ${diaryEntry.id} updated in database`);

        // Call the callback function to indicate that the update was successful
        callback(null);
    });
}

// Starting the server
app.listen(3000, () => console.log('Server listening on port 3000'));
