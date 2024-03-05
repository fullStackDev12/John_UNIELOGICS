<template>
  <Header/>
  <transition  class="" >
  <div id="app">
   
      <div class="box" :style="{ width: boxWidth + '%', height: boxHeight + 'vh' }">
          <section class="home" :style="{ opacity: homeOpacity }" ref="hide">
  <div class="contanir">
    <div class="main-home">
      <h1>
        <span style="    text-decoration: line-through;">

        
        COMPETITIVE DISADVANTAGE.
      </span>
        <span class="span-1">
          WELCOME TO THE 
        </span>
        <span class="span-2">
        
          <div class="abcd">
              <img src="../assets/images/car.gif" alt="">

          </div>
          FUTURE
        </span>
      </h1>
    </div>
  </div>
</section>
      
      </div>
  <section class="hero" >
  <div class="contanir">
    <div class="hero-main">
      <div class="hero-tital">
        <p><span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M17.9688 40.6738C17.3193 40.6738 16.7725 40.8936 16.333 41.333C15.8936 41.7725 15.6738 42.3193 15.6738 42.9688C15.6738 43.6182 15.8936 44.165 16.333 44.6045C16.7725 45.0439 17.3193 45.2783 17.9688 45.3125C18.6182 45.2783 19.165 45.0439 19.6045 44.6045C20.0439 44.165 20.2637 43.6182 20.2637 42.9688C20.2637 42.3193 20.0439 41.7725 19.6045 41.333C19.165 40.8936 18.6182 40.6738 17.9688 40.6738ZM39.4043 31.25C39.7656 31.25 40.0781 31.1426 40.3564 30.9326C40.6348 30.7227 40.8203 30.4346 40.918 30.0781L46.3867 8.20312C46.4844 7.71484 46.377 7.26562 46.0693 6.86035C45.7617 6.45508 45.3613 6.25 44.873 6.25H4.6875C4.2334 6.25 3.85742 6.39648 3.56445 6.68945C3.27148 6.98242 3.125 7.3584 3.125 7.8125C3.125 8.2666 3.27148 8.64258 3.56445 8.93555C3.85742 9.22852 4.2334 9.375 4.6875 9.375H9.375V37.5H42.1875C42.6416 37.5 43.0176 37.3535 43.3105 37.0605C43.6035 36.7676 43.75 36.3916 43.75 35.9375C43.75 35.4834 43.6035 35.1074 43.3105 34.8145C43.0176 34.5215 42.6416 34.375 42.1875 34.375H12.5V31.25H39.4043ZM12.5 9.375H42.8711L38.1836 28.125H12.5V9.375ZM33.5938 40.6738C32.9443 40.6738 32.3975 40.8936 31.958 41.333C31.5186 41.7725 31.2988 42.3193 31.2988 42.9688C31.2988 43.6182 31.5186 44.165 31.958 44.6045C32.3975 45.0439 32.9443 45.2783 33.5938 45.3125C34.2432 45.2783 34.79 45.0439 35.2295 44.6045C35.6689 44.165 35.8887 43.6182 35.8887 42.9688C35.8887 42.3193 35.6689 41.7725 35.2295 41.333C34.79 40.8936 34.2432 40.6738 33.5938 40.6738Z" fill="black"/>
</svg></span>-Grow Without The Limitations</p>
<h2 style="font-weight: 600;">
  Access Corporate Level Logistics<span style="font-weight: 700;">
    At Small Ecommerce Scale
  </span>
</h2>

      </div>
    </div>

    
  </div>
  <div class="hero-box">
    <div class="box-tital">
      <p style="opacity: 0;">UnieLogics is the first ever multidimensional logistics company that allows the user to manage their ecommerce products with product research, accounting technology, supplier management.</p>
    </div>
    <div class="box-video">
     <img class="hiding" src="../assets/images/Frame 29.png" alt="">
    </div>
  </div>
</section>
<br>

<!-- <New  :style="{ width: newSectionWidth + 'px' , visibility: disk }"/> -->

