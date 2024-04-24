gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});


var h1 = document.querySelectorAll('#page2 #scroll h1');

h1.forEach(e => {
    var h1Text = e.textContent;
    var clutter = "";
    var splittedText = h1Text.split("");
    splittedText.forEach(ele => {
        clutter += `<span>${ele}</span>`;
    });
    
    e.innerHTML = clutter;
});

var tl = gsap.timeline()

tl.to('#page2 #scroll h1 span', {
    color: '#3a86ff',
    stagger: 1,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page2 #scroll h1",
        scrub: 1,
        start: "top 100%",
        end: "top 40%"
    }
});

tl.from("#page2 img",{
    scale:0,
    opacity:0,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page2  img",
        scrub: 1,
        // markers:true,
        start: "top 100%",
        end: "top 40%"
    }
})


