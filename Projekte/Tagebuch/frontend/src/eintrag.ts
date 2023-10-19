class Eintrag {
  id: number;
  text: string;
  tagebuch_id: number;

  constructor(data: any) {
    this.id = data.id;
    this.text = data.text;
    this.tagebuch_id = this.tagebuch_id;
  }
}

function renderCard(eintrag: Eintrag) {
  return `
  <div class="container">
            <div class="card">
              <div class="container">
                <div class="row">
                  <div class="col-4" id="user_id"></div>
                  <div class="col-4" id="user_mail"></div>
                  <div class="col-4"></div>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text" id="glitt_message">${eintrag.text}</p>
              </div>
            </div>
        </div>
  `;
}

function displayEinträge(eintrags: Eintrag[]) {
  eintrags
    .map((eintrag) => renderCard(eintrag))
    .reverse()
    .forEach(
      (eintrag) =>
        (document.getElementById("card-container")!.innerHTML += eintrag)
    );
}

function saveEintrag() {
  const eintragText = (
    document.getElementById("inputt_text") as HTMLInputElement
  ).value;
  postCreateEintrags(eintragText);
  location.reload();
}

async function postCreateEintrags(eintragText: string) {
  const tagebuch_id = sessionStorage.getItem("currentTagebuch");
  console.log(tagebuch_id);

  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tagebuch_id: tagebuch_id,
      text: eintragText,
    }),
  };
  const res = await fetch("http://localhost:4000/create", fetchConfig);
  if (res.status === 200 || res.status === 201) {
  }
}

async function postEintrageFromBackend() {
  const tagebuch_id = sessionStorage.getItem("currentTagebuch");
  console.log(tagebuch_id);

  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tagebuch_id: tagebuch_id,
    }),
  };
  const res = await fetch("http://localhost:4000/eintrage", fetchConfig);
  if (res.status === 200 || res.status === 201) {
    const json = await res.json();
    const eintrags = json.map((eintrag) => new Eintrag(eintrag));
    displayEinträge(eintrags);
  }
}

postEintrageFromBackend();
