<template>
  <div id="app">
    <div class="box" :style="{ width: boxWidth + 'px', height: boxHeight + 'px', opacity: boxOpacity }">
      <section class="home" :style="{ opacity: homeOpacity }">
        <div class="contanir">
          <div class="main-home">
            <h1>
              IT’S LIKE AN UBER TO
              <span class="span-1">YOUR DROPSHIPING</span>
              <span class="span-2">
                <div class="abcd">
                  <img src="../assets/images/car.gif" alt="">
                </div>
                BUSINESS
              </span>
            </h1>
          </div>
        </div>
      </section>
    </div>

    <section class="hero" :style="{ filter: 'blur(' + blurAmount + 'px)' }">
      <div class="contanir">
        <div class="hero-main">
          <div class="hero-tital">
            <p>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path
                    d="M17.9688 40.6738C17.3193 40.6738 16.7725 40.8936 16.333 41.333C15.8936 41.7725 15.6738 42.3193 15.6738 42.9688C15.6738 43.6182 15.8936 44.165 16.333 44.6045C16.7725 45.0439 17.3193 45.2783 17.9688 45.3125C18.6182 45.2783 19.165 45.0439 19.6045 44.6045C20.0439 44.165 20.2637 43.6182 20.2637 42.9688C20.2637 42.3193 20.0439 41.7725 19.6045 41.333C19.165 40.8936 18.6182 40.6738 17.9688 40.6738ZM39.4043 31.25C39.7656 31.25 40.0781 31.1426 40.3564 30.9326C40.6348 30.7227 40.8203 30.4346 40.918 30.0781L46.3867 8.20312C46.4844 7.71484 46.377 7.26562 46.0693 6.86035C45.7617 6.45508 45.3613 6.25 44.873 6.25H4.6875C4.2334 6.25 3.85742 6.39648 3.56445 6.68945C3.27148 6.98242 3.125 7.3584 3.125 7.8125C3.125 8.2666 3.27148 8.64258 3.56445 8.93555C3.85742 9.22852 4.2334 9.375 4.6875 9.375H9.375V37.5H42.1875C42.6416 37.5 43.0176 37.3535 43.3105 37.0605C43.6035 36.7676 43.75 36.3916 43.75 35.9375C43.75 35.4834 43.6035 35.1074 43.3105 34.8145C43.0176 34.5215 42.6416 34.375 42.1875 34.375H12.5V31.25H39.4043ZM12.5 9.375H42.8711L38.1836 28.125H12.5V9.375ZM33.5938 40.6738C32.9443 40.6738 32.3975 40.8936 31.958 41.333C31.5186 41.7725 31.2988 42.3193 31.2988 42.9688C31.2988 43.6182 31.5186 44.165 31.958 44.6045C32.3975 45.0439 32.9443 45.2783 33.5938 45.3125C34.2432 45.2783 34.79 45.0439 35.2295 44.6045C35.6689 44.165 35.8887 43.6182 35.8887 42.9688C35.8887 42.3193 35.6689 41.7725 35.2295 41.333C34.79 40.8936 34.2432 40.6738 33.5938 40.6738Z"
                    fill="black"
                  />
                </svg>
              </span>
              The UnieLogics Your Droppshipping Patner
            </p>
            <h2>
              CONNECTING MORE <span> SELLERS TO WORLD </span>
            </h2>
          </div>
        </div>
        <div class="hero-box">
          <div class="box-tital">
            <p>
              UnieLogics is the first ever multidimensional logistics company that allows the user to manage their ecommerce products with product research, accounting technology, supplier management.
            </p>
          </div>
          <div class="box-video">
            <img src="../assets/images/Frame 29.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="new-section" :style="{ width: newSectionWidth + 'px' }">
      <div class="container">
        <div class="main-new-section">
          <h1>
            IT’S LIKE AN UBER TO <span class="span-1">YOUR DROPSHIPING</span> <span class="span-2"> BUSINESS </span>
          </h1>
          <img class="new" src="../assets/images/Frame.png" alt="" />
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      boxWidth: 240.874,
      boxHeight: 257.116,
      boxOpacity: 0,
      blurAmount: 0,
      homeOpacity: 0,
      newSectionWidth: 0,
    };
  },
  mounted() {
    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
          end: "bottom top",
          scrub: 5,
        },
      });

      timeline.to(this.$data, {
        boxWidth: window.innerWidth,
        boxHeight: window.innerHeight,
        boxOpacity: 1,
        blurAmount: 20,
        homeOpacity: 1,
        duration: 4,
        ease: "power2.inOut",
      });

      timeline.to(".box", { rotate: 0, x: "7.5%", y: "-65.5%", duration: 4, ease: "power2.inOut" }, 0);

      timeline.to(".span-2 img", {
        x: "-150%",
        duration: 0.7,
        ease: "power2.inOut",
      }, "-=0.7");

      // const carTimeline = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".box",
      //     start: "top center",
      //     end: "bottom top",
      //     scrub: 5,
      //   },
      // });

      // carTimeline.to(".span-2 img", {
      //   x: "-400%",
      //   duration: 2,
      //   ease: "power2.inOut",
      // }, "-=0.7");

      const hideTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
          end: "bottom top",
          scrub: 5,
        },
      });

      hideTimeline.to(this.$data, {
        boxHeight: 0,
        duration: 2,
        ease: "linear",
      }, 0);

      // Animation for the new section
      const newSectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".new-section",
          start: "top center",
          end: "bottom top",
          scrub: 5,
        },
        onUpdate: () => {
          this.newSectionWidth = document.querySelector(".new-section").offsetWidth;
        },
      });

      // Animate the width of the new section
      newSectionTimeline.to(".new-section", {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
      });
    },
  },
};
</script>

<style scoped>
#app {
  overflow: hidden;
}

.hero {
  transition: filter 1s ease;
}

.abcd {
  width: 80%;
}

.abcd img {
  transform: translate(150%, 0px);
  transition: 0.3s linear;
}

.main-home {
  overflow: scroll;
}

.box {
  position: fixed;
  top: 65.5%;
  right: 7.5%;
  transform: translate(8%, -62%) rotate(-44.1124deg);
  background-color: #589ad3;
  z-index: 999;
}

.new-section {
  width: 0;
  overflow: hidden;
  position: relative;
}
</style>
