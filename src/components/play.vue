
<template>
  <!-- <Header/> -->
 
 <transition name="fade-in" class="fade-in">
 <section class="magic-sec" @wheel="handleWheel" v-if="showContent" ref="mainBox" @touchstart="handleWheels" @touchmove="handleWheels" @touchend="handleWheels">
       <div class="magic-box" ref="advancedBox" :class="{ rotated: isRotated }">
       
       
       </div>

       <!-- <div class="boxes" ref="advancedBox">
         <img src="../assets/images/Frame 32.png"/>
       </div> -->
       <div class="magic-tital">
         <div class="flexs" ref="paddings">
           
           <img style="opacity: 0; position: absolute;  width: 68%; height: 70%; border: 5px solid #9B62AB; border-radius: 23px;" src="../assets/images/Frame 32.png"  ref="imageBox"/>
           
         </div>
       
           <h1 @click="rotateSection" ref="text">WATCH OUR PROCESS</h1>
           
       </div>
     </section>
   </transition>
</template>
<script>

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import Header from './header.vue'
gsap.registerPlugin(ScrollTrigger);
export default {

 components: {

Header

},
name: "Other",
data(){
 return{
   isRotated:false,

   showContent:true,
   scrollCount: 0,
   isFade:false
 }
},

mounted() {
 setTimeout(() => {
 
  
  this.rotateSection();
   
 }, 1500);
 },

 methods:{

   handleWheels(event){ 
     
//       this.isFade = !this.isFade;

// const mainBox = this.$refs.mainBox;

// if (mainBox) {
// this.isRotated = !this.isRotated;



// gsap.to(mainBox, { duration: 3, opacity:0, ease: 'power2.inOut' });



// }



// setTimeout(() => {
//   this.$router.push('/newpage');
// }, 2500);

   },

   // handleWheel(event){
   //   const deltaY = event.deltaY;

   //   if (deltaY > 2) {
   //     console.log('Scrolling down');

     
   //     this.scrollCount++;

   //     console.log(' count',this.scrollCount);

   
   //     if (this.scrollCount > 1) {
   //       this.isFade = !this.isFade;

   //       const mainBox = this.$refs.mainBox;

   //     if (mainBox) {
   //       this.isRotated = !this.isRotated;



   //     gsap.to(mainBox, { duration: 3, opacity:0, ease: 'power2.inOut' });



   //     }

       
       
   //       // setTimeout(() => {
   //       //   this.$router.push('/newpage');
   //       // }, 2500);
   //     }
      
   //   } else if (deltaY < 0) {
   //     console.log('Scrolling up');
   //   }

   // },
   rotateSection(){
       console.log('aaaa');
       this.isRotated = !this.isRotated;
       const advancedBox = this.$refs.advancedBox;

           if (advancedBox) {

             setTimeout(() => {

           gsap.to(advancedBox, { duration: 2, opacity:0, ease: 'power2.inOut' });
         }, 2000);


           }


           setTimeout(() => {
           const mainBox = this.$refs.mainBox;

           if (mainBox) {
     gsap.to(mainBox, { duration: 6, backgroundColor:'#589AD3', ease: 'power2.inOut' });
         }
      }, 1500);

      

      


         const imageBox = this.$refs.imageBox;

           if (imageBox) {
             setTimeout(() => {
               const text = this.$refs.text;

            if (text) {
            gsap.to(text, { duration: 6, opacity:0, ease: 'power2.inOut' });
            }


     gsap.to(imageBox, { duration: 2, opacity:1, ease: 'power2.inOut' });
     if(window.innerWidth < 600){
      gsap.to(imageBox, { duration: 2, height:'50%',  ease: 'power2.inOut' });
     }

    
         
   }, 4000);
   }


//    const paddings = this.$refs.paddings;
//    if (paddings) {
//     if(window.innerWidth < 600){

//       setTimeout(() => {
// gsap.to(paddings, { duration: 2, paddingTop:'100px', ease: 'power2.inOut' });


  
// }, 4000);
//     }
//    }

         


         }
 }

}

</script>

<style scoped>

section.Journey {
   width: 100%;
   background-color: #589AD3;
   padding: 1px 120px 15px 120px !important;
}



.fade-out-enter-active, .fade-out-leave-active {
 transition: opacity 0.5s ;
}

.fade-out-enter, .fade-out-leave-to  {
 opacity: 0 ;
}

.fade-in {
 animation: fadeIn 2.5s;
}

.fade {
 animation: fadeIn 2.5s;
}

@keyframes fadeIn {
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
}


.flexs{
 display: flex !important;
   justify-content: center !important;
   align-content: center !important;
   flex-direction: column-reverse !important;
   align-items: center !important;
}
.flexs img {
   width: 48% !important;
}
/* .boxes{
 display: none;
} */

