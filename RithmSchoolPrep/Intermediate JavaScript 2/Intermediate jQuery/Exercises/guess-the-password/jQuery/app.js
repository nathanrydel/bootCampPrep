$(function () {
  const wordCount = 10;
  let guessCount = 4;
  let password = "";

  let $start = $("#start");
  $start.on("click", () => {
    $("#start-screen").toggleClass("hide show");
    $("#game-screen").toggleClass("hide show");
    startGame();
  });

  function startGame() {
    let $wordList = $("#word-list");
    let randomWords = getRandomValues(words, wordCount);
    randomWords.forEach((word) => {
      let $li = $("<li>", { text: word });
      $wordList.append($li);
    });

    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    $wordList.on("click", "li", updateGame);
  }

  function updateGame(evt) {
    const $target = $(evt.target);
    const $wordList = $("#word-list");

    if (!$target.hasClass("disabled")) {
      let guess = $target.text();
      let similarityScore = compareWords(guess, password);
      $target.addClass("disabled");
      $target.text((i, oldText) => {
        return `${oldText} --> Matching Letters: ${similarityScore}`;
      });
      setGuessCount(guessCount - 1);

      if (similarityScore === password.length) {
        $("#winner").toggleClass("hide show");
        $wordList.off();
      } else if (guessCount === 0) {
        $("#loser").toggleClass("hide show");
        $wordList.off();
      }
    }
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    $("#guesses-remaining").text(`Guesses remaining: ${guessCount}.`);
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) throw "Words must have the same length";
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  }

  function shuffle(array) {
    const arrayCopy = array.slice();
    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      let idx2 = Math.floor(Math.random() * (idx1 + 1));

      [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
    }
    return arrayCopy;
  }

  function getRandomValues(array, numberOfVals) {
    return shuffle(array).slice(0, numberOfVals);
  }
});