function button(){
    const root = document.querySelector(":root");
  const button = document.querySelector(".button");
  
  button.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
  
    root.style.setProperty("--gradient-pos-x", `${x}%`);
    root.style.setProperty("--gradient-pos-y", `${y}%`);
  });
  
  button.addEventListener("mouseout", () => {
    root.style.setProperty("--gradient-pos-x", `50%`);
    root.style.setProperty("--gradient-pos-y", `50%`);
  });
  
  }
  button();



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
  
  
  

  
  
  

