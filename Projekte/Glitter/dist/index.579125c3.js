/**
 * 1. ✅ Daten vom Backend holen.
 * 2. ✅ Daten verarbeiten / aufbereiten.
 * 3. ✅ Card erzeugen.
 * 4. ✅ Card anzeigen.
 *
 */ class Glitt {
    id;
    user;
    text;
    datetime;
    constructor(data){
        this.id = data.id;
        this.user = data.user;
        this.text = data.text;
        this.datetime = new Date(data.datetime).toLocaleDateString() + " " + new Date(data.datetime).toLocaleTimeString();
    }
}
function renderCard(glitt) {
    return `
    <div class="container">
      <div class="card">
        <div class="card-header">
          <div class="container">
            <div class="row">
              <div class="col-4" id="user_id"></div>
              <div class="col-4" id="user_mail"></div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class=""card-title id="glitt_title">${glitt.user}</h5>
          <p class="card-text" id="glitt_message">${glitt.text}</p>
        </div>
        <div class="card-footer">
            <div class="container">
              <div class="row">
                <div class="col"><i class="fa-light fa-comment"></i></div>
                <div class="col"><i class="fa-solid fa-retweet"></i></div>
                <div class="col"><i class="fa-light fa-heart"></i></div>
                <div class="col"><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  `;
}
function displayGlitts(glitts) {
    glitts.map((glitt)=>renderCard(glitt)).forEach((glitt)=>document.getElementById("card-container").innerHTML += glitt);
}
/**
 * Handles the onClick event of the save button when creating a new Glitt.
 *
 */ function saveGlitt() {
    console.log("Save Glitt clicked");
    const glittText = document.getElementById("inputt_text").value;
    const glittName = document.getElementById("inputt_name").value;
    postGlittToBackend(glittName, glittText);
}
/**
 * This function fetches the data from the backend.
 *
 */ function getGlittsFromBackend() {
    fetch("http://localhost:4000/glitts").then((res)=>res.json()).then((json)=>{
        const glitts = json.map((glitt)=>new Glitt(glitt));
        displayGlitts(glitts);
    }).catch((err)=>{
        console.log(err);
    });
}
function postGlittToBackend(glittName, glittText) {
    console.log("Prepare to post new glitt");
    const fetchConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: glittText,
            user: glittName,
            datetime: new Date()
        })
    };
    fetch("http://localhost:4000/glitts", fetchConfig).then((res)=>{
        res.status === 200 || res.status;
    });
}
/// MAIN
getGlittsFromBackend();

//# sourceMappingURL=index.579125c3.js.map
