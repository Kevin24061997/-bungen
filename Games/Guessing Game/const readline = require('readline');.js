const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const HELP_TEXT_GUESS_TO_HIGH = "Your guess is to high ⛰️.";
const HELP_TEXT_GUESS_TO_LOW = "Your guess is to low. ⬇️";
const HELP_TEXT_WIN = "🎉 🎉 🎉 You Win! 🎉 🎉 🎉";
const HELP_TEXT_INTRO_1 = `
-----------------------------------------------------------------
🎉 Hi 🎉 and welcome to the Guessing Game 🎉

This is the 🎮 game 🎮 where YOU can check, 
if you have magical abilities 🪄 or just a cloudy glass ball 🔮.

I will create a secret number and YOU have to guess it.

`;
const HELP_TEXT_INTRO_2 = `

Let's play! ✨
--------------

`;

let highscore_list = [];
let continue_playing = true;

class User {
  constructor(name) {
    this.name = name;
    this.highscore = 0;
  }
  
  set_highscore(highscore) {
    if (!this.highscore || highscore < this.highscore) {
      this.highscore = highscore;
    }
  }
}

function get_input(text) {
  return new Promise((resolve) => {
    rl.question(text, (answer) => {
      resolve(answer);
    });
  });
}

async function save_new_highscore(count_guesses, user) {
  let new_highscore = {"name": user.name, "count_guesses": count_guesses, "time": new Date()};
  highscore_list.push(new_highscore);
}

async function will_replay() {
  let restart_game = await get_input("Play again? (y/n): ");
  if (restart_game === "y") {
    return true;
  } else { 
    return false;
  }
}

async function write_highscore_to_file(highscore) {
  let fs = require('fs');
  fs.writeFile("score.txt", highscore, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

async function read_score_from_file() {
  let fs = require('fs');
  return new Promise((resolve) => {
    fs.readFile("score.txt", (err, data) => {
      if (err) {
        return console.log(err);
      }
      resolve(data.toString());
    });
  });
}

async function display_welcome_message() {
  let last_score = await read_score_from_file();
  console.log(HELP_TEXT_INTRO_1);
  console.log(`The last score was: ${last_score}.`);
  console.log(HELP_TEXT_INTRO_2);
}

async function play(user) {
  const SECRET_NUMBER = Math.floor(Math.random() * 30) + 1;
  let count_tries = 0;
  console.log("\nA new round: The secret number is set! Guess now and good luck!");
  
  while (true) {
    let users_guess = parseInt(await get_input("Please enter your guess: "));
    count_tries += 1;

    if (isNaN(users_guess)) {
      console.log("Sorry, this is not a number. Please try it again.");
      continue;
    } else if (users_guess === SECRET_NUMBER) {
      console.log(HELP_TEXT_WIN, `(Count of tries: ${count_tries})`);
      await save_new_highscore(count_tries, user);
      await write_highscore_to_file(count_tries);
      user.set_highscore(count_tries);
      break;
    } else if (users_guess < SECRET_NUMBER) {
      console.log(HELP_TEXT_GUESS_TO_LOW);
    } else if (users_guess > SECRET_NUMBER) {
      console.log(HELP_TEXT_GUESS_TO_HIGH);
    }
  }
}

display_welcome_message().then(() => {
  let user = new User("Player");
  play(user);
});