<section class="new-section" :style="{ width: newSectionWidth + 'px' , visibility: disk }">
    <transition name="fade-out">
    <div v-if="showContent" class="cont"  @touchstart="gotos" @touchmove="gotos" @touchend="gotos" >
        <div class="main-homes">
          <h1>
              EMPOWER YOUR ONLINE

            <span class="span-2">
              <p>Acquire Products fromdistributors anywhere in the  <br>United States with ease.Deliver to your clients.</p>
              BUSINESS
            </span>
          </h1>

          <img v-if="isBounceAnimationEnabled" :class="{ 'new': isBounceAnimationEnabled }" src="../assets/images/Frame.png" alt="" @click="goto" style="cursor: pointer;" >

        </div>
      </div>
    </transition>
  </section>

 



<br>

<!-- <New1 :style="{ width: newSectionWidth1 + 'px' , visibility: disk }"/> -->


</div>
</transition>
</template>


<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import  New from './List.vue';
import  New1 from './dashboardshow.vue';
import Header from './header.vue'

gsap.registerPlugin(ScrollTrigger);

export default {

components: {
 
  New,
  New1,
  Header

},
data() {
  return {
    boxWidth: 0,
    boxHeight: 0, 
    boxOpacity: 0, 
    blurAmount: 0,
   
    homeOpacity:0,
    newSectionWidth: 0,
    newSectionWidth1:0,
    disk:'none',
    showContent:true,
    scrollCount: 0,
    isBounceAnimationEnabled:false,
    nextpage:false
    
  
  };
},

// created() {
  
    
//   },

mounted() {

  this.pagesize = window.innerWidth;
  if(this.pagesize == 1366 ||this.pagesize > 1366){
    console.log('screen', this.pagesize);
    this.boxWidth = 7.1
    this.boxHeight = 12

  }

  if(this.pagesize == 1600 ||this.pagesize > 1600){
    console.log('screen', this.pagesize);
    this.boxWidth = 0
    this.boxHeight = 0

  }


  if(this.pagesize == 1920 ||this.pagesize < 1920 && this.pagesize > 1600){
    console.log('screen', this.pagesize);
    this.boxWidth = 1
    this.boxHeight = 2

  }

  if(this.pagesize == 3024 && this.pagesize > 1920){
    console.log('screen', this.pagesize);
    this.boxWidth = 1
    this.boxHeight = 1

  }

  




  

  // gsap.to(".box", { rotate: -45.248, duration: 1, ease: "power2.inOut" });
  this.setupScrollAnimation();
},
methods: {

  goto(){
  

    this.showContent = false;
 
          setTimeout(() => {
            this.$router.push('/play');
          }, 1500);
        
     

  },

  gotos(event){

    if(this.nextpage){
  this.showContent = false;

      setTimeout(() => {
        this.$router.push('/play');
      }, 1500);
    }
  
  

},

  // handleWheels(event) {
  //     console.log('aaaaaa');
  //     // this.drop = true
  //     this.isBounceAnimationEnabled = true
  //     const deltaY = event.deltaY;

  //     console.log(deltaY);

  //     if (deltaY > 2) {
  //       console.log('Scrolling down');

  //       // Increment the scroll count
  //       this.scrollCount++;

  //       console.log(this.scrollCount);

  //       // Check if it's the second scroll down
  //       if (this.scrollCount === 2) {
  //     //     this.drop = true
  //     // this.isBounceAnimationEnabled = true
  //     console.log(this.isBounceAnimationEnabled);
  //         this.showContent = false;
  //         setTimeout(() => {
  //           this.$router.push('/dashboard');
  //         }, 1500);
  //       }
  //     } else if (deltaY < 0) {
  //       console.log('Scrolling up');
  //     }
  //   },

  setupScrollAnimation() {
      
    const timeline = gsap.timeline({

      
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "bottom top",
        scrub: 5,

        
      }
      
    });
  //   timeline.to(this.$data, { boxWidth: 170, boxHeight: 170, duration: 0 });


  //   timeline.to(this.$data, { boxWidth: window.innerWidth, duration: 1, ease: "power2.inOut" });
  //   timeline.to(this.$data, { boxHeight: window.innerHeight, duration: 1, ease: "power2.inOut" });

  timeline.to(this.$data, { 
      // boxWidth: window.innerWidth, 
      // boxHeight: window.innerHeight, 

      boxWidth: 100, 
      boxHeight: 140, 
      width:"100%",
      height:"130vh",
      boxOpacity: 1, // Make the box fully visible
      blurAmount: 20,
      homeOpacity:1,
      duration: 4, 
      ease: "power2.inOut" 
    });

    timeline.to(".box", { rotate: 0, x: "7.5%", y: "-65.5%", duration: 4, ease: "power2.inOut" },0)

    timeline.to(".span-2 img", {
      x: "-250%", 
      duration: 0.1, 
      ease: "power1.inOut",
      onComplete: () => {
        console.log('start');
        resetHideTimeline();
        // Trigger the hide animation after the car animation is done
        hideTimeline.play();
      },
      
  }, "-=0.1");

  // const carTimeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".box",
  //       start: "top center",
  //       end: "bottom top",
  //       scrub: 5,
  //     },
  //   });

   

    const hideTimeline = gsap.timeline({
      paused: true,
     
      onComplete: () => {
        console.log('now');

        setTimeout(() => {
        this.$router.push('/dashboard');
      }, 500);


        // resetHideTimelines();
        console.log('name',this.$data);
      

      
        // newSectionTimeline.play();
        
      },
    });
  

    hideTimeline.to(this.$data, {
      
      boxHeight: 0,
      duration: 1,
      ease: "linear",
    }, 0);

    // Animation for the new section
    // const newSectionTimeline = gsap.timeline({
   
    //   paused: true,
    //   scrollTrigger: {
    //     trigger: ".new-section",
    //     start: "top center",
    //     end: "bottom top",
    //     scrub: 3,
    //   },

      
    //   onComplete: () => {

      
    //       this.isBounceAnimationEnabled = true
    //       console.log('play')

    //       setTimeout(() => {
    //         console.log('nowssss');
    //     this.nextpage = true
    //   }, 3500);
        

       
    //   },
    // });

    //         newSectionTimeline.to(".new-section", {
    //           width: "100%",
    //   // height:"115vh",
    //       // scale: 1, 
    //       // opacity: 1, 
    //       y: "0%",
    //       left: 0,
    //       duration: 2, // Adjust the duration as needed
    //       ease: "power4.easeIn",
    //     });

       

    //     gsap.set(".new-section", {
    //       y: "100%", // Move the section from above the viewport
    //       width: "100%",
    //       height:"100%",
    //       duration: 2,
    //       left:"50%",
    //       ease: "power4.easeIn",
    //     });

    //     const resetHideTimeline = () => {
    //       console.log('bbbbbbbbbbbb');
    //       hideTimeline.progress(0); // Reset progress to 0
    //       hideTimeline.pause(); // Pause the timeline
    //   };

    //   const resetHideTimelines = () => {
    //       console.log('bbbbbbbbbbbb');
    //       newSectionTimeline.progress(0); // Reset progress to 0
    //       newSectionTimeline.pause(); // Pause the timeline
    //   };




        const resetHideTimeline = () => {
          console.log('bbbbbbbbbbbb');
          hideTimeline.progress(0); // Reset progress to 0
          hideTimeline.pause(); // Pause the timeline
      };

      const resetHideTimelines = () => {
          console.log('bbbbbbbbbbbb');
          newSectionTimeline.progress(0); // Reset progress to 0
          newSectionTimeline.pause(); // Pause the timeline
      };





  },

  


},
};
</script>

