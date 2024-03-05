<template>
  <section class="new-section" ref="newSection" style="width: 100% !important; opacity: 1 !important;">
    <div class="cont">
        <div class="main-homes">
          <h1>
              EMPOWER YOUR ONLINE

            <span class="span-2">
              <p>Acquire Products fromdistributors anywhere in the  <br>United States with ease.Deliver to your clients.</p>
              BUSINESS
            </span>
          </h1>

          <img class="new" src="../assets/images/Frame.png" alt="">

        </div>
      </div>
  </section>


  <!-- <News :style="{ width: newSectionWidth1 + 'px' , visibility: disk }"/> -->

</template>
<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);
import  News from './dashboardshow.vue';
export default {
name: "Other",

components: {
   
   News,
 
},
data(){
  return{
    newSectionWidth1: 0,
    disk:'none',
    boxWidth: 100,
     
  }
},


mounted() {
  this.$refs.newSection.style.width = '100%';
    this.$refs.newSection.style.opacity = 1;

    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
      const newSectionTimeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
      
          trigger: this.$refs.newSection,
          start: "top center",
          end: "bottom top",
          scrub: 3,
        },
      });

      // Animate the width of the new section
      // newSectionTimeline.to(this.$refs.newSection, {
    
      //   duration: 3,
      //   ease: "power2.inOut",
      // });

      const hideAndShowTimeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: ".new-section",
          start: "top center",
          end: "bottom top",
          scrub: 3,
        },
        onComplete: () => {
          console.log('start');
         
          gsap.to(".advanced", { /* your animation properties here */ });
        },
      });

      // Animation for hiding the current section
      hideAndShowTimeline.to(".new-section", {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
      });

      // Animation for showing the next section
      hideAndShowTimeline.to(".advanced", {
        width: "100%",
        height: "100vh",
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
      });

     
    },
  },

}

</script>

<style scoped>


.new {
  width: 46% !important;
  position: absolute;
  top:-30px !important;
  left: 29%;
  z-index: 0;
   opacity: 0; /* Initially set opacity to 0 */
  visibility: hidden; /* Initially set visibility to hidden */
  animation: showAndBounce 2s cubic-bezier(0.68, -2.55, 0.27, 3.55) 1s forwards
}
.main-homes h1 {
 
  position: relative !important;
  z-index: 1 !important;
}
span.span-2 p {
  color: #FFF;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px; /* 110% */
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.main-homes h1 span {
  text-align: center;
  display: flex;
  justify-content: space-between !important;
  padding-top: 35px !important;
  align-items: center !important;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 240px 113px 550px 113px !important;
}
.new-section {
  width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}
@keyframes showAndBounce {
    0% {
      top: -100px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-100%) scale(0.6);
    }
    50% {
      opacity: 1;
      visibility: visible;
      transform: translateY(-80px) scale(1) ;
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
}

@media screen and (max-width: 1600px){
  span.span-2 p {
  color: #FFF;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 194px 100px 480px 100px !important;
}
.main-homes h1 span {
  text-align: center;
  display: flex;
  justify-content: space-between !important;
  padding-top: 20px !important;
  align-items: center !important;
}
.main-homes h1 {
  color: #F1F1EF;
  font-size: 99px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 100%;
  max-width: revert;
  text-align: center !important;
}
span.span-2 p {
  color: #FFF;
  font-size: 28px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 40px !important;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.new {
  width: 42% !important;
  position: absolute;
  top: 0;
  left: 30%;
  z-index: 0;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 165px 100px 435px 100px !important;
}
}

@media screen and (max-width: 1440px){
  span.span-2 p {
  color: #FFF;
  font-size: 24px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 34px !important;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.main-homes h1 {
  color: #F1F1EF;
  font-size: 75px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 100%;
  max-width: revert;
  text-align: center !important;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 160px 100px 410px 100px !important;
}
}

@media screen and (max-width: 1366px){
  .advanced{
    width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
  }

.cont{
  width: 100%;
  max-width: 1170px;
      margin: 0 auto;
  
}
  span.span-2 p {
  color: #FFF;
  font-size: 22px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 30px !important;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.main-homes h1 {
  color: #F1F1EF;
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 100%;
  max-width: revert;
  text-align: center !important;
}
.new {
  width: 36% !important;
  position: absolute;
  top: 0;
  left: 34%;
  z-index: 0;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 150px 100px 300px 100px !important;
}

.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}
}
</style>

<!-- <template>
 
    <section class="new-section" ref="newSectionRef">
      <div class="cont">
        <div class="main-homes">
          <h1>
            EMPOWER YOUR ONLINE
            <span class="span-2">
              <p>
                Acquire Products from distributors anywhere in the <br />
                United States with ease. Deliver to your clients.
              </p>
              BUSINESS
            </span>
          </h1>
          <img class="new" src="../assets/images/Frame.png" alt="">
        </div>
      </div>
    </section>

    <div class="dashboard-container" v-show="disk === 'block'">
      <Dashborad1 :style="{ width: newSectionWidth + 'px' }" />
    </div>

    

</template>

<script>
import Dashborad1 from './dashboardshow.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Other",
  components: {
    Dashborad1,
  },
  data() {
    return {
      newSectionWidth: 0,
      disk: 'none',
    };
  },
  mounted() {
    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
      const hideTimeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          // Trigger the new section animation after hiding the box
          newSectionTimeline.play();
        },
      });

      hideTimeline.to(this.$refs.newSectionRef.$el, {
        width: "0%",
        duration: 1,
        ease: "linear",
      }, 0);

      // Animation for the new section
      const newSectionTimeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: this.$refs.newSectionRef.$el,
          start: "top center",
          end: "bottom top",
          scrub: 3,
        },
      });

      // Animate the width of the new section
      newSectionTimeline.to(this.$refs.newSectionRef.$el, {
        width: "100%",
        duration: 3,
        ease: "power2.inOut",
        onComplete: () => {
          this.disk = 'block'; // Make Dashborad1 component visible after the new section is fully shown
        },
      });
    },
  },
};
</script>

