const menus = [
  {
    name: "บัตเตอร์ชิกเก้น",
    desc: "Butter Chicken",
    img: "images/บัตเตอร์ชิกเก้น.webp",
    link: "index.html"
  },
  {
    name: "ทิกก้า มาซาลา",
    desc: "Chicken tikka masala",
    img: "images/ทิกก้า มาซาลา.webp",
    link: "TikkaMasala.html"
  },
  {
    name: "บาเยีย",
    desc: "Fried spinach balls",
    img: "images/บาเยีย.jpg",
    link: "Bayia.html"
  },
  {
    name: "ไก่ย่างทันดูรี",
    desc: "Tandoori Chicken",
    img: "images/ไก่ย่างทันดูรี.avif",
    link: "TandooriChicken.html"
  },
  {
    name: "แกงกุรุหม่า",
    desc: "Korma Curry",
    img: "images/แกงกุรุหม่า.webp",
    link: "KormaCurry.html"
  },
  {
    name: "ข้าวหมกไก่อินเดีย",
    desc: "Indian Chicken Biryani",
    img: "images/ข้าวหมกไก่อินเดีย.webp",
    link: "Biryani.html"
  },
  {
    name: "ปานีปูรี",
    desc: "Spicy Pani Puri",
    img: "images/ปานีปูรี.webp",
    link: "PaniPuri.html"
  },
  {
    name: "ซาไมซ่า",
    desc: "Spiced Lamb Samaisa",
    img: "images/ซาไมซ่า.webp",
    link: "Samisas.html"
  },
  {
    name: "จาปาตี",
    desc: "Indian Flatbread",
    img: "images/จาปาตี.webp",
    link: "Japati.html"
  },
  {
    name: "แป้งนาน",
    desc: "Naan Bread",
    img: "images/แป้งนาน.jpg",
    link: "Naan.html"
  },
];

const list = document.getElementById("menuList");

menus.forEach(menu => {
  const item = document.createElement("div");
  item.className = "menuItem";

  item.innerHTML = `
        <img src="${menu.img}">
        <div class="menuInfo">
            <h3>${menu.name}</h3>
            <p>${menu.desc}</p>
        </div>
        <div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></div>
    `;

  item.onclick = () => {
    location.href = `${menu.link}`;
  };

  list.appendChild(item);
});

function goBack() {
  window.history.back();
}
