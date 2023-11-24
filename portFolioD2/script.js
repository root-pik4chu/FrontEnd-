
function revealSpan(){

    document.querySelectorAll(".reveal")
    .forEach(function (elem) {
    

    //create 2 spans
    var parent = document.createElement("span");
    var child = document.createElement("span");

    // <span> </span>

    // parent child set respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    // <span class = "parent"> </span>


    //set content
    
    child.innerHTML = elem.innerHTML; 
    // <span class = "parent"> "html me jo bhi likha hai woh sab yaha load ho jayegaa too "</span>
    parent.appendChild(child);

    // 

    elem.innerHTML = "";
    elem.appendChild(parent);



});

}

revealSpan();

var t1 = gsap.timeline();

t1
.from(".child span", {
    x:100,
    duration : 1.5, 
    delay : 1,
    stagger:.2,
    ease : Power3.easeInOut ,
})


.to(".parent .child" , {
    y:"-100%",
    duration : 1, 
    delay : 1,
    ease : Circ.easeInOut ,
})

.to("#loader" , {
    height:"0",
    duration : 1, 
    ease : Circ.easeInOut ,

    // delay : 1,
    // ease : Circ.easeInOut ,
})

.to("#green" , {
    height:"100%",
    top: 0,
    duration : 1, 

    delay : -.8,
    ease : Circ.easeInOut ,

    // ease : Circ.easeInOut ,
})
.to("#green" , {
    height:"0%",
    // top: 0,
    duration : 1, 

    delay : -.3,
    ease : Circ.easeInOut ,

    // ease : Circ.easeInOut ,
})