import unittest
import main 

from unittest import TestCase
from unittest.mock import patch


# Unittest Class
class GuessingGameTest(TestCase):
    @patch("main.get_input", return_value="y")
    def test_will_replay_is_true(self, return_value):
        will_user_replay = main.will_replay()
        self.assertEqual(True, will_user_replay)

    @patch("main.get_input", return_value="n")
    def test_will_replay_is_false(self, return_value):
        will_user_replay = main.will_replay()
        self.assertEqual(False, will_user_replay)

    @patch("main.get_input", return_value="brokkoli")
    def test_will_replay_is_false_brokolli(self, return_value):
        will_user_replay = main.will_replay()
        self.assertEqual(False, will_user_replay)


class UserTest(TestCase):
    def test_set_highscore_saves_only_highscore(self):
        """
        Dieser Test soll feststellen, dass die Methode der Klasse User
        nur den besseren Highscore speichert. 
        """
        user = main.User()

        user.set_highscore(10)
        self.assertEqual(user.highscore, 10)

        user.set_highscore(8)
        self.assertEqual(user.highscore, 8)

        user.set_highscore(10)
        self.assertEqual(user.highscore, 8)


if __name__ == "__main__":
    unittest.main()