// Sidebar
const menu = document.getElementById("menu");
const fitur = document.getElementById("fitur");

menu.addEventListener("click", () => {
    fitur.classList.toggle("hidden");
} );

// Animasi Loading
var loader = document.getElementById("luar");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

// Menyembunyikan sidebar
document.addEventListener('click', function (event){

    var sidebar = document.getElementById("fitur");
    var target = event.target;
    if(target !== sidebar && sidebar.contains(target)){
        sidebar.style.display = "none";

        document.removeEventListener('click',sidebar);
    }
});

// Mengubah Warna Navbar
const navBar = document.querySelector(".navigation-bar");

window.addEventListener("scroll", () =>{
const positionWindow= window.scrollY > 0 ;
navBar.classList.toggle('scrolling-active', positionWindow);
});

// Slider

var sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides (n){
    showSlides(sliderIndex += n);

}
function currentSlides(n){
    showSlides(sliderIndex = n);
}

// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if(n > slides.length ){ sliderIndex =1 }
//     if(n < 1){ sliderIndex = slides.length}
//     for ( i = 0; i<slides.length;i++){
//         slides[i].style.display="none";
//     }
//     for (i=0; i< dots.length; i++){
//         dots[i].className = dots[i].className.replace("active","");

//     }
//     slides[sliderIndex - 1].style.display = "block";
//     dots[sliderIndex - 1].className += "active";
// }


// Reload
function reload(){
    setTimeout(function(){
        window.location.reload();
    });
}