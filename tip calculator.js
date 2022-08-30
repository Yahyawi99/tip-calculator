const billFunc = (bill) => {
  document.querySelector("#receiptTwo").textContent = bill.value;
};

const tipFunc = (percentValue) => {
  const bill = document.querySelector("#bill");
  const totalTip = document.querySelector("#receiptOne");
  percentValue = percentValue.value;

  let tipInDollar = (bill.value * percentValue.replace("%", "")) / 100;

  document.querySelector(".specialInput").value = tipInDollar.toFixed(2);
  totalTip.textContent = document.querySelector(".specialInput").value;

  document.querySelector("#receiptTwo").textContent = (
    Number(tipInDollar) + Number(bill.value)
  ).toFixed(2);
};

const tipAmountFunc = () => {
  const totalTip = document.querySelector("#receiptOne");
  totalTip.textContent = document.querySelector(".specialInput").value;
};

const numOfPeople = () => {
  const bill = document.querySelector("#bill");
  const people = document.querySelector("#numPeople");
  const tipDollar = document.querySelector(".specialInput").value;

  let total = Number(bill.value) + Number(tipDollar);

  if (people.value == 0) {
    document.querySelector(".errorMessage").style.display = "inline";
    people.style.borderColor = "red";
    people.style.outlineColor = "red";
  } else {
    document.querySelector("#receiptTwo").textContent = (
      total / people.value
    ).toFixed(2);
    document.querySelector("#receiptOne").textContent = (
      tipDollar / people.value
    ).toFixed(2);

    document.querySelector(".errorMessage").style.display = "none";
    people.style.borderColor = "hsl(183, 84%, 40%)";
    people.style.outlineColor = "hsl(183, 84%, 40%)";
  }
};

const reset = () => {
  document.querySelector("#receiptOne").textContent = "0.00";
  document.querySelector("#receiptTwo").textContent = "0.00";
  document.querySelector("#numPeople").value = "";
  document.querySelector("#bill").value = "";
  document.querySelector(".specialInput").value = "";
};
