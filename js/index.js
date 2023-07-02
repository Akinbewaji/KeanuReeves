addEventListener("load", function() {
    const preLoad = this.document.querySelector(".upComing");
    const xPreload = this.document.querySelector("#x");

    let scrollTop = this.document.documentElement.scrollTop;
    let scrollLeft = this.document.documentElement.scrollLeft;

    this.window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    }

    xPreload.addEventListener("click", (e) => {
        preLoad.style.display = "none";
        this.window.onscroll = function(){};
    });
});
addEventListener("DOMContentLoaded", function(){
    const openMenu = document.querySelector(".menu");
    const closeMenu = document.getElementById("exitMenu");
    const menu = document.querySelector(".popupMenu");

    openMenu.addEventListener("click", (e) => {
        menu.style.display = "flex";
    });

    closeMenu.addEventListener("click", (e) => {
        menu.style.display = "none";
    });
});
