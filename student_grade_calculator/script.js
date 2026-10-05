function calculateGrade() {

    // Get marks from the input fields

    let math = Number(document.getElementById("math").value);
    let programming = Number(document.getElementById("programming").value);
    let database = Number(document.getElementById("database").value);
    let networking = Number(document.getElementById("networking").value);
    let web = Number(document.getElementById("web").value);


    // Check whether all marks are entered

    if (
        document.getElementById("math").value === "" ||
        document.getElementById("programming").value === "" ||
        document.getElementById("database").value === "" ||
        document.getElementById("networking").value === "" ||
        document.getElementById("web").value === ""
    ) {

        alert("Please enter marks for all subjects.");

        return;
    }


    // Check that marks are between 0 and 100

    let marks = [
        math,
        programming,
        database,
        networking,
        web
    ];

    for (let mark of marks) {

        if (mark < 0 || mark > 100) {

            alert("Marks must be between 0 and 100.");

            return;
        }
    }


    // Calculate total

    let total =
        math +
        programming +
        database +
        networking +
        web;


    // Calculate average

    let average = total / 5;


    // Determine grade

    let grade;

    if (average >= 80) {
        grade = "A";
    }

    else if (average >= 70) {
        grade = "B";
    }

    else if (average >= 60) {
        grade = "C";
    }

    else if (average >= 50) {
        grade = "D";
    }

    else {
        grade = "F";
    }


    // Determine pass or fail

    let result;

    if (average >= 50) {
        result = "PASS 🎉";
    }

    else {
        result = "FAIL";
    }


    // Display results

    document.getElementById("total").textContent =
        total + " / 500";

    document.getElementById("average").textContent =
        average.toFixed(2) + "%";

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("result").textContent =
        result;
}


// Clear the form

function clearForm() {

    document.getElementById("math").value = "";

    document.getElementById("programming").value = "";

    document.getElementById("database").value = "";

    document.getElementById("networking").value = "";

    document.getElementById("web").value = "";


    document.getElementById("total").textContent = "--";

    document.getElementById("average").textContent = "--";

    document.getElementById("grade").textContent = "--";

    document.getElementById("result").textContent = "--";
}