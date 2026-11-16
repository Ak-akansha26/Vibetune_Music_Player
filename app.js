let newdemo_img = document.querySelector(".demo-img");
let newcard_img = document.querySelectorAll(".card-img");

newcard_img.forEach(function (card) {
    card.addEventListener("click", function () {
        newdemo_img.src = card.src;
        console.log("clicked");
    });
});
