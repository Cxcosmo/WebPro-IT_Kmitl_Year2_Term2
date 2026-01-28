function calculate(){
    const num = document.getElementById("num").value;
    const table = document.getElementById("Multiplication");

    table.innerHTML = "";

    let thead = document.createElement("thead");
    let trh = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");

    th1.textContent = "เลขคูณ";
    th2.textContent = "ผลลัพธ์";

    trh.appendChild(th1);
    trh.appendChild(th2);
    thead.appendChild(trh);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    for (let i = 1; i <= 12; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.textContent = `${num} x ${i}`;
        td2.textContent = num * i;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}