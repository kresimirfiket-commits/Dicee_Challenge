function tossDice() {
    var random_1 = Math.ceil(Math.random() * 6);
    var random_2 = Math.ceil(Math.random() * 6);
    var path_1 = "./images/dice" + random_1 + ".png";
    var path_2 = "./images/dice" + random_2 + ".png";
    document.getElementById("dice-1").setAttribute("src", path_1);
    document.getElementById("dice-2").setAttribute("src", path_2);
    if (random_1 > random_2) {
        document.getElementById("head-1").innerText = "Player 1 Wins!";
        document.getElementById("flag-1").setAttribute("class", "visible");
        document.getElementById("flag-2").setAttribute("class", "non-visible");
    } else if (random_1 < random_2) {
        document.getElementById("head-1").innerText = "Player 2 Wins!";
        document.getElementById("flag-1").setAttribute("class", "non-visible");
        document.getElementById("flag-2").setAttribute("class", "visible");
    } else {
        document.getElementById("head-1").innerText = "Draw!";
        document.getElementById("flag-1").setAttribute("class", "visible");
        document.getElementById("flag-2").setAttribute("class", "visible");
    }
}