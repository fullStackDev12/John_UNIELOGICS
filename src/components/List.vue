
<template>
 
  <section class="new-section">
    <transition name="fade-out">
    <div v-if="showContent" class="cont"  @wheel="handleWheel" >
        <div class="main-homes">
          <h1>
              EMPOWER YOUR ONLINE

            <span class="span-2">
              <p>Acquire Products fromdistributors anywhere in the  <br>United States with ease.Deliver to your clients.</p>
              BUSINESS
            </span>
          </h1>

          <img v-if="isBounceAnimationEnabled" :class="{ 'new': isBounceAnimationEnabled }" src="../assets/images/Frame.png" alt="">

        </div>
      </div>
    </transition>
  </section>

 
</template>
<script>


export default {
name: "Other",
data(){
  return{
    showContent:true,
    scrollCount: 0,
    isBounceAnimationEnabled:false,
    drop:false,
     
  }
},

mounted() {
    
    this.setupAnimation();
    // console.log(this.isBounceAnimationEnabled)
  },
methods: {

  setupAnimation() {
      // Set a delay before enabling the bounce animation
      // setTimeout(() => {
      //   console.log('talha');
      //   this.isBounceAnimationEnabled = true;
      // }, 1500); // You can adjust the delay as needed
    },
    // handleWheel(event) {
     
    //   const deltaY = event.deltaY;

    //   console.log(deltaY);

      
    //   if (deltaY > 2) {
    //     console.log('Scrolling down');

    //     this.showContent = false;   
    //     setTimeout(() => {
    //       this.$router.push('/dashboard');
    //     }, 1500);
      
       
    //   } else if (deltaY < 0) {
    //     console.log('Scrolling up');
       
    //   }
    // },


    handleWheel(event) {
      console.log('aaaaaa');
      // this.drop = true
      this.isBounceAnimationEnabled = true
      const deltaY = event.deltaY;

      console.log(deltaY);

      if (deltaY > 2) {
        console.log('Scrolling down');

        // Increment the scroll count
        this.scrollCount++;

        console.log(this.scrollCount);

        // Check if it's the second scroll down
        if (this.scrollCount === 20) {
      //     this.drop = true
      // this.isBounceAnimationEnabled = true
      console.log(this.isBounceAnimationEnabled);
          this.showContent = false;
          setTimeout(() => {
            this.$router.push('/dashboard');
          }, 1500);
        }
      } else if (deltaY < 0) {
        console.log('Scrolling up');
      }
    },
  },

}

</script>

<style scoped>

.fade-out-enter-active, .fade-out-leave-active {
  transition: opacity 0.5s;
}

.fade-out-enter, .fade-out-leave-to  {
  opacity: 0;
}

.new {
  width: 46% !important;
  position: absolute;
  top:-30px !important;
  left: 29%;
  z-index: 0;
   opacity: 0; 
  visibility: hidden; 
  animation: showAndBounce 2.5s cubic-bezier(0.68, -2.55, 0.27, 3.55) 0.5s forwards
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
  height: 115vh !important;
}
}
</style>


<!-- <style scoped>
.new {
  width: 35% !important;
  position: absolute;
  top: -50px; /* Initial position above the screen */
  left: 32%;
  z-index: 0;
  opacity: 0; /* Initially set opacity to 0 */
  visibility: hidden; /* Initially set visibility to hidden */
  animation: showAndBounce 2s cubic-bezier(0.68, -2.55, 0.27, 3.55) 1s forwards; 

 
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
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poly Sans', sans-serif;
  width: 1153px;
  position: relative !important;
  z-index: 1 !important;
}

/* section.homes {
  width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
} */


.new-section {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}

</style> -->
