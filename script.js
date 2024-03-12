const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


var tl = gsap.timeline();

tl.to("#page-1 h1", {
  Transform: "translateX(-260%)",
  scrollTrigger: {
    trigger: "#page-1",
    start: "top 0",
    end: "top -200%",
    scrub: 2,
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
    // markers: true,
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


tl.from(".left-con h1", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".left-con",
    scroll: "body",
    // markers: true,
    start: "",
    end: "top 10%",
    scrub: 2,
  }
})


const blurEffect = () => {
  document.querySelectorAll('.about h1').forEach(element => {
    element.addEventListener('mouseover', () => {
      document.querySelectorAll('.about h1').forEach(h1 => {
        if (h1 !== element) {
          h1.style.filter = 'blur(10px)';
        } else {
          h1.style.filter = 'blur(0)';
        }
      });
    });

    element.addEventListener('mouseout', () => {
      document.querySelectorAll('.about h1').forEach(h1 => {
        h1.style.filter = 'none';
      });
    });
  });
}

blurEffect();


function cursor() {
  document.addEventListener('DOMContentLoaded', function () {
    var cursor = document.querySelector('.cursor');
    cursor.style.display = 'none';

    var currentX = 0;
    var currentY = 0;

    function updateCursor(e) {
      var newX = e.clientX;
      var newY = e.clientY;
      var deltaX = newX - currentX;
      var deltaY = newY - currentY;
      var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // If distance is less than a threshold, do not update cursor
      if (distance < 10) {
        return;
      }

      cursor.style.transition = 'transform ' + (distance * 0.01) + 's ease'; // Adjust the multiplier for speed control

      cursor.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
      currentX = newX;
      currentY = newY;
    }

    function handleMouseMove(e) {
      if (e.clientX < 0 || e.clientY < 0 || e.clientX > window.innerWidth || e.clientY > window.innerHeight) {
        // Cursor is outside the viewport, hide it
        cursor.style.display = 'none';
      } else {
        // Cursor is within the viewport, show and update it
        cursor.style.display = 'block';
        updateCursor(e);
      }
    }

    function handleMouseLeave() {
      // Cursor has left the document, hide it
      cursor.style.display = 'none';
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
  });
}

cursor();


