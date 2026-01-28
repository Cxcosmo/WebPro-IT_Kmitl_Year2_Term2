const students = [
    [1, "สมชาย", randomScore()],
    [2, "สมหญิง", randomScore()],
    [3, "สมศรี", randomScore()],
    [4, "สมปอง", randomScore()],
    [5, "สมเกียรติ", randomScore()],
    [6, "สมบัติ", randomScore()],
    [7, "สมจิตร", randomScore()],
    [8, "สมฤดี", randomScore()]
];

function table_score() {   

    let table_s = "";

    students.forEach((s) => {
        table_s += `
            <tr>
                <td>${s[0]}</td>
                <td>${s[1]}</td>
                <td>${s[2]}</td>
                <td class="grade">-</td>
            </tr>
        `;
    });
    document.getElementById("student_list").innerHTML = table_s;
}

function randomScore() {
    return Math.floor(Math.random() * 61) + 40;
}

function showGrade() {
    const grade_show = document.querySelectorAll(".grade");

    students.forEach((student, index) => {
        grade_show[index].textContent = getGrade(student[2]);
    });
}

function getGrade(score) {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

table_score();
window.showGrade = showGrade;