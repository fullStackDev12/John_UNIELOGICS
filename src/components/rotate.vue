<template>
    <div id="app">
       
            <div class="box" :style="{ width: boxWidth + 'px', height: boxHeight + 'px', right: '0', transform: 'rotate(45deg)' }"></div>

        
    </div>
  </template>
  
  <script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    data() {
      return {
        boxWidth: 50,
        boxHeight: 100, 
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
            scrub: 0.5, // Adjust the scrub value for smoother scrolling
          }
        });
  
        timeline.to(this.$data, { boxWidth: window.innerWidth, duration: 6, ease: "power2.inOut" });
        timeline.to(this.$data, { boxHeight: window.innerHeight, duration: 6, ease: "power2.inOut" });
        timeline.to(".box", { rotation: 0, duration: 6, ease: "power2.inOut" }); // Add rotation animation
      },
    },
  };
  </script>
  
  <style scoped>
  #app {
    height: 200vh; 
   
  }


  
  .box {
    position: fixed;
    top: 0;
    right: 0;
    transform-origin: right center;  
    background-color: #3498db;
  }
  </style>
  