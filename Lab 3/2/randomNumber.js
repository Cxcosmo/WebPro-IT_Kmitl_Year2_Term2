const images = [
    "images/0.png",
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
];

function randomNumber(){
    const numbers = document.querySelectorAll(".number");
    numbers.forEach(img => {
        img.src = `images/${Math.floor(Math.random() * 10)}.png`;
    });
}
