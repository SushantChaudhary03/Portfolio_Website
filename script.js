const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

var tl = gsap.timeline();

tl.to("#page-1 h1", {
  Transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: "#page-1",
    start: "top 0",
    end: "top -200%",
    scrub: 3,
    pin: true
  }
})

tl.from(".card h1", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".card h1",
        scroll: "body",
        markers: true,
        start: "",
        end: "top 10%",
        scrub: 2,
  }
})

tl.to(".project-card", {
  Transform: "translateX(-310%)",
  scrollTrigger: {
    trigger: ".scroll-x",
    start: "top 0",
    end: "top -200%",
    scrub: 0,
    pin: true
  }
})