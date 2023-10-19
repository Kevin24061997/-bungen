# Guessing Game
#
# In diesem Spiel gibt es eine Geheime Zahl. Der Spieler muss diese Zahl in mehreren Schritten 
# erraten. Um dem Ziel näher zu kommen, wird dem Spieler der Hinweis gegeben, ob sein Tip zu hoch
# oder zu niedrig war. Wenn der Spieler die geheime Zahl erraten hat, wird der Spieler gebührend gefeiert. 
import random

from datetime import datetime
from helper import ensure_integer


# Constants
HELP_TEXT_GUESS_TO_HIGH = "Your guess is to high ⛰️."
HELP_TEXT_GUESS_TO_LOW = "Your guess is to low. ⬇️"
HELP_TEXT_WIN = "🎉 🎉 🎉 You Win! 🎉 🎉 🎉"
HELP_TEXT_INTRO_1 = """
-----------------------------------------------------------------
🎉 Hi 🎉 and welcome to the Guessing Game 🎉

This is the 🎮 game 🎮 where YOU can check, 
if you have magical abilities 🪄 or just a cloudy glass ball 🔮.

I will create a secret number and YOU have to guess it.

"""
HELP_TEXT_INTRO_2 = """

Let's play! ✨
--------------

"""

# Variablen
highscore_list = []
continue_playing = True

# Classes
class User:
    name: str
    highscore: int = 0

    def set_highscore(self, highscore):
        if not self.highscore or highscore < self.highscore:
            self.highscore = highscore


# Functions
def get_input(text):
    return input(text)


def save_new_highscore(count_guesses: int, user: User):
    """"
    Saves a new highscore into our highscore list. 
    """
    new_highscore = {"name": user.name, "count_guesses": count_guesses, "time": datetime.now()}
    highscore_list.append(new_highscore)


def will_replay():
    """
    This function asks the user whether he/she wants to play again.
    """
    restart_game = get_input("Play again? (y/n): ")
    if restart_game == "y":
        return True
    else: 
        return False


def write_highscore_to_file(highscore):
    score_file = open("score.txt", "w+")
    score_file.write(str(highscore))
    score_file.close()


def read_score_from_file():
    """"
    Read the score from the score file and return in as string.
    """
    score_file = open("score.txt", "r+")
    score = score_file.read()
    score_file.close()
    return score


def display_welcome_message():
    """"
    Displays a nice welcome message to our user. 
    """
    last_score = read_score_from_file()
    print(HELP_TEXT_INTRO_1)
    print(f"The last score was: {last_score}.")
    print(HELP_TEXT_INTRO_2)


def play(user: User):
    """"
    Play the game!
    """
    SECRET_NUMBER = random.randint(1, 30)
    count_tries = 0
    print("\nA new round: The secret number is set! Guess now and good luck!")
    
    while True:
        users_guess = ensure_integer(input("Please enter your guess: "))
        count_tries += 1

        if not users_guess:
            # Case: Users Input is not valid. 
            print("Sorry, this is not a number. Please try it again.")
            continue
        elif users_guess == SECRET_NUMBER:
            # Case: User has hit the number.
            print(HELP_TEXT_WIN, f"(Count of tries: {count_tries})")
            save_new_highscore(count_tries, user)
            write_highscore_to_file(count_tries)
            user.set_highscore(count_tries)
            break
        elif users_guess < SECRET_NUMBER:
            print(HELP_TEXT_GUESS_TO_LOW)
        elif users_guess > SECRET_NUMBER:
            print(HELP_TEXT_GUESS_TO_HIGH)


# ########################################
# # # Main
# ########################################
if __name__ == "__main__": 
    display_welcome_message()

    user = User()
    user.name = input("Please enter your name: ")

    while continue_playing:
        play(user)    

        if not will_replay():
            break

    print("===================================================")
    print(f"Deine beste Runde waren {user.highscore} Versuche.")

    # GitHub Test AWS-22.10