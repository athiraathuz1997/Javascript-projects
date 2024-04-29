let slider = document.querySelector('#slider');
let images = document.querySelectorAll(".image");
let divider =document.querySelector(".divider")
let activeImage = images[0];

activeImage.classList.add("active");

slider.addEventListener("mousemove", function (e) {
    let xdistance = e.clientX;
    let box = e.target.getBoundingClientRect();
    let left = box.left;
    let width = box.width;
    let distance = xdistance - left;
    let percentage = Math.ceil((distance / width) * 100);

    console.log(percentage);
    activeImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    divider.style.left = '${percentage}%'
});