<style scoped>

.advanced {
  width: 0;
  overflow: hidden;
  position: relative;

  width: 100%;
    background-color: #589AD3;
    padding: 149px 0px !important;
    height: 100vh !important;
}
.new {
  width: 46% !important;
  position: absolute;
  top:-30px !important;
  left: 29%;
  z-index: 0;
   opacity: 0; /* Initially set opacity to 0 */
  visibility: hidden; /* Initially set visibility to hidden */
  animation: showAndBounce 2s cubic-bezier(0.68, -2.55, 0.27, 3.55) 1s forwards
}
.main-homes h1 {
 
  position: relative !important;
  z-index: 1 !important;
}
span.span-2 p {
  color: #FFF;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px; /* 110% */
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.main-homes h1 span {
  text-align: center;
  display: flex;
  justify-content: space-between !important;
  padding-top: 35px !important;
  align-items: center !important;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 240px 113px 550px 113px !important;
}
.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}
@keyframes showAndBounce {
    0% {
      top: -100px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-100%) scale(0.6);
    }
    50% {
      opacity: 1;
      visibility: visible;
      transform: translateY(-80px) scale(1) ;
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
}

@media screen and (max-width: 1600px){
  span.span-2 p {
  color: #FFF;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 194px 100px 480px 100px !important;
}
.main-homes h1 span {
  text-align: center;
  display: flex;
  justify-content: space-between !important;
  padding-top: 20px !important;
  align-items: center !important;
}
.main-homes h1 {
  color: #F1F1EF;
  font-size: 99px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 100%;
  max-width: revert;
  text-align: center !important;
}
span.span-2 p {
  color: #FFF;
  font-size: 28px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 40px !important;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.new {
  width: 42% !important;
  position: absolute;
  top: 0;
  left: 30%;
  z-index: 0;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 165px 100px 435px 100px !important;
}
}

@media screen and (max-width: 1440px){
  span.span-2 p {
  color: #FFF;
  font-size: 24px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 34px !important;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.main-homes h1 {
  color: #F1F1EF;
  font-size: 75px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 100%;
  max-width: revert;
  text-align: center !important;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 160px 100px 410px 100px !important;
}
}

@media screen and (max-width: 1366px){

.cont{
  width: 100%;
  max-width: 1170px;
      margin: 0 auto;
  
}
  span.span-2 p {
  color: #FFF;
  font-size: 22px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 30px !important;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.main-homes h1 {
  color: #F1F1EF;
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 100%;
  max-width: revert;
  text-align: center !important;
}
.new {
  width: 36% !important;
  position: absolute;
  top: 0;
  left: 34%;
  z-index: 0;
}
section.home {
  width: 100%;
  background-color: #589AD3;
  padding: 150px 100px 300px 100px !important;
}

.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}
}
</style> -->
