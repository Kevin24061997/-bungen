// This function is called when the user clicks the delete account button in the UI
function deleteUser() {
    // Extracts the email and password from the HTML input fields
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    // Calls the deleteAccountFromBackend function to make a DELETE request to the server
    deleteAccountFromBackend(email, password);
}

// This function makes a DELETE request to the server with the email and password as parameters
async function deleteAccountFromBackend(email: string, password: string) {
    // Sets up the fetch configuration object with the method, headers and body parameters
    const fetchConfig = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("jwt"), // adds an Authorization header with a JWT token obtained from session storage
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    };

    // Makes the DELETE request to the server and waits for the response
    const res = await fetch("http://localhost:4000/Benutzer", fetchConfig);
    // If the response status is 200, logs a success message to the console and removes the JWT token from session storage, then redirects the user to the login page
    if (res.status === 200) {
        console.log("User deleted successfully");
        sessionStorage.removeItem("jwt");
        window.location.href = "Login.html";
    } else {
        // If the response status is not 200, logs the response text to the console
        const data = await res.text();
        console.log(data);
    }
}