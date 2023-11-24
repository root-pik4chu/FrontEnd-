// function call(){
//     gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main",),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the "#main", element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("#main",).style.transform ? "transform" : "fixed"
//   });





//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();

// }

// call()



// gsap.to(".box1",{
//     duration:2,
//     x:"100%",
//     // delay:1,
//     // rotate:90,
//     // scale:1.5,
//     opacity:1,
    

// })


// var t = gsap.timeline()
// t.to(".box1",{
//     duration:3,
//     x:"58vw",
//     // repeat:-1,
//     // yoyo:true
// })
// t.to(".box2",{
//     duration:3,
//     x:"58vw",
//     // repeat:-1,
//     // yoyo:true
// })


// t.from(".box1",{
//     x:"-50vw",
//     opacity:0,
//     duration:1,
// })
// t.from(".box2",{
//     x:"-50vw",
//     opacity:0,
//     duration:1,
// })
// t.from(".box3",{
//     x:"-50vw",
//     opacity:0,
//     duration:1,
// })



gsap.from(".b",{

  scale:0,
  opacity:0,
  duration:1,
  stagger:0.5,

  scrollTrigger:{
    trigger:".b",
    scroller:"body",
    markers:true,
    start:"50% 75%",
    scrub:2,
  }


})







// ?-------------locomotive js----------------

