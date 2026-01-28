function loadData(){
    const movieTable = document.getElementById("movieTable");
    movieTable.innerHTML = "";

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    if (movies.length === 0){
        const item = document.createElement("div");
        const p = document.createElement("p");

        item.className = "item";
        p.textContent = "ยังไม่มีรายการโปรด";

        item.appendChild(p);
        movieTable.appendChild(item);
        return;
    }

    movies.forEach(movie => {
        const item = document.createElement("div");
        const p = document.createElement("p");
        const button = document.createElement("button");

        item.className = "item";
        p.textContent = movie;

        button.type = "button";
        button.textContent = "ลบ";
        button.onclick = () => deleteItem(movie);

        item.appendChild(p);
        item.appendChild(button);
        movieTable.appendChild(item);
    });
}


loadData();

function addMovie() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    const input = document.getElementById("movieName");
    const movie = input.value.trim();

    if (movie !== "") {
        movies.push(movie);
        localStorage.setItem("movies", JSON.stringify(movies));
        input.value = "";
    }

    loadData();
}

function deleteItem(movie){
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    movies = movies.filter(m => m !== movie);

    localStorage.setItem("movies", JSON.stringify(movies));
    loadData();
}

function deleteAll(){
    localStorage.setItem("movies", JSON.stringify([]));
    loadData();
}

