// let navExpanded = true;

// const navToggle = document.querySelector('.nav-toggle');
// navToggle.addEventListener('click', function () {
//   alert('btn clicked');
// });

gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: 'header',
    start: 'top top',
    end: '+=300%',
    pin: 'header',
    scrub: true,
    markers: true,
  }
});

t1.to('#car-img', {
    x: '-74vw',
  })
  .to('#transition-txt', {
    opacity: 1,
    duration: 0,
  })
  .to('.tagline', {
    opacity: 0,
    duration: 0,
  })
  .to('#car-img', {
    x: '-150vw',
  })
  .to('.tail-light', {
    scale: 30,
    duration: 0.8,
  })


// let t2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.transition-container',
//     start: 'bottom bottom',
//     end: '+=100%',
//     pin: 'header',
//     markers: 'true'
//   }
// })