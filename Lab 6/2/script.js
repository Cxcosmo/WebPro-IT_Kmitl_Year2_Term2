function createStudentCard(){
    let index = 0;
    fetch('student-score.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(student => {
                const studentList = document.getElementById("studentList");

                const card = document.createElement("div");
                const img = document.createElement("img");
                const h4 = document.createElement("h4");
                const physic = document.createElement("p");
                const math = document.createElement("p");
                const eng = document.createElement("p");

                card.className = "card";

                img.src = (student.gender == "Female") ? "images/img_female.png" : "images/img_male.png";
                index++;
                h4.textContent = `${index}. ${student.name}`;
                physic.textContent = `Physics: ${student.physics}`;
                math.textContent = `Mathmatics: ${student.maths}`;
                eng.textContent = `English: ${student.english}`;


                card.append(img, h4, physic, math, eng);
                studentList.appendChild(card);
            });
        })
        .catch(error => console.error("Error :", error));
}

createStudentCard();