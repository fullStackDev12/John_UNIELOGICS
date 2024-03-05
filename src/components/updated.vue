<template>
    <div id="app">
      <div id="fullpage">
        <div class="section" ref="heroSection" >
          <section class="WORKS">
  <div class="main-works">
    <span class="spans">How Does It Work?</span>
    <h2 style="margin:0 auto;"  class="margins">It's Corporate Logistics For Smaller Sellers</h2>
    <div class="works-box">
      <div class="works-card">
       
        <h3>Find Profitable Products</h3>
        <p>Use our Chrome extension to identify top selling,profitable and low risk products at once directly on Amazon</p>
      </div>
      <div class="works-card">
        <h3>Initiate Logistics Plan</h3>
        <p>Start your 3rd party logistics service request byselecting the items you intend on sending for prepping</p>
      </div>
      <div class="works-card">
        <h3>Get Warehouse Details</h3>
        <p>Our PROXIMITY MATCHING A.I will provide you with theaddress details of the closest and most optimal warehouse to ship yourinventory</p>
      </div>
      <div class="works-card">
        <h3>Inventory Gets Handled</h3>
        <p>Your inventory will be fully handled in 3-5 businessdays. All updates will be provides directly on our dashboard and via emailnotifications</p>
      </div>

     
    </div>

    <div class="works-boxing">
      <h3>Our Sponsors</h3>
      <div class="works-imger">
        <div class="works-img-box">
          <!-- <img src="./img/download (3).png" alt=""> -->
          <img src="../assets/images/download (3).png" alt="">
          <img src="../assets/images/download (4).png" alt="">

          <!-- <img src="./img/download (4).png" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
        <div class="section" ref="oneSection" >
        <Map @wheel="handleWheel"/>
        </div>
      

        <div class="section" ref="twoSection" v-if="showThirdSection" >
        <Better @wheel="handleWheels"/>
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


gsap.registerPlugin(ScrollTrigger);
  
  export default {

    components: {
      Dashboard,
      Map,
      Better

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

      console.log('talha',window.innerWidth);

     
  if( window.innerWidth < 600){
   this.showThirdSection = true

  }

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
//     window.location.reload(true); 
//   }, 100);
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
            anchors: ['heroSection', 'oneSection', 'twoSection'],
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

  .margins{
    margin: 0 auto
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
  /* width: 100%; */
}
.imm{
    position: absolute;
    right: 0;
}

/* section.WORKS {
   
  padding: 190px 70px 95px 70px;
} */

/* .main-works h2 {
   
  font-size: 100px;
    padding-bottom: 80px;
    padding-top: 50px;
    
} */

.spans{
  font-size: 40px;
}

.works-box {
    display: flex;
    overflow: hidden;
    /* padding: 65px 0px; */
  }

  .works-card p {
    color: white;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    font-family: 'NATS', sans-serif;
    text-align: center;
    padding-top: 40px;

   
}

.works-card h3 {
  color: white;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: 'NATS', sans-serif;
    text-align: center;
    padding-top: 30px;
}

  .works-card {
    width: 600px;
    height: 360px;
    padding: 10px;
    margin-right: 30px;
    border: 1px solid #ccc;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-10%);
    }
  }
  
  @media screen and (max-width: 1920px){

    .margins{
    margin: 0 auto
  }

    section.WORKS {
   
   padding: 116px 70px 116px 70px;
 }
 
 .main-works h2 {
    
     font-size: 85px;
     
 }
 
 .spans{
   font-size: 35px;
 }
 
 .works-box {
     display: flex;
     overflow: hidden;
     
   }
 
   .works-card p {
     color: white;
     font-size: 17px;
     font-style: normal;
     font-weight: 500;
     line-height: 22px;
     font-family: 'NATS', sans-serif;
     text-align: center;
     padding-top: 40px;
 
    
 }
 
 .works-card h3 {
   color: white;
     font-size: 30px;
     font-style: normal;
     font-weight: 600;
     line-height: normal;
     font-family: 'NATS', sans-serif;
     text-align: center;
     padding-top: 30px;
 }
 
   .works-card {
     width: 450px;
     padding: 10px;
     height: 233px;
     margin-right: 30px;
     border: 1px solid #ccc;
     animation: marquee 10s linear infinite;
   }
 
   @keyframes marquee {
     0% {
       transform: translateX(20%);
     }
     100% {
       transform: translateX(-50%);
     }
   }
 
  }

@media screen and (max-width: 1600px){


  .margins{
    margin: 0 auto
  }

  .works-card p {
    
    font-size: 15px;
   

   
}

  .works-card {
    width: 450px;
    padding: 10px;
    height: 233px;
    margin-right: 30px;
    border: 1px solid #ccc;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .works-boxing {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
   
}

.main-works h2 {
    font-size: 70px;
}

.spans{
    font-size: 26px;
}

}


@media screen and (max-width: 1440px){

  .margins{
    margin: 0 auto
  }


  .works-card p {
    color: white;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    font-family: 'NATS', sans-serif;
    text-align: center;
    padding-top: 30px;

   
}


  .works-card {
    width: 400px;
    padding: 10px;
    margin-right: 30px;
    border: 1px solid #ccc;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

.main-works h2 {
  font-size: 62px;
}

.spans{
  font-size: 26px;
}

}


@media screen and (max-width: 1366px){

  .margins{
    margin: 0 auto
  }


.main-works h2 {
    font-size: 55px;
}

.works-box {
    display: flex;
    overflow: hidden;
  }

  .works-card p {
    color: white;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    font-family: 'NATS', sans-serif;
    text-align: center;
    padding-top: 30px;
   
}

.works-card h3 {
    color: white;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: 'NATS', sans-serif;
    text-align: center;
    padding-top: 30px;
}

  .works-card {
   width: 400px;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    animation: marquee 15s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-110%);
    }
  }
}


@media screen and (max-width: 1024px){

  .margins{
    margin: 0 auto
  }



  .works-card p {
    
    font-size: 11px;
   
}
  .works-card {
   width: 350px;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    animation: marquee 15s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-160%);
    }
  }

  .spans {
    font-size: 20px;
}

.main-works h2 {
    font-size: 43px;
}

.works-boxing h3 {
   
    font-size: 45px;
   
}
}


@media screen and (max-width: 600px){

  .main-works{
    padding-top: 50px;
  }

  .works-boxing {
    width: 100%;
    display: flex;
   
    align-items: flex-start;
    padding-top: 30px;
    flex-direction: column;
    gap: 20px;
  }

  .works-box{
    display: flex;
    flex-direction: row !important;
    padding-top: 70px;
    padding-bottom: 70px;

  }

  .margins{
    margin: 0 auto 
  }

  
  .works-card {
  
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-330%);
    }
  }

.spans {
  font-size: 15px;
  
}

.works-img-box {
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: flex-end; */
    gap: 65px;
}

.works-imger{
  width: 100%;
}


}

@media screen and (max-width: 375px){

  .works-imger{
  width: 100%;
}

  .works-img-box {
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: flex-end; */
    gap: 65px;
}
  .works-box{
    display: flex;
    flex-direction: row !important;
    padding-top: 70px;
    padding-bottom: 70px;

  }


  .margins{
    margin: 0 auto
  }

.spans {
  font-size: 14px;
}

.works-card {
  
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-330%);
  }
}



}
/* .section > p, .section h1 {
  max-width: 800px;
  padding: 0.5em;
} */


  </style>
  