<style scoped>


.fade-in {
  animation: fadeIn 1.5s !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.fade-out-enter-active, .fade-out-leave-active {
  transition: opacity 0.5s;
}

.fade-out-enter, .fade-out-leave-to  {
  opacity: 0;
}

.new {
    width: 35%;
    position: absolute;
    top: 4% !important;
    left: 32%;
    z-index: 0;
    opacity: 0;
    visibility: hidden;
    animation: showAndBounce 2s cubic-bezier(0.68, -2.55, 0.27, 3.55) 0.5s forwards;
}
.main-homes{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px 0px;
}
.main-homes h1 {
 
  position: relative !important;
  z-index: 1 !important;
}
span.span-2 p {
  color: #FFF;
  font-size:34px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px; 
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
  /* width: 100%;
  background-color: #589AD3;
  padding: 240px 113px 550px 113px !important; */
  width: 100%;
    background-color: #589AD3;
    padding: 240px 113px 550px 113px !important;
    height: 10vh !important;
    margin-top: 185px;
}
.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 125vh !important;
  
}


.box {
  overflow: hidden;
    position: fixed;
    top: 56.5%;
    right: 8.3%;
    transform: translate(8%, -62.5%) rotate(-45.1124deg);
    background-color: #589ad3;
    z-index: 999;
}

