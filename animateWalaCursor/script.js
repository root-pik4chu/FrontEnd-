
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 10 + "px";
    circle.style.top = y - 10 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.2 / 1.2;
    y += (nextCircle.y - y) * 0.2 /1.2;
  });

  requestAnimationFrame(animateCircles);
} 

animateCircles();



// const co_ords = {x:0 , y:0};
// const circles = document.querySelectorAll(".circle");

// circle.forEach(function(circle){

//     circle.x = 0;
//     circle.y = 0;

// });

// window.addEventListener("mousemove" , function(e){

//     co_ords.x = e.clientX;
//     co_ords.y = e.clientY;

    

// });


// function animateCircles(){
//     let x = co_ords.x;
//     let y = co_ords.y;

//     circles.forEach(function(circle,index){

//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.style.scale =(circles.length - index ) / circles.length;

//         circle.x = x ;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];

//         x+= (nextCircle.x - x) * 0.3;
//         y+= (nextCircle.y - y) * 0.3;

//     });
// }


// animateCircles();



