
gsap.to(".page_1 h1",{

    Transform:"translateX(-250%)",
    fontWeight:100,

    scrollTrigger:{

        trigger:".page_1",
        scroller:"body",
        markers:true,
        start:"top",
        end:"top -200%",
        scrub:2,
        pin:true
       
    }

})
gsap.to("box2",{
    Transform:"translate(150vh)",
    scrollTrigger:{
        trigger:"page_1",
        scroller:"body",
        markers:true,
        start:"top",
        end:"top -300%",
        scrub:2,
        pin:true

    }
})












































