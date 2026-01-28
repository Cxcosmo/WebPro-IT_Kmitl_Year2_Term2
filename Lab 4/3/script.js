let balance = 0;

function addItem() {
    const title = document.getElementById("title").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const date = document.getElementById("date").value;

    if (!title || !amount || !date) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    let income = 0;
    let expense = 0;

    if (type == "income") {
        income = amount;
        balance += amount;
    } else {
        expense = amount;
        balance -= amount;
    }

    document.getElementById("balance").textContent = balance;

    const row = document.createElement("tr");
    const tdDate = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdIncome = document.createElement("td");
    const tdExpense = document.createElement("td");

    tdDate.textContent = date;
    tdTitle.textContent = title;
    tdIncome.textContent = income;
    tdExpense.textContent = expense;

    row.append(tdDate, tdTitle, tdIncome, tdExpense);

    document.getElementById("tableBody").appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}