function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

console.log("Grade 100:", calculateGrade(100));
console.log("Grade 90:", calculateGrade(90));
console.log("Grade 89:", calculateGrade(89));
console.log("Grade 0:", calculateGrade(0));
console.log("Invalid:", calculateGrade(-1));
console.log("Invalid:", calculateGrade(101));
console.log("Invalid:", calculateGrade("90"));

console.log("Access 20 + ticket:", checkAccess(20, true));
console.log("Access 20 + no ticket:", checkAccess(20, false));
console.log("Access 17 + ticket:", checkAccess(17, true));