.rotated {
 transition: transform 2.5s ease-in-out, width 2.5s ease-in-out;

 transform: rotate(90deg) !important;


}
   *{
       padding: 0;
       margin: 0;
       box-sizing: border-box;
   }
   section.magic-sec {
   width: 100%;
   background-image: url(../assets/images/magic.png);
   padding: 485px 0px 412px 0px;
   display: flex;
   background-repeat: no-repeat;
   justify-content: center;
   align-items: center;
   background-size: 80%;
   position: relative;
   background-position: top;
   position: relative;
}
.magic-box {
   background-color: #589AD3;
   width: 500px;
   height: 500px;
   transform: rotate(46.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 4px;
   left: 40.8%;
}

.magic-box h2 {
   position: absolute;
}



.magic-tital h1 {
   color: #161543;
   text-align: center;
   font-family: sans-serif;
   font-size: 135px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
}
.magic-tital {
   width: 100%;
   z-index: 1;
}


@media screen and (max-width: 1920px){

 .fade-out-enter-active, .fade-out-leave-active {
 transition: opacity 0.5s ;
}

.fade-out-enter, .fade-out-leave-to  {
 opacity: 0 ;
}

.fade-in {
 animation: fadeIn 2.5s;
}

.fade {
 animation: fadeIn 2.5s;
}

@keyframes fadeIn {
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
}


.flexs{
 display: flex !important;
   justify-content: center !important;
   align-content: center !important;
   flex-direction: column-reverse !important;
   align-items: center !important;
}

/* .boxes{
 display: none;
} */

.rotated {
 transition: transform 2.5s ease-in-out, width 2.5s ease-in-out;

 transform: rotate(90deg) !important;


}
   *{
       padding: 0;
       margin: 0;
       box-sizing: border-box;
   }
   section.magic-sec {
   width: 100%;
   background-image: url(../assets/images/magic.png);
   padding: 485px 0px 412px 0px;
   display: flex;
   background-repeat: no-repeat;
   justify-content: center;
   align-items: center;
   background-size: contain;
   position: relative;
   background-position: top;
   position: relative;
}
.magic-box {
   background-color: #589AD3;
   width: 398px;
   height: 398px;
   transform: rotate(46.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 220px;
   left: 38.5%;
}

.magic-box h2 {
   position: absolute;
}



.magic-tital h1 {
   color: #161543;
   text-align: center;
   font-family: sans-serif;
   font-size: 135px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
}
.magic-tital {
   width: 100%;
   z-index: 1;
}
}
@media screen and (max-width: 1660px){
   section.magic-sec {
   width: 100%;
   background-image: url(../assets/images/magic.png);
   padding: 400px 0px 310px 0px;
   display: flex;
   background-repeat: no-repeat;
   justify-content: center;
   align-items: center;
   background-size: 95%;
   position: relative;
   background-position: top;
   position: relative;
}
.magic-box {
   background-color: #589AD3;
   width: 314px;
   height: 313px;
   transform: rotate(46.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 172px;
   left: 39%;
}
.magic-tital h1 {
   color: #161543;
   text-align: center;
   font-family: sans-serif;
   font-size: 104px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
}
}

@media screen and (max-width: 1440px){
   .magic-tital h1 {
   color: #161543;
   text-align: center;
   font-family: sans-serif;
   font-size: 90px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
}
.magic-box {
   background-color: #589AD3;
   width: 282px;
   height: 284px;
   transform: rotate(47.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 220px;
   left: 39%;
}
}
@media screen and (max-width: 1366px){

 .fade {
 animation: fadeIn 2.5s;
}
 .fade-out-enter-active, .fade-out-leave-active {
 transition: opacity 0.5s ;
}

.fade-out-enter, .fade-out-leave-to  {
 opacity: 0 ;
}
section.magic-sec {
   width: 100%;
   background-image: url(../assets/images/magic.png);
   padding: 360px 0px 260px 0px;
   display: flex;
   background-repeat: no-repeat;
   justify-content: center;
   align-items: center;
   background-size: 95%;
   position: relative;
   background-position: top;
   position: relative;
}
.magic-tital h1 {
   color: #161543;
   text-align: center;
   font-family: sans-serif;
   font-size: 75px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
}
.magic-box {
   background-color: #589AD3;
   width: 270px;
   height: 270px;
   transform: rotate(47.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 144px;
   left: 39%;
}
}

@media screen and (max-width: 600px){

 .magic-sec{
   background-image: none !important;

 }

.flexs img {
   width: 90% !important;
}

.magic-box {
  background-color: #589AD3;
   width: 74px;
   height: 74px;
   transform: rotate(47.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 145px;
   left: 39%;
}

.magic-box {
   background-color: #589AD3;
   width: 84px;
   height: 84px;
   transform: rotate(46.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 85px;
   left: 39%;
}

}

@media screen and (max-width: 375px){

 .magic-sec{
   background-image: none;

 }


.flexs img {
   width: 90% !important;
}

.magic-box {
  background-color: #589AD3;
   width: 74px;
   height: 74px;
   transform: rotate(47.708deg);
   flex-shrink: 0;
   position: absolute;
   bottom: 145px;
   left: 39%;
}



}
</style>
