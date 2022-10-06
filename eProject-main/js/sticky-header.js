header = document.getElementById("sticky-header");

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 300) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

window.addEventListener("scroll", myScrollFunc);