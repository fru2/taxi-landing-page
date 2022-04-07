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
    end: '+=1200%',
    pin: 'header',
    scrub: 0,
  }
});


// For desktop and tablet 
if (window.innerWidth > 768) {
  t1
    .to('#car-img', {
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
    .to('#services-section', {
      display: 'block',
      duration: 0,
    })
    .to('.tail-light', {
      scale: 35,
      duration: 0.8,
    })
    .to('#scroll', {
      opacity: 0,
      duration: 0,
    })
    .to('.color-shift', {
      opacity: 1,
      color: '#fff'
    }, 1.2)

    .fromTo('#service-1', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0
    })
    .to('#service-1', {
      opacity: 0,
      y: -20,
    })

    .fromTo('#service-2', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0
    })
    .to('#service-2', {
      opacity: 0,
      y: -20,
    })

    .fromTo('#service-3', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0
    })
    .to('#service-3', {
      opacity: 0,
      y: -20,
    })
}

// For mobile
else {
  t1
    .to('#car-img', {
      x: '-128vw',
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
      x: '-280vw',
    })
    .to('#services-section', {
      display: 'block',
      duration: 0,
    })
    .to('.tail-light', {
      scale: 45,
      duration: 0.8,
    })
    .to('#scroll', {
      opacity: 0,
      duration: 0,
    })
    .to('.color-shift', {
      opacity: 1,
      color: '#fff'
    }, 1.2)

    .fromTo('#service-1', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0
    })
    .to('#service-1', {
      opacity: 0,
      y: -20,
    })

    .fromTo('#service-2', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0
    })
    .to('#service-2', {
      opacity: 0,
      y: -20,
    })

    .fromTo('#service-3', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0
    })
    .to('#service-3', {
      opacity: 0,
      y: -20,
    })

}





let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#images-section',
    start: 'bottom bottom',
    end: '+=300%',
    pin: '#images-section',
    scrub: true,
  }
})

t2
  .to('#promo-img-1', {
    left: 0,
    duration: 0,
  })
  .to('.tail-light', {
    opacity: 0,
    duration: 0.1,
  })
  .to('.color-shift', {
    color: '#44494B',
    duration: 0.1
  })
  .to('.icon-light', {
    opacity: 0,
    duration: 0.1
  }, 0.1)
  .to('#images-section', {
    scale: 0.7,
  })
  .to('#promo-img-2', {
    left: 0
  })

// timeline2.
// to('.tail-light', {
//   opacity: 0,
//   duration: 0,
// })