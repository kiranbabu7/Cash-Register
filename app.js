const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMsg = document.querySelector(".error-msg");
const checkBtn = document.querySelector("#check-btn");
const noOfNotes = document.querySelectorAll(".notes");
const notes = [2000, 500, 100, 50, 20, 10, 5, 1];
checkBtn.addEventListener("click", function () {
  errorMsg.style.display = "none";
  if (billAmount.value > 0) {
    if (Number(billAmount.value) <= Number(cashGiven.value)) {
      const returnMoney = cashGiven.value - billAmount.value;
      calculateChange(returnMoney);
    } else {
      showErrorMsg("Bill Amount should be atleast equal to Cash given.");
      noOfNotes.forEach((note) => {
        note.innerText = 0;
      });
    }
  } else {
    showErrorMsg("Bill Amount should be greater than 0");
  }
});

function showErrorMsg(msg) {
  errorMsg.style.display = "block";
  errorMsg.innerText = msg;
}
function calculateChange(returnMoney) {
  notes.forEach((note) => {
    let numberOfNotes = Math.trunc(returnMoney / note);
    returnMoney %= note;
    noOfNotes[notes.indexOf(note)].innerText = numberOfNotes;
  });
}
