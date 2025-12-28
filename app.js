gsap.from(".hero h1", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".card", {
  opacity: 0,
  y: 30,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%"
  }
});