.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 125vh !important;
}


@keyframes showAndBounce {
    0% {
      top: -100px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-100%) scale(0.5);
    }
    50% {
      opacity: 1;
      visibility: visible;
      transform: translateY(-50px) scale(1) ;
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
  }
.main-homes h1 {
  color: #f1f1ef;
  font-size: 133px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 90%;
  position: relative !important;
  z-index: 1 !important;
}

section.homes {
  width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}
#app {
/* height: 180vh;  */
overflow: hidden;
}

.hero {
transition: filter 1s ease; 
}

.abcd{
  width: 80%;
}
.abcd img {
  transform: translate(150%, 0px);
  transition: 0.3s linear;
}
.main-home {
  overflow: scroll;

 
}


.abcd img {
    width: 25%;
}
/* .home {
transition: opacity 1s ease; 
} */

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
@media screen and (max-width: 1920px){
  .fade-in {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-out-enter-active, .fade-out-leave-active {
  transition: opacity 0.5s;
}

.fade-out-enter, .fade-out-leave-to  {
  opacity: 0;
}

.new {
    width: 38%;
    position: absolute;
    top: 15% !important;
    left: 30%;
    z-index: 0;
    opacity: 0;
    visibility: hidden;
    animation: showAndBounce 2s cubic-bezier(0.68, -2.55, 0.27, 3.55) 0.5s forwards;
}
.main-homes{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px 0px;
}
.main-homes h1 {
 
  position: relative !important;
  z-index: 1 !important;
}
span.span-2 p {
  color: #FFF;
  font-size:34px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px; 
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
  /* width: 100%;
  background-color: #589AD3;
  padding: 240px 113px 550px 113px !important; */
  width: 100%;
    background-color: #589AD3;
    padding: 240px 113px 550px 113px !important;
    height: 10vh !important;
    margin-top: 185px;
}
.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 125vh !important;
  
}


.box {
  overflow: hidden;
    position: fixed;
    top: 56.5%;
    right: 7.3%;
    transform: translate(8%, -62.5%) rotate(-45.1124deg);
    background-color: #589ad3;
    z-index: 999;
}

.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 125vh !important;
}


@keyframes showAndBounce {
    0% {
      top: -100px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-100%) scale(0.5);
    }
    50% {
      opacity: 1;
      visibility: visible;
      transform: translateY(-50px) scale(1) ;
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
  }
.main-homes h1 {
  color: #f1f1ef;
  font-size: 98px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 90%;
  position: relative !important;
  z-index: 1 !important;
}

section.homes {
  width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}
#app {
/* height: 180vh;  */
overflow: hidden;
}

.hero {
transition: filter 1s ease; 
}

