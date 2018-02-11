var txt, assertedNumber,
    playTheGame = true,
    guessed = false,
    max = 5,
    attemptsLeft = 3,
    prize = 0,
    maxPrize = 10,
    currentPrize = 10,
    n;

while (playTheGame) {
    if (!confirm("Do you want to play a game?")) {
        break;
    }

    assertedNumber = Math.floor(Math.random() * Math.floor(max));
    console.log(assertedNumber, max);

    while (attemptsLeft) {
        n = prompt("Enter a number between 0 and " + max + " \nAttempts left: " + attemptsLeft +
            "\nTotal prize: " + prize + "$" +
            "\nPossible prize on current attempt: " + currentPrize + "$");

        n = parseInt(n);

        if (n == assertedNumber) {
            prize = prize + currentPrize;

            guessed = true;
            playTheGame = confirm("Do you want to continue the game?");

            console.log("playthegame", playTheGame);

            if (playTheGame) {
                attemptsLeft = 3;
                max = max * 2;
                maxPrize = maxPrize * 3;
                currentPrize = maxPrize;
                assertedNumber = Math.floor(Math.random() * Math.floor(max));
                console.log(assertedNumber, max);

                continue;
            } else {
                console.log('Thank you for a game. Your prize is: ' + prize + '$');
                break;
            }
        } else {
            currentPrize = Math.floor(currentPrize / 2);
            attemptsLeft = attemptsLeft - 1;
        }
    }

    if (!guessed) {
        console.log('Thank you for a game. Your prize is:' + prize);
    }

    if (!confirm("Do you want to play again?")) {
        break;
    }

    attemptsLeft = 3;
    max = 5;
    maxPrize = 10;
    currentPrize = 10;
    prize = 0;
}

console.log("You did not become a millionaire!");
