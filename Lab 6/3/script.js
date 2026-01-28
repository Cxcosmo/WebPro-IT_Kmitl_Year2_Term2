function createQuestion(){
    let index = 0;
    fetch('questionAnswerData.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(question => {
                const questionList = document.getElementById("questionList");

                const Q = document.createElement("div");
                const Question = document.createElement("h4");

                Q.className = "question";
                index++;
                Question.textContent = `${index}. ${question.question}`;
                Q.appendChild(Question);
                
                for (let key in question.answers) {
                    if (key === "correct") continue;

                    const answer = document.createElement("div");
                    const input = document.createElement("input");
                    const label = document.createElement("label");

                    answer.className = "answer";
                    input.type = "radio";
                    input.name = `question${index}`;
                    input.id = `q${index}_${key}`;
                    input.value = key;

                    label.htmlFor = input.id;
                    label.textContent = `${key.toUpperCase()}. ${question.answers[key]}`;

                    answer.appendChild(input);
                    answer.appendChild(label);
                    Q.appendChild(answer);
                }

                questionList.appendChild(Q);
            });
        })
        .catch(error => console.error("Error :", error));
}

createQuestion();