.abcd{
  width: 80%;
}
.abcd img {
  transform: translate(150%, 0px);
  transition: 0.3s linear;
}
.main-home {
  overflow: scroll;

 
}
.abcd img {
    width: 25%;
}
/* .home {
transition: opacity 1s ease; 
} */

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
  width: 42%;
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
  .fade-in {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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







@media screen and (max-width: 1600px){
  .fade-in {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


  .box {
    overflow: hidden;
    position: fixed;
    top: 44.5%;
    right: 7.6%;
    transform: translate(8%, -62.5%) rotate(-49.1124deg);
    background-color: #589ad3;
    z-index: 999;
}
}
@media screen and (max-width: 1366px){

  .fade-in {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.cont{
  width: 100%;
  max-width: 1170px;
      margin: 0 auto;
  
}
  span.span-2 p {
  color: #FFF;
  font-size: 20px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 30px !important;
  text-align: left;
  font-family: 'NATS', sans-serif;
}
.main-homes h1 {
  color: #F1F1EF;
  font-size: 70px !important;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 100%;
  max-width: revert;
  text-align: center !important;
}
.new {
  width: 33% ;
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
  height: 125vh !important;
}
}

@media screen and (max-width: 1366px){


  .box {
overflow: hidden;

position: fixed;
  top: 64.5%;
    right: 7.5%;
 
  transform: translate(8%, -62.5%) rotate(-44.1124deg) ;
  background-color: #589ad3;
  z-index: 999;
}
}

@media screen and (max-width: 600px){
  .fade-in {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

    .hero-tital p {
        color: #000;
        font-family: 'NATS', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .hero-tital p span svg {
        width: 20px;
        height: 20px;
    }
    .hero-tital h2 span {
        padding-left: 0px;
    }
    .hero-tital h2 {
        color: #161543;
        font-family: 'Poly Sans', sans-serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0px;
    }
    section.hero{
      width: 100%;
    background-color: #F5F2FF;
    padding: 244px 20px 240px 20px;
    background-image: url(/src/assets/images/425img.png);
    /* background-position-x: left; */
    background-size: 100%;
    background-position-y: 15%;
    background-repeat: no-repeat;
    height: 100vh;
}
    .hero-box {
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        padding: 135px 0px 0px 0px;
        display: none;
    }
    .main-home h1 {
        color: #F1F1EF;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-family: 'Poly Sans', sans-serif;
        width: 100%;
    }
    .main-home h1 span {
        text-align: left;
        display: flex;
        justify-content: flex-start;
        flex-direction: column-reverse;
    }

    .main-advanced {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-start !important;
    }
    .advanced-tital p {
        color: #000;
        font-family: 'NATS', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 0px;
        display: none !important;
    }
    .advanced-tital{
        width: 80% !important;
    }
    .advanced-tital h2 {
        font-family: 'Poly Sans', sans-serif;
        color: #161543;
        font-size: 40px !important;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding-top: 10px;
    }
    section.advanced {
        width: 100%;
        background: #F5F2FF;
        padding: 30px 20px !important;
        background-image: url(/src/assets/images/HELLO.png);
        background-position: left;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .advanced-box {
        position: relative;
        z-index: 1;
        width: 100% !important;
        height: 290px !important;
        border-radius: 20px;
        background: #B44E9D;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .boxing-1 {
        height: 290px !important;
        background-color: #589AD3;
        border-radius: 20px 0px 0px 20px;
        width: 38%;
        padding: 15px 15px 0px 15px;
    }
    .boxing-btn-box button {
        width: 100%;
        flex-shrink: 0;
        padding: 5px 0px !important;
        background-color: transparent;
        border: none;
        border-radius: 20px;
    }
    span.icon-box h2 {
        color: #FFF;
        font-size: 14px !important;
        font-style: normal;
        font-weight: 400;
        line-height: 34px;
        font-family: 'NATS', sans-serif;
        text-decoration: none;
    }
    span.icon-box img {
        width: 25px !important;
    }
    span.error-icon svg {
        width: 12px !important;
        height: 12px !important;
    }
    span.icon-box{
        display: flex;
        align-items: center;
        gap: 5px !important;
        width: 90% !important;
    }
    .boxing-btn-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0px !important;
        padding: 12px 0px 12px 0px !important;
    }
    .boxing-last-btn button a {
        color: #FFF;
        font-size: 12px !important;
        font-family: 'NATS', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
        text-decoration: none;
        text-align: center;
    }
    .boxing-2 {
        width: 62%;
        height: 290px !important;
        border-radius: 0px 20px 20px 0px;
    }
    .main-advanced{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    .advanced-btn
     {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 19px;
        padding-top: 25px;
        position: absolute;
        top: 100%;
    }
    button.SignUp {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px !important;
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
        background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
        color: #FFF;
        border: none;
        font-size: 14px !important;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        font-family: 'NATS', sans-serif;
        width: 140px !important;
        padding: 14px 0px !important;
    }
    button.Login {
        border-radius: 8px !important;
        border: 2px solid #1E1E1E;
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px !important;
        padding: 12px 0px !important;
        color: #1E1E1E;
        font-size: 14px !important;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        font-family: 'NATS', sans-serif;
    }
    .advanced-btn {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 19px;
        padding-top: 25px;
        justify-content: space-around;
    }
    section.advanced
     {
        width: 100%;
        background: #F5F2FF;
        background-image: url(/src/assets/images/full425.png) !important;
        background-position: left;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .boxing-1
     {
        background-color: #589AD3;
        border-radius: 20px 0px 0px 20px;
        width: 38% !important;
        padding: 15px 15px 0px 15px;
    }
    .Exciting-btn-box {
        width: 100% !important;
        display: flex;
        align-items: center;
        padding-top: 10px !important;
        justify-content: flex-end;
        gap: 5px !important;
    }
    .Exciting-btn-box button{
        border-radius: 8px !important ;
        border: 2px solid #1E1E1E;
        background: #FFF;
        padding: 5px !important;
    }
    .Exciting-btn-box button a svg {
        width: 20px !important;
        height: 20px !important;
    }
    .Takes-box {
        width: 100%;
        display: flex;
        align-items: center !important;
        gap: 35px;
        padding-top: 20px !important;
        flex-direction: column !important;
    }
    .Takes-boxing {
        display: flex;
        width: 100% !important;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        background-image: url(/src/assets/images/Frame94.png);
        justify-content: center;
        padding: 22px !important;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    section.Takes {
        width: 100%;
        padding: 50px 40px !important;
        background: #F5F2FF;
        background: none !important;
    }
    .Takes-tital h2 {
        color: #161543;
        font-size: 40px !important;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-family: 'Poly Sans', sans-serif;
    }
    .advanced-box {
        position: relative;
        z-index: 1;
        width: 50%;
        height: 465px;
        border-radius: 20px;
        background: #B44E9D;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 34px !important;
    }
    .Takes-tital span p {
        color: #000;
        font-size: 24px !important;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        font-family: 'NATS', sans-serif;
    }
    .Takes-tital span svg {
        width: 30px !important;
        height: 30px !important;
    }
    .Takes-boxing h2 {
        color: #F5F2FF;
        font-size: 80px !important;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-family: 'Poly Sans', sans-serif;
    }
    section.home{
        width: 100%;
        background-color: #589AD3;
        padding: 95px 20px !important;
    }
    .main-home {
    width: 80% !important;
    padding: 0px 0px !important;
}
.abcd img {
    width: 90%;
}
.main-homes h1{
    color: #F1F1EF;
    font-size: 40px !important;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: 'Poly Sans', sans-serif;
    width: 100%;
    text-align: left !important;
}
.main-homes {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px !important;
}
.main-homes h1 span {
    text-align: center;
    display: flex;
    padding-top: 0px !important;
    align-items: flex-start !important;
    flex-direction: column-reverse;

}
span.span-2 p {
    color: #FFF;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 400;
    line-height: 25px !important;
    text-align: center;
    font-family: 'NATS', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top:350px;
}
.new {
    width: 64% ;
    position: absolute;
    top: 32% !important;
    left: 14%;
    z-index: 0;
}
span.icon-box h2[data-v-975e1f59] {
    color: #FFF;
    font-size: 15px !important;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    font-family: 'NATS', sans-serif;
    text-decoration: none;
}
}


@media screen and (max-width: 375px){
  .fade-in {
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

    .main-home {
        width: 100% !important;
        padding: 0px 0px !important;
    }
    .new-section {
    width: 0;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: #589AD3;
    padding: 70px 0px !important;
    height: 100vh !important;
}
.new-section {
    width: 0;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: #589AD3;
    padding: 70px 0px !important;
    height: 100vh !important;
}
span.span-2 p {
    color: #FFF;
    font-size: 15px !important;
    font-style: normal;
    font-weight: 400;
    line-height: 20px !important;
    text-align: center;
    font-family: 'NATS', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 245px;
}

.new-detail-box h1 {
        font-size: 32px !important;
        color: #F1F1EF;
        font-family: 'Poly Sans', sans-serif;
        text-align: center;
        font-weight: 500;
        padding: 20px 0px 0px 0px;
    }


    .new {
    width: 58%;
    position: absolute;
    top: 32% !important;
    left: 14%;
    z-index: 0;
}


.new {
    width: 58%;
    position: absolute;
    top: 32% !important;
    left: 14%;
    z-index: 0;
}
}

/* @media screen and (max-width: 3024px){
  section.hero {
    width: 100%;
    background-color: #F5F2FF;
   
    padding: 800px 50px 600px 50px;

    background-image: url(/src/assets/images/Frame_new.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
section.home[data-v-6b004c38] {
    width: 100%;
    background-color: #589AD3;
    padding: 1000px 0px;
    height: 10vh !important;
    margin-top: 185px;
}
.hiding{
  display: none;
}
} */



</style>

