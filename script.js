let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true; //player X player O;
let count = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enabledBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      //player O
      box.innerText = turnO ? "O" : "X";
      box.style.color = turnO ? "red" : "blue";
      turnO = !turnO;
      count++;
      checkWinner();
      box.disabled = true;
    }
  });
});

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
const checkWinner = () => {
  for (const pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
        return;
      }
    }
  }
  if (count === 9) {
    msg.innerText = "No winner its Draw";
    msgContainer.classList.remove("hide");
  }
};
const disabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
