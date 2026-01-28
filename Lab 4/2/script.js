let langue = "th";

const text = {
    th: {
        fname: "ชื่อ:",
        lname: "นามสกุล:",
        country: "ประเทศ:",
        countryList: ["เลือกประเทศ", "ไทย", "เวียดนาม", "ลาว", "มาเลย์เซีย", "สิงค์โปร", "ฟิลิปปินส์", "เมียนมาร์", "กัมพูชา", "บรูไน"],
        button: "เปลี่ยนเป็นภาษาอังกฤษ"
    }, en: {
        fname: "First Name:",
        lname: "Last Name:",
        country: "Country:",
        countryList: ["Select a country", "Thailand", "Vietnam", "Laos", "Malaysia", "Singapore", "Philippines", "Myanmar", "Cambodia", "Brunei"],
        button: "Change to Thai"
    }
};

function createForm(langue) {
    const form = document.getElementById("Information");
    form.innerHTML = "";

    const fDiv = document.createElement("div");
    const fLabel = document.createElement("label");
    const fInput = document.createElement("input");
    fLabel.textContent = text[langue].fname;
    fDiv.append(fLabel, fInput);

    const lDiv = document.createElement("div");
    const lLabel = document.createElement("label");
    const lInput = document.createElement("input");
    lLabel.textContent = text[langue].lname;
    lDiv.append(lLabel, lInput);

    const cDiv = document.createElement("div");
    const cLabel = document.createElement("label");
    const cSelect = document.createElement("select");
    cLabel.textContent = text[langue].country;
    text[langue].countryList.forEach(con => {
        const cOption = document.createElement("option");
        cOption.textContent = con;
        cSelect.appendChild(cOption);
    });
    cDiv.append(cLabel, cSelect);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = text[langue].button;
    btn.onclick = changeLanguage;

    form.append(fDiv, lDiv, cDiv, btn);
}

function changeLanguage() {
    langue = langue === "th" ? "en" : "th";
    createForm(langue);
}

createForm(langue);