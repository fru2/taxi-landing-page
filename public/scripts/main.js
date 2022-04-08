gsap.registerPlugin(ScrollTrigger);


let navExpanded = true;
const navToggleBtn = document.querySelector('.nav-toggles');
const navCloseBtn = document.querySelector('.collapse-ico');
const navExpandBtn = document.querySelector('.expand-ico');
const navList = document.querySelector('.nav-list');
const homeNavLink = document.querySelector('#home-nav-link');




navigationAnimation();
bodyAnimation();


navToggleBtn.addEventListener('click', () => {
  expandNav();
});

homeNavLink.addEventListener('click', () => {
  moveToTop();
})

function expandNav() {

  if (navExpanded) {
    navCloseBtn.className = 'pb-5 collapse-ico hidden';
    navExpandBtn.className = 'pb-5 expand-ico';
    navList.className = 'hidden space-x-16 absolute absolute-center nav-list';
    navExpanded = !navExpanded;
  } else {
    navCloseBtn.className = 'pb-5 collapse-ico';
    navExpandBtn.className = 'pb-5 expand-ico hidden';
    navList.className = 'flex space-x-16 absolute absolute-center nav-list';
    navExpanded = !navExpanded;
  }

}


function moveToTop() {
  window.scrollTo(0, 0);
}


function navigationAnimation() {

}

function bodyAnimation() {


  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    ScrollTrigger.config({
      // Disables the resfresh even in viewport resize
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load"
    })

  }


  let isDesktop = false;
  if (window.innerWidth > 768) {
    isDesktop = true;
  }



  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: 'header',
      start: 'top top',
      end: isDesktop ? '+=1200%' : '+=700%',
      pin: 'header',
      scrub: 0,
    }
  });

  t1
    .to('#car-img', {
      x: isDesktop ? '-74vw' : '-128vw',
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
      x: isDesktop ? '-150vw' : '-280vw',
    })
    .to('#services-section', {
      display: 'block',
      duration: 0,
    })
    .to('.tail-light', {
      scale: isDesktop ? 35 : 45,
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


}