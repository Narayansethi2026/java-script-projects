function calculate() {

    let amount = Number(document.getElementById("amount").value);
    let months = Number(document.getElementById("months").value);

    let rate;

    if (months > 60) {
        rate = 12;

    } else {
        rate = 2;
    }
    let interest = amount * rate * months / (12 * 100);

    document.getElementById("result").innerHTML = "interest = " + interest;
}