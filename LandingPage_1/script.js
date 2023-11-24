var tl = gsap.timeline()




tl.from(".logo img, .three_item li, .login_button" ,{
    y:-100,
    duration:1,
    // delay:1,
    opacity:0,
    stagger:.3
})

tl.from("#heading h1 , #first_p h3 ,#exp p , #button"   ,{
    y:200,
    duration:1,
    // delay:1,
    opacity:0,
    stagger:.3
})
