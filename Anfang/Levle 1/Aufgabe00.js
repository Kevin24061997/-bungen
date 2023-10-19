const users = [
    {
      _id: "63d8ed9c4cb18f6224c5f60c",
      guid: "7d522ac2-62de-42ac-8715-47235ab59926",
      isActive: true,
      balance: "$2,895.84",
      picture: "http://placehold.it/32x32",
      age: 37,
      eyeColor: "brown",
      name: "Virgie Dyer",
      gender: "female",
      company: "BOSTONIC",
      email: "virgiedyer@bostonic.com",
      tags: ["sit", "nulla", "cillum", "nisi", "sit", "exercitation", "dolor"],
      friends: [
        {
          id: 0,
          name: "Brewer Bradford",
        },
        {
          id: 1,
          name: "Diana Potts",
        },
        {
          id: 2,
          name: "Dejesus Vang",
        },
      ],
    },
    {
      _id: "63d8ed9c982936dcc3cc7c19",
      guid: "a56fe098-d0ec-47c3-92f4-678ba5876d54",
      isActive: true,
      balance: "$3,907.70",
      picture: "http://placehold.it/32x32",
      age: 38,
      eyeColor: "brown",
      name: "Willa Best",
      gender: "female",
      company: "TELEQUIET",
      email: "willabest@telequiet.com",
      tags: ["ad", "Lorem", "enim", "officia", "voluptate", "elit", "cupidatat"],
      friends: [
        {
          id: 0,
          name: "Riggs Vargas",
        },
        {
          id: 1,
          name: "Farrell Gentry",
        },
        {
          id: 2,
          name: "Jacobson Clarke",
        },
      ],
    },
    {
      _id: "63d8ed9ce2a5d4a25df826de",
      guid: "1c31a2da-78d3-47de-ba74-6e33ab2b1292",
      isActive: false,
      balance: "$3,123.83",
      picture: "http://placehold.it/32x32",
      age: 27,
      eyeColor: "brown",
      name: "Fisher Campos",
      gender: "male",
      company: "PUSHCART",
      email: "fishercampos@pushcart.com",
      tags: ["labore", "cillum", "commodo", "magna", "non", "voluptate", "enim"],
      friends: [
        {
          id: 0,
          name: "Horton Trevino",
        },
        {
          id: 1,
          name: "Vega Crosby",
        },
        {
          id: 2,
          name: "Nona Strong",
        },
      ],
    },
    {
      _id: "63d8ed9c6730f0ab8497aa7c",
      guid: "db2997f3-66da-4a97-8b39-862abd956ad2",
      isActive: false,
      balance: "$3,983.99",
      picture: "http://placehold.it/32x32",
      age: 37,
      eyeColor: "green",
      name: "Melba Russo",
      gender: "female",
      company: "HATOLOGY",
      email: "melbarusso@hatology.com",
      tags: [
        "reprehenderit",
        "sint",
        "irure",
        "nisi",
        "quis",
        "adipisicing",
        "cillum",
      ],
      friends: [
        {
          id: 0,
          name: "Suarez Terry",
        },
        {
          id: 1,
          name: "Hubbard Allison",
        },
        {
          id: 2,
          name: "Marci Moran",
        },
      ],
    },
    {
      _id: "63d8ed9c7ced13ebb83b9cb2",
      guid: "791c6810-097a-434e-94f1-91ffe115f286",
      isActive: false,
      balance: "$2,335.12",
      picture: "http://placehold.it/32x32",
      age: 34,
      eyeColor: "green",
      name: "Earlene Buchanan",
      gender: "female",
      company: "COASH",
      email: "earlenebuchanan@coash.com",
      tags: ["laborum", "esse", "sunt", "duis", "aute", "occaecat", "culpa"],
      friends: [
        {
          id: 0,
          name: "Rivera Ingram",
        },
        {
          id: 1,
          name: "Gutierrez Carey",
        },
        {
          id: 2,
          name: "Susie Dillard",
        },
      ],
    },
    {
      _id: "63d8ed9c8ffef43c4d7f0147",
      guid: "9fd855fa-7923-4bb8-a765-a31c7f77ab36",
      isActive: false,
      balance: "$3,069.37",
      picture: "http://placehold.it/32x32",
      age: 35,
      eyeColor: "brown",
      name: "Meadows Freeman",
      gender: "male",
      company: "SEALOUD",
      email: "meadowsfreeman@sealoud.com",
      tags: [
        "commodo",
        "nostrud",
        "incididunt",
        "tempor",
        "qui",
        "adipisicing",
        "velit",
      ],
      friends: [
        {
          id: 0,
          name: "Lara Pace",
        },
        {
          id: 1,
          name: "Lessie Clay",
        },
        {
          id: 2,
          name: "Cash Mays",
        },
      ],
    },
  ];
  
  
  /**
   * Aufgaben:
   * 
    1. Die user haben ein Datenfeld namens "balance", in dem $ drin stehen. Rechne den Wert in Euro um und ersetze den Wert. 
    2. Filter durch die User und zeige nur die an, die jünger sind als 30. 
    3. Errechne das Durchschnittsalter. 
    4. Errechne den Durchschnitt des Wertes "balance". 
    5. Filtere die Personen raus, die Älter sind als 18 UND die männlich sind. 
    6. Filtere die Personen raus, die mit "Lara Pace" befreundet sind. 
   */


// Aufgabe 1:

const userswitheuro = users.map(usser => {

  return {
    ...users,
    balance: Math.round(parseFloat(user.balance.substring(1).replace (",", "")) * 92) /
    100,
  };
});



// Aufgabe 2:

// const over18 = users.filter(users => users.age <= 30);
// console.log(over18);

// Aufgabe 3:
// const averageAge = users.reduce((acc, user) => acc + user.age, 0) / users.length;
// console.log(averageAge);

// Aufgabe:4
const avgbalance = userswitheuro.reduce((acc, user) => acc +  user.balance, 0) / userswitheuro.length

// Aufgabe:5

// const filteredData = users.filter(person => person.age > 18 && person.gender === "male");

// console.log(filteredData);


// Aufgabe 6

// const filteredFriends = users.filter(user => user.friends.find(friend => friend.name === "Lara Pace"));
// console.log(filteredFriends);