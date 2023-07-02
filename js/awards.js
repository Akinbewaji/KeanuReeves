const interlude_img = document.getElementById("inter_pic");
let zoom = 1;
const zoomingSpd = 0.1;

document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        interlude_img.style.transform = 'scale(${zoom += zoomingSpd})';
    }else{
        interlude_img.style.transform = 'scale(${zoom -= zoomingSpd})';
    }
});

