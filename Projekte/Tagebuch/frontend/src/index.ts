class Tagebuch {
  id: number;
  text: string;

  constructor(data: any) {
    this.id = data.id;
    this.text = data.text;
  }
}

function renderCard(tagebuch: Tagebuch, degree: number, distance: number) {
  return `
      <div class="sliderGeral-card" style="--rotatey:${degree}deg; --tz:${distance}px">
        <h1 onclick="saveIDToStorage(${tagebuch.id})">${tagebuch.text}</h1>
      </div>
    `;
}

function saveIDToStorage (id: number) {
  sessionStorage.setItem("currentTagebuch" , id.toString())
  window.location.href = "/eintrag.html"
}


//Tagebuchs made by kevin
function displayEintrag(tagebuchs: Tagebuch[]) {
  const cardContainer = document.getElementById("card-container")!;
  const step = 360 / tagebuchs.length;
  const distance = 40 * tagebuchs.length;
  for (let i = 0; i < tagebuchs.length; i++) {
    cardContainer.innerHTML += renderCard(tagebuchs[i], i * step, distance);
  }
}

function saveTagebuch() {
  var diaryName = prompt("Geben Sie den Namen des Tagebuchs ein:");
  if(diaryName) postEintragsByTagebuchId(diaryName);
  location.reload();
}

async function postEintragsByTagebuchId(tagebuchText: string) {
  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: tagebuchText,
      datetime: new Date(),
    }),
  };

  const res = await fetch("http://localhost:4000/tagebuch", fetchConfig);
  if (res.status === 200 || res.status === 201) {
  }
}

async function getTagebuchFromBackend() {
  const res = await fetch("http://localhost:4000/tagebuch");
  const json = await res.json();
  const tagebuch = json.map((tagebuch) => new Tagebuch(tagebuch));
  console.log(tagebuch);
  displayEintrag(tagebuch);
}

getTagebuchFromBackend();
