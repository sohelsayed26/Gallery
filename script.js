let viewImagebox = document.getElementsByClassName("viewImagebox")
let imageView = document.getElementById("fullImage");

function imgBtn(image1){
    imageView.setAttribute("src",image1.src)
    imageView.style="display:inline";
}