// function removeSpace() {
//     let str = document.getElementById("text").value;
//     let result = str . replace(/\s/g, "");
//     document.getElementById("result").innerHTML = result;
// }

// function removeSpace() {
//     let str = document.getElementById("text").value;
//     let result = str . replace(/\s/g, "");
//     document.getElementById("result").innerHTML = result;
// }


function reverseString() {
    let str = document.getElementById("txt").value;
    let rev = str.split("").reverse().join("");
    document.getElementById("result").innerHTML = rev;
}
