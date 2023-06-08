
var button = document.getElementById("button");
var icon1 = document.querySelector(".icon1");

button.addEventListener("mouseenter", function() {
    button.style.right = "-10px";
    icon1.style.right = "-10px";
});

button.addEventListener("mouseleave", function() {
    button.style.right = "-50px";
    icon1.style.right = "-50px";
});

button.addEventListener("click", function() {
    window.location.href = "index.html";
});


var button2 = document.getElementById("button2");
var icon2 = document.querySelector(".icon2");

button2.addEventListener("mouseenter", function() {
    button2.style.right = "-10px";
    icon2.style.right = "-10px";
});

button2.addEventListener("mouseleave", function() {
    button2.style.right = "-50px";
    icon2.style.right = "-50px";
});

button2.addEventListener("click", function() {
    window.location.href = "big.html";
});


var button3 = document.getElementById("button3");
var icon3 = document.querySelector(".icon3");

button3.addEventListener("mouseenter", function() {
    button3.style.right = "-10px";
    icon3.style.right = "-10px";
});

button3.addEventListener("mouseleave", function() {
    button3.style.right = "-50px";
    icon3.style.right = "-50px";
});

button3.addEventListener("click", function() {
    window.location.href = "big.html";
});
