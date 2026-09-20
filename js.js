// function calculate() {

//     let amount = Number(document.getElementById("amount").value);
//     let months = Number(document.getElementById("months").value);

//     let rate;

//     if (months > 60) {
//         rate = 12;

//     } else {
//         rate = 2;
//     }
//     let interest = amount * rate * months / (12 * 100);

//     document.getElementById("result").innerHTML = "interest = " + interest;
// }

function calc() {
    let u = parseFloat(document.getElementById("units").value);
    let bill = 0;

    if (u <= 50) {
        bill = u * 3.05;
    }else if (u <= 100) {
        bill = (50 * 3.05) + ((u - 50) * 3.50);
    }else if (u <= 200) {
        bill = (50 * 3.05) + (50 * 3.50) + ((u - 100) * 4.15);
    }else {
        bill = (50 * 3.05) + (50 * 3.50) + (100 * 4.15) + ((u - 200) * 5.20);

    }
    document.getElementById("res").innerText = "total bill: ₹" + bill.toFixed(2);
}

