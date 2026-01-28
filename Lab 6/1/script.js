function tableInfo() {
    const tbody = document.getElementById("person");

    fetch("employees.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((employee) => {
                const row = document.createElement("tr");

                const name = employee.FirstName + " " + employee.LastName;
                let gender;
                if (employee.Gender == "Female") {
                    gender = "F";
                } else {
                    gender = "M";
                }

                row.innerHTML = `
                    <td class="id-cell">${employee.id}</td>
                    <td>${name}</td>
                    <td class="gender-cell">${gender}</td>
                    <td>${employee.Position}</td>
                    <td>${employee.Address}</td>
                `;

                tbody.appendChild(row);
            });
        });
}

tableInfo();