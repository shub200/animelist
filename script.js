let input = document.querySelector("input");
let btn = document.querySelector("button");
let animeinfo = document.getElementById("animeinfo");
let img = document.getElementById("img-div");

// info areas

const title = document.getElementById("title");
const titleInJap = document.getElementById("titleinjap");
const background = document.getElementById("background");
const about = document.getElementById("about");
const episode = document.getElementById("episode");
const duration = document.getElementById("duration");
const popularity = document.getElementById("pop");
const year = document.getElementById("year");
const score = document.getElementById("score");
const trailer = document.getElementById("trailer");
const licensors = document.getElementById("licensors");
const genres = document.getElementById("genres");
const genres1 = document.getElementById("genres1");
const genres2 = document.getElementById("genres2");
const producers = document.getElementById("producers");
const producers1 = document.getElementById("producers1");
const producers2 = document.getElementById("producers2");


//fathing that data from the api
let datafromapi = () => {
        if(input.value === ""){
            alert("Please enter the name of a anime")
        }else{
            fetch(`https://api.jikan.moe/v4/anime?q=${input.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data[0]);
                
                let image = document.createElement("img");

                
                title.innerText = data.data[0].title_english
                titleInJap.innerText = data.data[0].title_japanese
                genres.innerText = data.data[0].genres[0].name
                genres1.innerText = data.data[0].genres[1].name
                genres2.innerText = data.data[0].genres[2].name
                producers.innerText = data.data[0].producers[0].name
                producers1.innerText = data.data[0].producers[1].name
                producers2.innerText = data.data[0].producers[2].name
                licensors.innerText = data.data[0].licensors[0].name

                background.innerText = data.data[0].background
                
                about.innerText = data.data[0].synopsis
                episode.innerText = data.data[0].episodes

                duration.innerText = data.data[0].duration
                popularity.innerText = data.data[0].popularity
                year.innerText = data.data[0].year
                trailer.src = data.data[0].trailer.url
                trailer.innerText = data.data[0].trailer.embed_url

                
    
    
    
                image.src = data.data[0].images.jpg.image_url; 
                image.alt = `${data.data.name}, image`;
                image.classList.add("w-[40%]", "rounded-lg","mx-7","my-7", "max-h-[10%]");

                img.innerHTML = "";
                img.appendChild(image);
            })
            .catch(error => console.log(error));
    
            animeinfo.style.display = 'block';
        }; 
}



btn.addEventListener("click",datafromapi);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior (like form submission)
        datafromapi()
    }
});