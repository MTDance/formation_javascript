// window.addEventListener("resize", function () {
//   let media500 = window.matchMedia("(min-width: 500px)");

//   console.log(media500);

//   if (media500.matches) {
//     console.log("L'écran fait au moins 500px de large");
//   }

//   let media1000 = window.matchMedia("(min-width: 1000px)");

//   if (media1000.matches) {
//     console.log("L'écran fait au moins 1000px de large");
//   }
// });


let media500 = window.matchMedia("(min-width: 500px)");

console.log(media500);

media500.addEventListener("change", function(e){
    if(this.matches){
        console.log("L'écran fait plus de 500px de large");
    }
});

let mediaLandscape = window.matchMedia("(orientation: landscape)");

mediaLandscape.addEventListener("change", function(){
    if(this.matches){
        console.log("Orientation paysage");
    }else{
        console.log("Orientation portrait");
    }
});