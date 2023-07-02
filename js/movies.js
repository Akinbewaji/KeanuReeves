addEventListener("DOMContentLoaded", getImages);


function getImages(){
    const images = document.getElementsByClassName("allMovies");
    const quickNavButton = document.querySelector(".quickNavButton");
    const navDisplay = document.querySelector("#quickNav");
    const mainContent = document.querySelector("#mainContent");
    const displayMovie = document.querySelector("#leftPart");
    const movieDetailsIframe = document.getElementById("movDetails");
    const imageToFrameArray = {
        "constantine.jpg" : "frames/constantine.html",
        "p_idaho.jpg" : "frames/idaho.html",
        "mtc.jpg" : "frames/mtc.html",
        "replicas.jpeg" : "frames/replicas.html",
        "ronin.jpg" : "frames/ronin.html",
        "siberia.jpeg" : "frames/siberia.html",
        "speed.jpg" : "frames/speed.html",
        "tdess.jpeg" : "frames/tdess.html",
        "whole_truth.jpeg" : "frames/w_truth.html",
        "p_break.jpg" : "frames/p_break.html",
        "d_advocate.jpg" : "frames/d_advocate.html",
        "exposed.jpg" : "frames/exposed.html",
        "wick2.jpg" : "frames/wick.html"
    };
    const textToImageArray = {
        "The Matrix" : "",
        "John Wick" : "",
        "Constantine" : "constantine.jpg",
        "Speed" : "speed.jpg",
        "The Man of Tai Chi" : "mtc.jpg",
        "47 Ronin" : "ronin.jpg",
        "Replicas" : "replicas.jpeg",
        "Siberia" : "siberia.jpeg",
        "The Day the Earth Stood Still" : "tdess.jpeg",
        "The Whole Truth" : "whole_truth.jpeg",
        "Exposed" : "exposed.jpg",
        "The Devil's Advocate" : "d_advocate.jpg",
        "Point Break" : "p_break.jpg",
        "My Own Private Idaho" : "p_idaho.jpg",
    }
    
    let county = setTimeout(() => {
        quickNavButton.style.display = "flex";
        quickNavButton.style.justifyContent = "center";
        quickNavButton.style.alignItems = "center";
    }, 50);
    
    addEventListener("scroll", (e) => {
        clearTimeout(county);
    });

    quickNavButton.addEventListener("click", (e) => {
        navDisplay.style.display = "block";
    });    
    
    const texts = document.getElementsByClassName("quickNavClickMovie");
    console.log(images);
    console.log(texts);
    for (let text of texts) {
        text.addEventListener("focus", (e) => {
            mainContent.style.display = "flex";
            mainContent.style.alignItems = "center";
            let textClicked = e.target.id;

            // sets the text clicked to the image displayed in the secondSection
            let imageToDisplay = textToImageArray[textClicked];
            console.log(textClicked);
            // displayMovie.firstElementChild.src = imageToDisplay;            
        });
    }
    
    // get the img id(previous sibling) of the element that is actually clicked(which is div.colorOver)
    for (let image of images) {
        image.addEventListener("click", (e) => {
            mainContent.style.display = "flex";
            mainContent.style.alignItems = "center";
            let imageClicked = e.target.previousElementSibling;
            
            // sets the image clicked to the image displayed in the secondSection
            displayMovie.firstElementChild.src = imageClicked.src;
            
            // fetches and displays the frame of the image clicked at the right part of the second section
            for (const image in imageToFrameArray) {    
                if(imageClicked.src.endsWith(image))
                    movieDetailsIframe.src = imageToFrameArray[image];
            } 
        });
    }
}
