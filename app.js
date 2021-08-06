const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const buttonReturn = document.querySelector("#btn-change");
const message = document.querySelector("#errorMessage");
const notes = document.querySelectorAll(".returnNotes");


var notesAvailable = [2000, 500, 100, 50, 20, 10, 5, 1];

buttonReturn.addEventListener("click", function amountValidation() {
    message.style.display = "none";
    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) > Number(billAmount.value) || Number(cashGiven.value) === Number(billAmount.value)) {
            var changeAmount = cashGiven.value - billAmount.value;
            calculateReturnChange(changeAmount);
            message.innerText = "The amount to be returned as change is ₹" + changeAmount;
            message.style.display = "block";
        }
        if (cashGiven.value < billAmount.value) {
            showMessage("Given Money isnt Sufficient");
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
        const returnNotes = Math.trunc(changeAmount / notesAvailable[i]);
        changeAmount = changeAmount % notesAvailable[i];
        notes[i].innerText = returnNotes;

    }
}

function enableDisable() {

    if (billAmount.value.trim() != "") {
        document.getElementById("cash-given").removeAttribute("hidden");
    } else {
        document.getElementById("cash-given").setAttribute("hidden");
    }
}