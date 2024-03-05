<template>
    
    <transition name="zoom-out" class="zoom-out" v-if="showContent" >
    <section class="advanced">
        <div class="main-advanced"  @wheel="handleWheel" >
          <div class="advanced-tital" v-show="dd">
            <p><span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M17.9688 40.6738C17.3193 40.6738 16.7725 40.8936 16.333 41.333C15.8936 41.7725 15.6738 42.3193 15.6738 42.9688C15.6738 43.6182 15.8936 44.165 16.333 44.6045C16.7725 45.0439 17.3193 45.2783 17.9688 45.3125C18.6182 45.2783 19.165 45.0439 19.6045 44.6045C20.0439 44.165 20.2637 43.6182 20.2637 42.9688C20.2637 42.3193 20.0439 41.7725 19.6045 41.333C19.165 40.8936 18.6182 40.6738 17.9688 40.6738ZM39.4043 31.25C39.7656 31.25 40.0781 31.1426 40.3564 30.9326C40.6348 30.7227 40.8203 30.4346 40.918 30.0781L46.3867 8.20312C46.4844 7.71484 46.377 7.26562 46.0693 6.86035C45.7617 6.45508 45.3613 6.25 44.873 6.25H4.6875C4.2334 6.25 3.85742 6.39648 3.56445 6.68945C3.27148 6.98242 3.125 7.3584 3.125 7.8125C3.125 8.2666 3.27148 8.64258 3.56445 8.93555C3.85742 9.22852 4.2334 9.375 4.6875 9.375H9.375V37.5H42.1875C42.6416 37.5 43.0176 37.3535 43.3105 37.0605C43.6035 36.7676 43.75 36.3916 43.75 35.9375C43.75 35.4834 43.6035 35.1074 43.3105 34.8145C43.0176 34.5215 42.6416 34.375 42.1875 34.375H12.5V31.25H39.4043ZM12.5 9.375H42.8711L38.1836 28.125H12.5V9.375ZM33.5938 40.6738C32.9443 40.6738 32.3975 40.8936 31.958 41.333C31.5186 41.7725 31.2988 42.3193 31.2988 42.9688C31.2988 43.6182 31.5186 44.165 31.958 44.6045C32.3975 45.0439 32.9443 45.2783 33.5938 45.3125C34.2432 45.2783 34.79 45.0439 35.2295 44.6045C35.6689 44.165 35.8887 43.6182 35.8887 42.9688C35.8887 42.3193 35.6689 41.7725 35.2295 41.333C34.79 40.8936 34.2432 40.6738 33.5938 40.6738Z" fill="black"/>
            </svg></span>The UnieLogics Your Droppshipping Patner</p>
            <h2>Leverage advanced algorithms for precise and profitable product discovery.</h2>
            <div class="advanced-btn">
              <button class="SignUp">Sign Up</button>
              <button class="Login">Login</button>
            </div>
          </div>
          <div class="advanced-box" :style="{ width: boxWidth + '%', height: boxHeight + 'px'}">
            <div class="boxing-1">
              <div class="logo-boxing">
                <img src="../assets/images/Mask.png" alt="">
              </div>
              <div class="boxing-btn-box" >
                <button><a href="#"> 
               <span class="icon-box">
                <img src="../assets/images/Group 6.png" alt="">
                <h2>Products</h2>
               </span>
               <span class="error-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                  <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                </svg>
               </span>
                </a></button>
                <button><a href="#"> 
                  <span class="icon-box">
                   <img src="../assets/images/Group 7.png" alt="">
                   <h2>Suppliers</h2>
                  </span>
                  <span class="error-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                      <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                    </svg>
                  </span>
                   </a></button>
                   <button><a href="#"> 
                    <span class="icon-box">
                     <img src="../assets/images/Group 8.png" alt="">
                     <h2>Academy</h2>
                    </span>
                    <span class="error-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                        <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                      </svg>
                    </span>
                     </a></button>
                     <button><a href="#"> 
                      <span class="icon-box">
                       <img src="../assets/images/Group 9.png" alt="">
                       <h2>Profile</h2>
                      </span>
                      <span class="error-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                          <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                        </svg>
                      </span>
                       </a></button>
              </div>
  
              <div class="boxing-last-btn">
                <button @click="setupScrollAnimation"><a >UnieLogics</a></button>
              </div>
            </div>
            <div class="boxing-2">
  
            </div>
          </div>
        </div>
      </section>
    </transition>
      
    </template>
  
    <script>
  
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
  gsap.registerPlugin(ScrollTrigger);
  export default {
    name: "Other",
    data(){
      return{
        showContent: true,
        dd: true,
        boxWidth: 50,
        boxHeight: 465, 
        dd:true,
        scrollCount: 0,
         
      }
    },
  
    created() {
      console.log('aaaaa');
      // this.showContent = false;
      
      setTimeout(() => {
        console.log('ssss');
        this.showContent = true;
      }, 1500);
    },
  
    mounted() {
      this.setupScrollAnimation();
      this.scrollToTop();
    },
  
    // beforeRouteLeave(to, from, next) {
    //   this.showContent = false; 
    //   setTimeout(() => {
    //     next();
    //   }, 2000); 
    // },
  
    methods: {
  
      scrollToTop() {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      handleWheel(event) {
        const deltaY = event.deltaY;
  
        console.log(deltaY);
  
        if (deltaY > 2) {
          console.log('Scrolling down');
  
          // Increment the scroll count
          this.scrollCount++;
  
          console.log(' count',this.scrollCount);
  
          // Check if it's the second scroll down
          if (this.scrollCount > 5) {
          //   this.dd = false;
            setTimeout(() => {
              this.$router.push('/dashboard');
            }, 1500);
          }
          else{
            this.dd = true;
          }
        } else if (deltaY < 0) {
          console.log('Scrolling up');
        }
      },
  
      setupScrollAnimation() {
        const boxTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".advanced-box",
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        });
  
        boxTimeline.to(this.$data, {
          boxWidth: 100,
          boxHeight: 600,
          alpha: 'fixed',
          duration: 2,
          ease: "power2.inOut",
        });
  
        const titleTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".advanced-tital",
            start: "top center",
            end: "bottom top",
            scrub: 2,
          },
        });
  
        titleTimeline.to(".advanced-tital", {
          width: "0%", 
          dd: false,
       
          duration: 2,
          ease: "power2.inOut",
        });
      },
  
  
  
      // setupScrollAnimation() {
      //   const timeline = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".advanced-box",
      //       start: "top center",
      //       end: "bottom top",
      //       scrub: 2,
      //     }
      //   });
  
      
  
      // timeline.to(this.$data, { 
  
      //     boxWidth: 100, 
      //     boxHeight:600, 
      //     alpha:'fixed',
      //     duration: 4, 
      //     ease: "power2.inOut",
        
          
      //   });
      // },
    },
  
   
  }
  
  </script>
  
  <style scoped>
  
  
  /* .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-out-enter, .fade-out-leave-to  {
    opacity: 0;
  } */
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  .fade-out {
    animation: fadeOut 1.5s;
  }
  
  @keyframes zoomOut {
    from {
      transform: scale(0.3);
    }
    to {
      transform: scale(1); 
    }
  }
  
  .zoom-out {
    animation: zoomOut 1.5s ease-out;
  }
  
  .linear-hide-enter-active,
  .linear-hide-leave-active {
    transition: opacity 0.5s, transform 0.5s; /* Adjust the duration as needed */
  }
  
  .linear-hide-enter,
  .linear-hide-leave-to /* .linear-hide-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(100%); /* Adjust the translation amount as needed */
  }
  
  
  .zoom-out-enter-active, .zoom-out-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  
  .zoom-out-enter, .zoom-out-leave-to /* .zoom-out-leave-active in <2.1.8 */ {
    transform: scale(1);
    opacity: 1;
  }
  
  .zoom-out-enter-to, .zoom-out-leave /* .zoom-out-leave-active in <2.1.8 */ {
    transform: scale(0.8);
    opacity: 0;
  }
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
      width: 0px;
    }
  
  section.hero {
      width: 100%;
      background-color: #F5F2FF;
      /* height: 1024px; */
      padding: 340px 50px 30px 50px;
      /* background-image: url(./assets/images/Group\ 24.png); */
      background-image: url(../assets/images/Frame_new.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
  }
  
  .contanir {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
  }
  
  .hero-main {
      width: 100%;
  }
  
  .hero-tital {
      width: 100%;
  }
  
  .hero-tital p {
      color: #000;
      font-family: 'NATS', sans-serif;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0px;
      display: flex;
      align-items: center;
      gap: 5px;
  }
  
  .hero-tital p span svg {
      width: 50px;
      height: 50px;
  }
  
  .hero-tital h2 {
      color: #161543;
      font-family: 'Poly Sans', sans-serif;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin: 0px;
  }
  
  .hero-tital h2 span {
      padding-left: 172px;
  }
  
  .hero-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 145px 0px 0px 0px;
  }
  
  .box-tital {
      width: 40%;
  }
  
  .box-video {
      width: 24%;
  }
  
  .box-tital p {
      color: #000;
      font-family: sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 125% */
  }
  
  .box-video img {
      width: 100%;
  }
  
  section.home {
      width: 100%;
      background-color: #589AD3;
      padding: 305px 0px;
  }
  
  .main-home {
      width: 100%;
  }
  
  .main-home h1 {
      color: #F1F1EF;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 100%;
  }
  
  .main-home h1 span {
      text-align: center;
      display: flex;
      justify-content: flex-end;
  }
  
  span.span-2 {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 18px;
  }
  
  section.advanced {
      width: 100%;
      background: #F5F2FF;
      padding: 237px 50px;
      /* background-image: url(../assets/images/HELLO.png); */
      background-image: url(../assets/images/HELLO.png);
  
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
  }
  
  .main-advanced {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .advanced-tital {
      width: 46%;
  }
  
  .advanced-box {
      width: 50%;
      height: 605px;
      border-radius: 20px;
      background: #B44E9D;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .advanced-box img {
      width: 100%;
  }
  
  .advanced-tital p {
      color: #000;
      font-family: 'NATS', sans-serif;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 0px;
  }
  
  .advanced-tital h2 {
      font-family: 'Poly Sans', sans-serif;
      color: #161543;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding-top: 10px;
  }
  
  .advanced-btn {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 19px;
      padding-top: 50px;
  }
  
  button.SignUp {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      color: #FFF;
      border: none;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      width: 218px;
      padding: 24px 0px;
  }
  
  button.Login {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 218px;
      padding: 24px 0px;
      color: #1E1E1E;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .advanced-box img {
      width: 100%;
  }
  
  .boxing-1 {
      /* height: 605px; */
      background-color: #589AD3;
      border-radius: 20px 0px 0px 20px;
      width: 38%;
      padding: 30px 30px 0px 30px;
  }
  
  .boxing-2 {
      width: 62%;
      height: 603px;
      border-radius: 0px 20px 20px 0px;
  }
  
  .logo-boxing {
      width: 16%;
  }
  
  .logo-boxing img {
      width: 100%;
  }
  
  .boxing-btn-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      padding: 60px 0px 60px 0px;
  }
  
  .boxing-btn-box button a {
      display: flex;justify-content: space-between;align-items: center;width: 100%;text-decoration: none;}
  
      
  .boxing-btn-box button {
      width: 100%;
      flex-shrink: 0;
      padding: 14px 20px;
      background-color: transparent;
      border: none;
      border-radius: 20px;
  }
  
  span.icon-box {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 72%;
  }
  
  span.icon-box h2 {
      color: #FFF;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 116.667% */
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  span.error-icon {
      width: 12%;
  }
  
  span.error-icon svg {
      width: 30px;
      height: 30px;
  }
  
  span.icon-box img {
      width: 47px;
  }
  
  .boxing-last-btn {
      width: 100%;
  }
  
  .boxing-last-btn button {
      width: 100%;
      background: transparent;
      border: none;
      padding-bottom: 15px;
  }
  
  .boxing-last-btn  button a {
      color: #FFF;
      font-size: 16px;
      font-family: 'NATS', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 218.75% */
      text-decoration: none;
      text-align: center;
  }
  
  .Exciting-box {
      width: 75%;
      height: 615px;
      border-radius: 20px;
      background: #b44e9d;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  section.Exciting {
      width: 100%;
      background: #F5F2FF;
      padding: 165px 50px 70px 50px;
      /* background-image: url(../assets/images/lastbg.png); */
      background-image: url(../assets/images/lastbg.png);
  
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
  
  
  }
  
  .main-Exciting {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  
  .Exciting-tital {
      width: 100%;
      padding-bottom: 40px;
  }
  
  .Exciting-tital h2 {
      color: #161543;
      text-align: center;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .boxings-1 {
      background-color: #589ad3;
      border-radius: 20px 0px 0px 20px;
      width: 30%;
      padding: 30px 30px 0px 30px;
  }
  
  .Exciting-btn-box {
      width: 75%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding-top: 28px;
  }
  
  .Exciting-btn-box button {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      background: #FFF;
      padding: 25px;
  }
  section.Takes {
      width: 100%;
      padding: 266px 0px;
      background: #F5F2FF;
      background-image: url(./assets/long-bg.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .main-Takes {
      width: 100%;
  }
  
  .Takes-tital span {
      display: flex;
      align-items: center;
      gap: 5px;
  }
  
  .Takes-tital span p {
      color: #000;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .Takes-tital h2 {
      color: #161543;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .Takes-box {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 50px;
      padding-top: 50px;
  }
  
  .Takes-boxing {
      display: flex;
      width: 24%;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      /* background-image: url(../assets/images/Frame\ 95.png); */
      background-image: url(../assets/images/Frame\ 95.png);
  
      justify-content: center;
      padding: 26px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .Takes-boxing h3 {
      color: #F5F2FF;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .Takes-boxing h2 {
      color: #F5F2FF;
      font-size: 140px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .Takes-boxing p {
      color: #F5F2FF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      padding-bottom: 50px;
  }
  
  .Takes-boxing button {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      padding: 20px 48px;
      border: none;
  }
  
  .Takes-boxing button a {
      color: #FFF;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }
  
  .main-better {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  section.BETTER {
      width: 100%;
      padding: 214px 95px 220px 95px;
      background-image: url(../assets/images/Frame90.png);
      
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  }
  
  .better-1 {
      width: 32%;
      display: flex;
      flex-direction: column;
      gap: 149px;
      align-items: center;
  }
  
  .better-2 {
      border-radius: 20px;
      border: 5px solid #1E1E1E;
      width: 35%;
      height: 718px;
      flex-shrink: 0;
      background-color: #589ad3;
  }
  
  .box-better {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      padding: 27px 33px;
      justify-content: center;
      align-items: center;
      gap: 24px;
      width: 449px;
      height: 140px;
  }
  
  section.WORKS {
      width: 100%;
      background-color: #D9D9D9;
      padding: 176px 95px 236px 95px;
  }
  
  .main-works {
      width: 100%;
  }
  
  .main-works h2 {
      color: #161543;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .works-box {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 32px 0px;
      justify-content: space-between;
  }
  
  .works-card {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      width: 23%;
      height: 233px;
      flex-shrink: 0;
      padding: 45px 0px 0px 0px;
  }
  
  .works-card h3 {
      color: #161543;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-align: center;
  }
  
  .works-card p {
      color: #161543;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 76.667% */
      font-family: 'NATS', sans-serif;
      text-align: center;
      padding-top: 10px;
  }
  
  .works-boxing {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 120px;
  }
  
  .works-boxing h3 {
      color: #161543;
      font-size: 100px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 42%;
  }
  
  .works-imger {
      width: 55%;
  }
  
  .works-img-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 104px;
  }
  
  section.Journey {
      width: 100%;
      background-color: #589AD3;
      padding: 191px 145px 26px 145px;
  }
  
  .main-Journey {
      width: 100%;
  }
  
  .Journey-box {
      width: 100%;
  }
  
  .Journey-box h2 {
      color: #FFF;
      font-size: 95px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .Journey-btn-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 322px;
  }
  
  .Journey-btn {
      width: 50%;
      display: flex;
      align-items: center;
      gap: 40px;
  }
  
  .Journey-btn button {
      display: flex;
      width: 28%;
      padding: 25px 52px 31px 52px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #D9D9D9;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      border: 2px solid #D9D9D9 ;
  }
  
  .Journey-btn button a {
      color: #263238;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  button.Loging {
      background: transparent;border-radius: 10px;border: 2px solid #D9D9D9;box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }
  
  button.Loging a {
      color: #fff;
  }
  
  .Journey-last-box {
      width: 100%;
      border-bottom: 2px solid #fff;
      border-top: 2px solid #fff;
      padding: 40px 0px 52px 0px;
  }
  
  .hello-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .hello-tital {
      width: 60%;
  }
  
  .hello-tital img {
      width: 44%;
  }
  
  .hello-tital p {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px; /* 145% */
      font-family: 'NATS', sans-serif;
      padding-top: 22px;
  }
  
  .hello-list {
      width: 12%;
  }
  
  .hello-list ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
  }
  
  .hello-list ul li {
      list-style: none;
  }
  
  .hello-list ul li a {
      text-decoration: none;
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .works-img-box img {
      width: 40%;
  }
  
  .copy-right {
      width: 100%;
      text-align: center;
      padding-top: 30px;
  }
  
  .copy-right p a {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }
  
  
  @media screen and (max-width: 1600px){
      .hero-tital h2 {
          color: #161543;
          font-family: 'Poly Sans', sans-serif;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0px;
      }
      .hero-tital p {
          color: #000;
          font-family: 'NATS', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0px;
          display: flex;
          align-items: center;
          gap: 5px;
      }
      .hero-tital p span svg {
          width: 40px;
          height: 40px;
      }
      .contanir {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
      }
      section.hero {
          width: 100%;
          background-color: #F5F2FF;
          /* height: 1024px; */
          padding: 285px 30px 25px 30px;
          background-image: url(../assets/images/Frame_new.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
      }
      .box-tital p {
          color: #000;
          font-family: sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
      }
      .main-home h1 {
          color: #F1F1EF;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 100%;
      }
      span.span-2 {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          gap: 8px;
      }
      section.home {
          width: 100%;
          background-color: #589AD3;
          padding: 270px 0px;
      }
      section.advanced {
          width: 100%;
          background: #F5F2FF;
          padding: 194px 45px;
          background-image: url(../assets/images/HELLO.png);
          background-position: left;
          background-repeat: no-repeat;
          background-size: contain;
      }
      .advanced-tital p {
          color: #000;
          font-family: 'NATS', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          display: flex;
          align-items: center;
          gap: 5px;
          margin: 0px;
      }
      .advanced-tital p span svg {
          width: 40px;
          height: 40px;
      }
      .advanced-tital h2 {
          font-family: 'Poly Sans', sans-serif;
          color: #161543;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding-top: 10px;
      }
      button.SignUp {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          color: #FFF;
          border: none;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          width: 218px;
          padding: 24px 0px;
      }
      button.Login {
          border-radius: 10px;
          border: 2px solid #1E1E1E;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 218px;
          padding: 20px 0px;
          color: #1E1E1E;
          font-size: 25px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .boxing-1 {
          /* height: 605px; */
          background-color: #589AD3;
          border-radius: 20px 0px 0px 20px;
          width: 38%;
          padding: 20px 20px 0px 20px;
      }
      .advanced-box {
          width: 50%;
          height: 580px;
          border-radius: 20px;
          background: #B44E9D;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      span.icon-box h2 {
          color: #FFF;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 35px;
          font-family: 'NATS', sans-serif;
          text-decoration: none;
      }
      span.error-icon svg {
          width: 20px;
          height: 20px;
      }
      span.icon-box img {
          width: 45px;
      }
      .Exciting-tital h2 {
          color: #161543;
          text-align: center;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Exciting-tital {
          width: 100%;
          padding-bottom: 25px;
      }
      .Exciting-box {
          width: 75%;
          height: 595px;
          border-radius: 20px;
          background: #b44e9d;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .Exciting-btn-box button a svg {
          width: 40px;
          height: 40px;
      }
      .Exciting-btn-box button {
          border-radius: 10px;
          border: 2px solid #1E1E1E;
          background: #FFF;
          padding: 15px;
      }
      section.Exciting {
          width: 100%;
          background: #F5F2FF;
          padding: 160px 45px 55px 45px;
          background-image: url(../assets/images/lastbg.png);
          background-position: left;
          background-repeat: no-repeat;
          background-size: contain;
      }
      .Takes-tital span svg {
          width: 40px;
          height: 40px;
      }
      .Takes-tital span p {
          color: #000;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Takes-tital h2 {
          color: #161543;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-box {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 50px;
          padding-top: 35px;
      }
      .Takes-boxing h3 {
          color: #F5F2FF;
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Takes-boxing h2 {
          color: #F5F2FF;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-boxing p {
          color: #F5F2FF;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          padding-bottom: 40px;
      }
      .Takes-boxing button {
          border-radius: 10px;
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          padding: 15px 28px;
          border: none;
      }
      .Takes-boxing button a {
          color: #FFF;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          font-family: 'NATS', sans-serif;
      }
      section.Takes {
          width: 100%;
          padding: 225px 0px;
          background: #F5F2FF;
          background-image: url(./assets/long-bg.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }
      .Takes-boxing {
          display: flex;
          width: 24%;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          background-image: url(../assets/images/Frame\ 95.png);
          justify-content: center;
          padding: 24px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }
      section.BETTER {
          width: 100%;
          padding: 190px 65px 180px 65px;
          background-image: url(../assets/images/Frame90.png);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
      }
      .box-better {
          border-radius: 10px;
          background: #FFF;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          display: flex;
          padding: 24px 24px;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 400px;
          height: 110px;
      }
      .box-better svg {
          width: 75px;
          height: 75px;
      }
      .better-1 {
          width: 32%;
          display: flex;
          flex-direction: column;
          gap: 115px;
          align-items: center;
      }
      .better-2 {
          border-radius: 20px;
          border: 5px solid #1E1E1E;
          width: 35%;
          height: 575px;
          flex-shrink: 0;
          background-color: #589ad3;
      }
      section.WORKS {
          width: 100%;
          background-color: #D9D9D9;
          padding: 160px 70px 170px 70px;
      }
      .main-works h2 {
          color: #161543;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .works-card h3 {
          color: #161543;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          text-align: center;
      }
      .works-card p {
          color: #161543;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          font-family: 'NATS', sans-serif;
          text-align: center;
          padding-top: 10px;
      }
      .works-box {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 28px 0px;
          justify-content: space-between;
      }
      .works-card {
          border-radius: 10px;
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          width: 23%;
          height: 233px;
          flex-shrink: 0;
          padding: 40px 0px 0px 0px;
      }
      .works-boxing h3 {
          color: #161543;
          font-size: 75px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 42%;
      }
      .Journey-box h2 {
          color: #FFF;
          font-size: 75px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Journey-btn button {
          display: flex;
          width: 33%;
          padding: 20px 45px 20px 45px;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      button.Loging {
          background: transparent;
          border-radius: 10px;
          border: 2px solid #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      .Journey-btn-box {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 280px;
      }
      section.Journey {
          width: 100%;
          background-color: #589AD3;
          padding: 170px 125px 25px 125px;
      }
      .hello-tital p {
          color: #FFF;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 29px;
          font-family: 'NATS', sans-serif;
          padding-top: 22px;
      }
      .hello-list ul li a {
          text-decoration: none;
          color: #FFF;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Journey-last-box {
          width: 100%;
          border-bottom: 2px solid #fff;
          border-top: 2px solid #fff;
          padding: 35px 0px 45px 0px;
      }
  }
  
  
  
  @media screen and (max-width: 1440px){
  
  .contanir {
          width: 100%;
          max-width: 1170px;
          margin: 0 auto;
  }
  .hero-tital h2 {
          color: #161543;
          font-family: 'Poly Sans', sans-serif;
          font-size: 75px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0px;
  }
  .hero-tital p {
          color: #000;
          font-family: 'NATS', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0px;
          display: flex;
          align-items: center;
          gap: 5px;
  }
  .hero-tital p span svg {
          width: 35px;
          height: 35px;
  }
  section.hero {
          width: 100%;
          background-color: #F5F2FF;
          /* height: 1024px; */
          padding: 275px 25px 25px 25px;
          background-image: url(../assets/images//Frame_new.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
  }    
  .box-tital {
      width: 44%;
  }
  .main-home h1 {
      color: #F1F1EF;
      font-size: 75px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 100%;
  }
  section.home {
      width: 100%;
      background-color: #589AD3;
      padding: 255px 0px;
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
  }
  .advanced-tital p span svg {
      width: 34px;
      height: 34px;
  }
  .advanced-tital h2 {
      font-family: 'Poly Sans', sans-serif;
      color: #161543;
      font-size: 44px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding-top: 10px;
  }
  .advanced-btn {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 19px;
      padding-top: 35px;
  }
  button.SignUp {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      color: #FFF;
      border: none;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      width: 190px;
      padding: 18px 0px;
  }
  button.Login {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 190px;
      padding: 16px 0px;
      color: #1E1E1E;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .boxing-btn-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 40px 0px 40px 0px;
  }
  span.icon-box {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 72%;
  
  }
  .boxing-1 {
      /* height: 605px; */
      background-color: #589AD3;
      border-radius: 20px 0px 0px 20px;
      width: 38%;
      padding: 15px 15px 0px 15px;
  }
  span.icon-box img {
      width: 40px;
  }
  .advanced-box {
      width: 50%;
      height: 485px;
      border-radius: 20px;
      background: #B44E9D;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .Exciting-box {
      width: 75%;
      height: 500px;
      border-radius: 20px;
      background: #b44e9d;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .Exciting-tital h2 {
      color: #161543;
      text-align: center;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Exciting-btn-box button {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      background: #FFF;
      padding: 10px;
  }
  .Exciting-btn-box button a svg {
      width: 30px;
      height: 30px;
  }
  section.Exciting {
      width: 100%;
      background: #F5F2FF;
      padding: 150px 45px 50px 45px;
      background-image: url(../assets/images/lastbg.png);
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
  }
  .Takes-tital span p {
      color: #000;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .Takes-tital span svg {
      width: 35px;
      height: 35px;
  }
  .Takes-tital h2 {
      color: #161543;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Takes-box {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 35px;
      padding-top: 30px;
  }
  .Takes-boxing h3 {
      color: #F5F2FF;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .Takes-boxing h2 {
      color: #F5F2FF;
      font-size: 75px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Takes-boxing p {
      color: #F5F2FF;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      padding-bottom: 30px;
  }
  .Takes-boxing button {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      padding: 12px 18px;
      border: none;
  }
  .Takes-boxing button a {
      color: #FFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }
  .box-better {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      padding: 24px 24px;
      align-items: center;
      gap: 10px;
      width: 355px;
      height: 90px;
      justify-content: center;
  }
  .box-better svg {
      width: 60px;
      height: 60px;
  }
  .box-better h2 {
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .better-2 {
      border-radius: 20px;
      border: 5px solid #1E1E1E;
      width: 35%;
      height: 510px;
      flex-shrink: 0;
      background-color: #589ad3;
  }
  section.BETTER {
      width: 100%;
      padding: 165px 65px 155px 65px;
      background-image: url(../assets/images/Frame90.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  }
  .main-works h2 {
      color: #161543;
      font-size: 75px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .works-card h3 {
      color: #161543;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-align: center;
  }
  .works-card p {
      color: #161543;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      font-family: 'NATS', sans-serif;
      text-align: center;
      padding-top: 10px;
  }
  .works-card {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      width: 23%;
      height: 200px;
      flex-shrink: 0;
      padding: 40px 0px 0px 0px;
  }
  section.WORKS {
      width: 100%;
      background-color: #D9D9D9;
      padding: 140px 70px 130px 70px;
  }
  .works-boxing {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 90px;
  }
  .works-boxing h3 {
      color: #161543;
      font-size: 65px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 42%;
  }
  .Journey-box h2 {
      color: #FFF;
      font-size: 65px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Journey-btn button {
      display: flex;
      width: 32%;
      padding: 16px 35px 16px 34px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #D9D9D9;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }
  button.Loging {
      background: transparent;
      border-radius: 10px;
      border: 2px solid #D9D9D9;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }
  .Journey-btn button a {
      color: #263238;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  section.Journey {
      width: 100%;
      background-color: #589AD3;
      padding: 135px 125px 20px 125px;
  }
  .Journey-btn-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 220px;
  }
  .hello-tital {
      width: 64%;
  }
  .hello-list {
      width: 14%;
  }
  .Journey-last-box {
      width: 100%;
      border-bottom: 2px solid #fff;
      border-top: 2px solid #fff;
      padding: 30px 0px 40px 0px;
  }
  }
  
  
  
  @media screen and (max-width: 1366px){
      .hero-tital h2 {
          color: #161543;
          font-family: 'Poly Sans', sans-serif;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0px;
      }
      .hero-box {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 135px 0px 0px 0px;
      }
      section.hero {
          width: 100%;
          background-color: #F5F2FF;
          /* height: 1024px; */
          padding: 262px 20px 25px 20px;
          background-image: url(../assets/images/Frame_new.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
      }
      .main-home h1 {
          color: #F1F1EF;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 1153px;
      }
      span.span-2 img {
          width: 25%;
      }
      section.home {
          width: 100%;
          background-color: #589AD3;
          padding: 220px 0px;
      }
      .advanced-tital h2 {
          font-family: 'Poly Sans', sans-serif;
          color: #161543;
          font-size: 42px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding-top: 10px;
      }
      .advanced-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 19px;
          padding-top: 25px;
      }
      button.SignUp {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          color: #FFF;
          border: none;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          width: 170px;
          padding: 16px 0px;
      }
      button.Login {
          border-radius: 10px;
          border: 2px solid #1E1E1E;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          padding: 14px 0px;
          color: #1E1E1E;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
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
      }
      .boxing-btn-box button {
          width: 100%;
          flex-shrink: 0;
          padding: 12px 15px;
          background-color: transparent;
          border: none;
          border-radius: 20px;
      }
      section.advanced {
          width: 100%;
          background: #F5F2FF;
          padding: 190px 35px;
          background-image: url(../assets/images/HELLO.png);
          background-position: left;
          background-repeat: no-repeat;
          background-size: contain;
      }
      .Exciting-box {
          width: 75%;
          height: 482px;
          border-radius: 20px;
          background: #b44e9d;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .Exciting-btn-box {
          width: 75%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding-top: 20px;
      }
      .Exciting-tital h2 {
          color: #161543;
          text-align: center;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-tital h2 {
          color: #161543;
          font-size: 42px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-boxing h3 {
          color: #F5F2FF;
          font-size: 25px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Takes-boxing h2 {
          color: #F5F2FF;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-boxing p {
          color: #F5F2FF;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          padding-bottom: 30px;
      }
      .Takes-boxing button a {
          color: #FFF;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          font-family: 'NATS', sans-serif;
      }
      section.Takes {
          width: 100%;
          padding: 200px 0px;
          background: #F5F2FF;
          background-image: url(./assets/long-bg.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }
      .box-better {
          border-radius: 10px;
          background: #FFF;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          display: flex;
          padding: 24px 24px;
          align-items: center;
          gap: 10px;
          width: 305px;
          height: 85px;
          justify-content: center;
      }
      .box-better svg {
          width: 55px;
          height: 55px;
      }
      .box-better h2 {
          color: #000;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      section.BETTER {
          width: 100%;
          padding: 150px 65px 150px 65px;
          background-image: url(../assets/images/Frame90.png);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
      }
      .main-works h2 {
          color: #161543;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .works-card h3 {
          color: #161543;
          font-size: 38px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          text-align: center;
      }
      .works-card {
          border-radius: 10px;
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          width: 23%;
          height: 190px;
          flex-shrink: 0;
          padding: 35px 0px 0px 0px;
      }
      .works-card p {
          color: #161543;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
          font-family: 'NATS', sans-serif;
          text-align: center;
          padding-top: 10px;
      }
      .works-boxing h3 {
          color: #161543;
          font-size: 58px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 42%;
      }
      .works-boxing {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 80px;
      }
      .Journey-box h2 {
          color: #FFF;
          font-size: 58px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Journey-btn button {
          display: flex;
          width: 30%;
          padding: 12px 30px 12px 30px;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      .Journey-btn button a {
          color: #263238;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          text-decoration: none;
      }
      button.Loging {
          background: transparent;
          border-radius: 10px;
          border: 2px solid #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      .Journey-btn-box img {
          width: 32%;
      }
      .Journey-btn-box {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 180px;
      }
      .hello-tital {
          width: 66%;
      }
      .hello-tital img {
          width: 40%;
      }
      .hello-list {
          width: 15%;
      }
      .Journey-last-box {
          width: 100%;
          border-bottom: 2px solid #fff;
          border-top: 2px solid #fff;
          padding: 25px 0px 35px 0px;
      }
      section.Journey {
          width: 100%;
          background-color: #589AD3;
          padding: 124px 120px 15px 120px;
      }
  }
  </style>
  
  
  
  
  
    
    