

function saveUsers() {
    const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
    const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    postUserToBackend(firstname, lastname, username, email, password);
}

function vergleichUser() {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    postVergleichToBackend( email,password)
}

async function postVergleichToBackend( email: string, password: string) {
    const fetchConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    };

    const res = await fetch("http://localhost:4000/login", fetchConfig);
    if (res.ok) {
        const data = await res.json();
        const jwt = data.token; // Extrahieren des JWT aus der Server-Antwort
        // Speichern des JWT z.B. in einem SessionStorage
        console.log(data)
        sessionStorage.setItem("jwt", jwt);
        window.location.href = "Index.html";
    }
}


async function postUserToBackend(firstname: string, lastname: string, username: string, email: string, password: string) {
    const fetchConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
        })
    };

    const res = await fetch("http://localhost:4000/Benutzer", fetchConfig);
    if (res.status === 200 || res.status === 201) {
        window.location.href = "login.html";
    }
}

