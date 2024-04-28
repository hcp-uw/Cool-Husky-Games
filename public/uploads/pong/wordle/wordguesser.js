const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".col");
const loadingDiv = document.querySelector(".info-bar");

async function init() {
  let currGuess = "";
  let currRow = 0;
  let done = false;
  let isLoading = true;
  const res = await fetch(
    "https://words.dev-apis.com/word-of-the-day?random=1"
  );
  const resObj = await res.json();
  const word = resObj.word.toUpperCase();
  const wordParts = word.split("");
  isLoading = false;
  setLoading(isLoading);

  function addLetter(letter) {
    if (currGuess.length < ANSWER_LENGTH) {
      // Add letter to the end
      currGuess += letter;
    } else {
      // Replace the last letter
      currGuess = currGuess.substring(0, currGuess.length - 1) + letter;
    }
    letters[ANSWER_LENGTH * currRow + currGuess.length - 1].innerText = letter;
  }
  document.addEventListener("keydown", (event) => {
    if (done || isLoading) {
      return;
    }
    const action = event.key;
    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      // Ignore
    }
  });

  async function commit() {
    if (currGuess.length !== ANSWER_LENGTH) {
      // Do nothing
      return;
    } else {
      // Check whether word is valid
      isLoading = true;
      setLoading(isLoading);
      const res = await fetch("https://words.dev-apis.com/validate-word", {
        method: "POST",
        body: JSON.stringify({ word: currGuess }),
      });
      const resObj = await res.json();
      const validWord = resObj.validWord;
      isLoading = false;
      setLoading(isLoading);
      if (!validWord) {
        markInvalidWord();
        return;
      }

      // Mark as correct, close or wrong
      const guessParts = currGuess.split("");
      const map = makeMap(wordParts);
      let allRight = true;
      for (let i = 0; i < ANSWER_LENGTH; i++) {
        if (guessParts[i] === wordParts[i]) {
          letters[currRow * ANSWER_LENGTH + i].classList.add("correct");
          map[guessParts[i]]--;
        }
      }

      for (let i = 0; i < ANSWER_LENGTH; i++) {
        if (guessParts[i] === wordParts[i]) {
          // Do nothing
        } else if (map[guessParts[i]] && map[guessParts[i]] > 0) {
          allRight = false;
          letters[currRow * ANSWER_LENGTH + i].classList.add("close");
          map[guessParts[i]]--;
        } else {
          allRight = false;
          letters[currRow * ANSWER_LENGTH + i].classList.add("wrong");
        }
      }

      // Check whether player wins
      currRow++;
      currGuess = "";
      if (allRight) {
        document.querySelector(".brand").classList.add("winner");
        alert("YOU WIN!!!");
        done = true;
      } else if (currRow === ROUNDS) {
        alert(`You lose :(((, the word was ${word}`);
        done = true;
      }
    }
  }

  function markInvalidWord() {
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currRow * ANSWER_LENGTH + i].classList.remove("invalid");

      setTimeout(() => {
        letters[currRow * ANSWER_LENGTH + i].classList.add("invalid");
      }, 10);
    }
  }

  function backspace() {
    currGuess = currGuess.substring(0, currGuess.length - 1);
    letters[ANSWER_LENGTH * currRow + currGuess.length].innerText = "";
  }
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}
init();
