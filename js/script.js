function LotteryCard(index, isWinning) {
  this.index = index;
  this.isWinning = isWinning;
  this.handleTry = function (attempt, square, squareContainer) {
    if (this.isWinning) {
      alert("Win!");
      square.classList.add("square-correct");
    } else {
      if (attempt === 3) {
        alert("Sorry, it was your last turn");
        squareContainer.innerHTML = null;
        return;
      }
      alert("Try again");
      square.classList.add("square-wrong");
    }
  };
}

const cards = [
  new LotteryCard(3, false),
  new LotteryCard(6, false),
  new LotteryCard(4, true),
  new LotteryCard(9, false),
  new LotteryCard(1, false),
  new LotteryCard(5, false),
  new LotteryCard(7, false),
  new LotteryCard(2, false),
  new LotteryCard(8, false),
];

function renderSquares(squares) {
  let attempt = 0;
  const squareContainer = document.querySelector(".squares-container");
  squares.forEach((item) => {
    const square = document.createElement("div");
    const squareIndex = document.createElement("h3");
    squareIndex.innerHTML = item.index;
    square.appendChild(squareIndex);
    square.classList.add("square");
    square.addEventListener("click", () =>
      item.handleTry(++attempt, square, squareContainer)
    );
    squareContainer.appendChild(square);
  });
}

renderSquares(cards);
