const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


    // var frame = document.querySelector(".box");
    // frame.addEventListener("mousemove",function(dets){
    //     gsap.to(circleMouseFollower(),{
    //         scale:4,
    //     });
    // });


    // var move = document.querySelector(".box")
    // var object = document.querySelector("#play")

    // move.addEventListener("mousemove",function(){
    //     gsap.to(object,{
    //         scale:1,
    //         opacity:1,
    //     })
    // })
    // move.addEventListener("mouseleave",function(){
    //     gsap.to(object,{
    //         scale:0,
    //         opacity:0,
    //     })
    // })

    // move.addEventListener("mousemove",function(dets){
    //     gsap.to(object,{
    //         left:dets.clientX-170,
    //         top:dets.clientY-170,
    //     })
    // })




// mouse circle
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX, dets.clientY);

        // 1st select the element
        // apply the style transform
        // x , y put the parameters yo ready
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    });



    // document.querySelector(".box".style.width=20px);
}

// animation navBar

function navBar(){

    var t1 = gsap.timeline();

    t1.from(".navbar a ,.navbar h5",{

        duration:1, 
        y:`-10`,
        opacity:0,
        ease:Expo.easeInOut,
        // delay:-1,

    })


// this is for the box elements which are hidden
    t1.to(".hiddenElements",{

        duration:1.5, 
        y:`0`,
        stagger:.3,
        ease:Expo.easeInOut,
        delay:-1,
    })



    t1.to(".herofooter",{
        opacity:1,
        duration:1, 
        y:-10,
        
        ease:Expo.easeInOut,
        delay:-1,

    })
}



navBar();

circleMouseFollower();


// mouse size wali chheezeee let's seee 











// smooth scroll wala part
// image move part

document.querySelectorAll(".elem").forEach(function (elem){
    
        // console.log(details.clientX);


        // this is for the rotation ... purpose 
    var rotate = 0;
    var diff_rot = 0;


    elem.addEventListener("mouseleave",function (dets){
        // console.log(diff);
        // var t2 = gsap.timeline();
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power2,
        });
        // console.log(gsap.to(elem.querySelector("img"),{top:diff}));
    });

        


    elem.addEventListener("mousemove",function (dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top; 
        diff_rot = rotate -  dets.clientX ;
        rotate = dets.clientX;
        // console.log(diff);
        
        // var t2 = gsap.timeline();
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power2,
            top:diff,
            left:dets.clientX,
            
            rotate: gsap.utils.clamp(-15, 15, diff_rot),
        });

        // console.log(gsap.to(elem.querySelector("img"),{top:diff}));
    });
});




// preloader function



