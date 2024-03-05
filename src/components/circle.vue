<template>
    <section class="section1">

<svg id="cerc" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
  <circle id="cerc-cover" r="0" fill="blue" cx="50%" cy="100%"/>
</svg>

</section>

<section class="section2">

<svg id="demo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
  <defs>
    <mask id="theMask">
    <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
    <circle id="cover" r="0" fill="black" cx="50%" cy="100%"/>
    </mask>  
  </defs> 

  <g mask="url(#theMask)"> 
    <rect id="goAway" x="0" y="0" width="100%" height="100%" fill="blue" /> 
  </g>
</svg>

</section>


<div class="welcome">
<h1>Welcome</h1>
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
     
      homeOpacity:0,
      newSectionWidth: 0,
      newSectionWidth1:0,
      disk:'none'
    };
  },
  mounted() {

    // gsap.to(".box", { rotate: -45.248, duration: 1, ease: "power2.inOut" });
    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
        
        gsap.to("#cerc-cover", {
    attr: { r: 1045 },
    scrollTrigger: {
      trigger: ".section1",
      start: "50% center",
      end: '200%', 
      scrub: true,
      pin: true,
      markers: true
    }
  });

  gsap.to("#cover", {
      attr: { r: 1045 },
      scrollTrigger: {
        trigger: ".section2",
        start: "50% center",
        end: '200%', 
        scrub: true,
        pin: true,
        markers: true
      }
  });
    }
}
}

</script>

<style scoped>

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  overflow-x: hidden;
}

section{
  height: 100vh;
  width: 100%;
}

.welcome{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 26px;
    font-weight: bold;
  }
}

.section1{
  background: url("https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  center center no-repeat;
  background-size: cover;
  
}

.section2{
  background: url("https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  center center no-repeat;
  background-size: cover;
}
</style>
    