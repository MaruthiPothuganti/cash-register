const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const buttonReturn = document.querySelector("#btn-change");
const message = document.querySelector("#errorMessage");
const notes = document.querySelector(".returnNotes");

var notesAvailable = [2000, 500, 100, 50, 20, 10, 5, 1];

buttonReturn.addEventListener("click", function amountValidation() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if (billAmount.value === cashGiven.value) {
            showMessage("Well, its Settled👍, NO change to be returned.");
        } else if (billAmount.value < cashGiven.value) {
            changeAmount = cashGiven.value - billAmount.value;
            calculateReturnChange(changeAmount);
        } else {
            showMessage("The Given Amount of Cash isn't Sufficient Bruh🙂");
        }
    } else {
        showMessage("Invalid Amount");
    }
});

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateReturnChange(changeAmount) {
    for (var i = 0; i < notesAvailable.length; i++) {
        var returnNotes = Math.trunc(changeAmount / notesAvailable[i]);
        changeAmount = changeAmount % notesAvailable[i];
        notes[i].innerText = returnNotes;

    }
}