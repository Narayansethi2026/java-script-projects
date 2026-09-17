function removeSpace() {
    let str = document.getElementById("text").value;
    let result = str . replace(/\s/g, "");
    document.getElementById("result").innerHTML = result;
}

// function removeSpace() {
//     let str = document.getElementById("text").value;
//     let result = str . replace(/\s/g, "");
//     document.getElementById("result").innerHTML = result;
// }