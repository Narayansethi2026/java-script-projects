// let student = [];

// let addBtn = document.getElementById("addBtn");
// let nameInput = document.getElementById("name");
// let mathInput = document.getElementById("maths");
// let englishInput = document.getElementById("english");
// let scienceInput = document.getElementById("science");

// let result = document.getElementById("result");

// addBtn.addEventListener("click", function () {
//     let name = nameInput.value;

//     let maths = Number(mathInput.value);
//     let english = Number(englishInput.value);
//     let computer = Number(scienceInput.value);

//     let student = {
//         name: name,
//         maths: maths,
//         english: english,
//         computer: computer
//     };

//     student.push(student);

//     displayStudent();

// });

// function displayStudent() {
//     result.innerHTML = "";

//     student.forEach(function (student) {

//         let total = student.maths +
//             student.english +
//             student.computer;
//         let percentage = total / 3;

//         let card = document.createElement("div");

//         card.classList.add("student-card");

//         card.innerHTML = `
//               <h2>${student.name}<h2>
//               <p>maths: ${student.maths}</p>
//               <p>english: ${student.english}</p>
//               <p>science: ${student.computer}</p>
//               <p>total: ${total}</p>
//               <p>percentage: ${percentage}%</p>`;
//               result.append(card);
//     });
// }
let students = [];

let addBtn = document.getElementById("addBtn");
let nameInput = document.getElementById("name");
let mathInput = document.getElementById("maths");
let englishInput = document.getElementById("english");
let scienceInput = document.getElementById("science");

let result = document.getElementById("result");


addBtn.addEventListener("click", function () {

    let name = nameInput.value;

    let maths = Number(mathInput.value);
    let english = Number(englishInput.value);
    let computer = Number(scienceInput.value);


    let student = {
        name: name,
        maths: maths,
        english: english,
        computer: computer
    };


    students.push(student);

    displayStudents();
});


function displayStudents() {

    result.innerHTML = "";

    students.forEach(function (student) {

        let total =
            student.maths +
            student.english +
            student.computer;

        let percentage = total / 3;


        let card = document.createElement("div");

        card.classList.add("students-card");


        card.innerHTML = `
            <h2>${student.name}</h2>
            <p>Maths: ${student.maths}</p>
            <p>English: ${student.english}</p>
            <p>Science: ${student.computer}</p>
            <p>Total: ${total}</p>
            <p>Percentage: ${percentage}%</p>
        `;


        result.append(card);
    });
}