Shery.mouseFollower();

Shery.makeMagnet(".magnet")

Shery.hoverWithMediaCircle(".videoHover" , {
    videos :["./0.mp4"]

});











// effect 

gsap.to(".f_r_Elem",{
    scrollTrigger:{
        trigger: "#feature",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
        
    },
    y :"-300%",
    ease:Power1,
    marker:true,
})


// gsap.to(".f_head",{
//     scrollTrigger:{
//         trigger: ".f_head h1",
//         stagger:"top top",
//         end:"bottom bottom",
//         markers: true,
//         opacity:1,

//     }

// })

gsap.to(".f_head " ,{
    // scale:1,
    opacity:1,
    duration:1,
    // delay:-1,
    // ease:Expo.easeInOut,
    // display:"block",
    // x:"0px",
    scrollTrigger:{
        trigger:"f_head",
        // scroller:"body",
        start: "20% 80%",
        end:"20% 80%",
        // markers:true,
        scrub:1,
    },
    

})



// bhayanker taskkk ..... conect with the image 

let sections = document.querySelectorAll(".f_r_Elem")

Shery.imageEffect(".imgage", {
    style: 4,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section , index){
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                scrub:1,
                onUpdate:function(p){
                    setScroll(p.progress + index)
                },
            });
        });
    },
  });



// gsap animation

function pageOneAnim(){
    var t1 = gsap.timeline();

    t1.from(".nav",{
        y:"-10",
        opacity:0,
        duration:2,
        ease:Expo.easeInOut,

    })
    .to("#boundingElem",{
        y:"0",
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-1,

        stagger:.2,
    })
    .to(".text1 p",{
        opacity:1,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,

    })
    

}
pageOneAnim();




