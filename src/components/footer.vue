<template>
    <div id="app">
      <div id="fullpage">
        <div class="section" ref="heroSection" >
      <Play/>

        </div>
        <div class="section" ref="oneSection" >
          <section class="Journey">
    <div class="main-Journey">
      <div class="Journey-box">
        <h2>Unielogics is the Uber for your e-commerce operations</h2>
        <div class="Journey-btn-box">
          <div class="Journey-btn">
            <button>Sign Up</button>
            <button class="Loging">Login</button>
          </div>
          <img class="jour_img" src="../assets/images/car.gif" alt="">
        </div>
      </div>


      <div class="Journey-last-box">
        <div class="hello-box">
          <div class="hello-tital">
            <img src="../assets/images/man.png" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas mi sed metus porta facilisis at sit amet mauris. Aliquam laoreet venenatis felis at dapibus. In eget tortor sit amet lectus tincidunt ullamcorper a eu mauris. Donec sit amet arcu sit amet mi semper tincidunt.</p>
          </div>
          <div class="hello-list">
            <ul>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Extensions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copy-right">
       <p><a href="#">Asinmice © All rights reserved 2024</a></p>
      </div>
    </div>
</section>
        </div>
      

      

      </div>
    </div>
  </template>
  
  <script>
  import fullpage from 'fullpage.js';
  import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

import Dashboard from './dashboardshow.vue'
import Map from './newpage.vue'
import Better from './better.vue'
import Play from './play.vue'


gsap.registerPlugin(ScrollTrigger);
  
  export default {

    components: {
      Dashboard,
      Map,
      Better,
      Play

},

data(){
      return{
        ahtisham :false,
        scrollCounter: 0,
      showThirdSection: false,

      scrollCount: 0,
         
      }
    },
  


    mounted() {
      this.initFullPage();
    },
    methods: {

      handleWheel(event) {
        const deltaY = event.deltaY;
  
        console.log(deltaY);
  
        if (deltaY > 2) {
          console.log('Scrolling down');
  
          // Increment the scroll count
          this.scrollCount++;
  
          console.log(' count',this.scrollCount);
  
          // Check if it's the second scroll down
          if (this.scrollCount > 1) {
            console.log('cccccccccccccc')

               setTimeout(() => {
            
                 this.showThirdSection = true

                 console.log('nnnnnnn' , this.showThirdSection)
            }, 2000);
         

          
        
          }
          // else{
          //   this.dd = true;
          // }
        } else if (deltaY < 0) {
          console.log('Scrolling up');
        }
      },


      handleWheels(event) {
        const deltaY = event.deltaY;
  
        console.log(deltaY);
  
        if (deltaY > 2) {
          console.log('Scrolling down');
  
          // Increment the scroll count
          this.scrollCount++;
  
          console.log(' count',this.scrollCount);
  
          // Check if it's the second scroll down
          if (this.scrollCount > 1) {
            console.log('cccccccccccccc')

//             setTimeout(() => {
//   this.$router.push('/pricing');
//   setTimeout(() => {
//     window.location.reload(true); // Passing true as a parameter forces a reload from the server
//   }, 100); // Adjust the timeout value as needed
// }, 2000);
         

          
        
          }
          // else{
          //   this.dd = true;
          // }
        } else if (deltaY < 0) {
          console.log('Scrolling up');
        }
      },

      godown(){
        
        this.ahtisham = true;
        console.log('Achivee', this.ahtisham);
      },
      initFullPage() {



    
          const vm = this;
  
          new fullpage('#fullpage', {
            anchors: ['heroSection', 'oneSection'],
            autoScrolling: true,
            verticalCentered: false,
            showIndicators: false, 
            easing: 'easeInOutCubic', 
              scrollingSpeed: 2500, 
              credits: { 
              enabled: false, 
              label: 'Made with fullPage.js', 
              position: 'right'
        },

              
            afterLoad(origin, destination, direction) {
        
            
            },

        
          });
        
        
        
      },
    },
  };
  </script>
  
  <style scoped>

section.Journey {
    width: 100%;
    background-color: #589AD3;
    padding: 30px 120px 15px 120px !important;
}

.Journey-box {
    width: 100%;
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 34px;
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
    padding-bottom: 0px !important;
}

.jour_img{
  width: 20%;
}

#fp-nav.fullpage-wrapper::after {
  display: none !important;
}

.fp-watermark {
    display: none !important;
}

a {
    display: none;
}
 
 body {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.3em;
  margin: 0;
  padding: 0;
  text-align: center;
}


#nav-container {
  position: fixed;
  left: 1em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}


#fullpage {
  position: relative;
  width: 100%;
}
.section {  
  /* align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center; */
  /* height: 100vh; */
  position: relative;
  overflow-y: scroll;
  /* width: 100%; */
}
.imm{
    position: absolute;
    right: 0;
}


@media screen and (max-width: 1920px){


  section.Journey {
    width: 100%;
    background-color: #589AD3;
    padding: 1px 120px 15px 120px !important;
}

.Journey-box {
    width: 100%;
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 34px;
}

.Journey-box h2 {
    color: #FFF;
    font-size: 95px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: 'Poly Sans', sans-serif;
    margin: 0px !important;
}

.Journey-btn-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0px !important;
}

.jour_img{
  width: 20%;
}
}

@media screen and (max-width: 1600px){

  .Journey-box h2 {
   
    font-size: 75px;
  
}

.Journey-box {
   
    padding: 69px 0px;
   
}
}


@media screen and (max-width: 1440px){

  .Journey-box{
  
    padding: 55px 0px;
  
}

.Journey-box h2 {
 
  font-size: 65px;

}
}


@media screen and (max-width: 600px){

  section.Journey {
   
    padding: 1px 40px 15px 40px !important;
}

.Journey-box{

  padding: 130px 0px;

}

.Journey-box h2 {

font-size: 35px;

}

.main-Journey {
    width: 100%;
    height: 100vh;
}
}

@media screen and (max-width: 375px){

  .Journey-box h2 {
    font-size: 30px;
}
}



/* .section > p, .section h1 {
  max-width: 800px;
  padding: 0.5em;
} */





  </style>
  