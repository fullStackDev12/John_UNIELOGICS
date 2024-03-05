<template>




<transition name="fade-in" class="fade-in">
<div class="main-new" v-if="showContent" ref="mainBox" @wheel="handleWheel" @touchstart="handleTouch" @touchmove="handleTouch" @touchend="handleTouch">

 <div class="contaner" >
    <div class="new-detail-box">
        <h1>Nationwide Network. No contracts. No premiums.</h1>
        <div class="clinte-box">
            <img class="5"  src="../assets/images/XMLID_4685_.png" alt="" ref="advancedBox">

            <img class="vector"  src="../assets/images/Vector1.png" alt="" ref="vector">
            <img class="vectors"  src="../assets/images/Vector2.png" alt="" ref="vectors">
            <img class="vectorss"  src="../assets/images/Vector3.png" alt="" ref="vectorss">

            <img class="vectorsss"  src="../assets/images/Vector4.png" alt="" ref="vectorsss">

            <img class="vectorssss"  src="../assets/images/Vector5.png" alt="" ref="vectorssss">





          
        </div>
    </div>
    
    <div class="new-anmation"></div>
 </div>
    
</div>
</transition>
</template>



<script>

import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
  
  gsap.registerPlugin(ScrollTrigger);
    export default{

        name:'Home',
        data() {
  return {
   
    pagesize:0,
    nextpage:false,
    scrollCount:0,
    showContent:true
   
  
  };
},

        // name:'Home1',

        created(){

            this.pagesize = window.innerWidth;
 
    console.log('screen', this.pagesize);
   


    //     setTimeout(() => {
    //     this.increasewidth();
    //   }, 1000);


     
    },

    methods: {

        handleTouchStart(event) {
      this.touchStartY = event.touches[0].clientY;
    },

    handleTouchMove(event) {
      this.touchEndY = event.touches[0].clientY;
    },

    handleTouchEnd() {
      const deltaY = this.touchEndY - this.touchStartY;
      this.handleScroll(deltaY);
      this.touchCount++;
    },

        handleTouch(event) {
            
                this.increasewidth();
        
    //   const touchStartY = event.touches[0].clientY;
    //   const touchEndY = event.changedTouches[0].clientY;
    //   const deltaY = touchEndY - touchStartY;
    //   this.handleScroll(deltaY);

      
    },


    handleScroll(deltaY) {
      if (deltaY > 2) {
        console.log('Scrolling downsss');

        // Increment the scroll count
        this.scrollCount++;

        console.log('scroll', this.scrollCount);
        if(this.scrollCount == 1){
            this.increasewidth();

        }

        // if(this.scrollCount == 4){
       
        //     this.increasewidths();

        // }

        // if(this.scrollCount == 6){
        //     this.increasewidth2();

        // }

        // if(this.scrollCount == 8){
        //     this.increasewidth3();

        // }

        // if(this.scrollCount == 10){
        //     this.increasewidth4();

        // }

        // if (this.scrollCount > 1 && this.nextpage) {
        //   const mainBox = this.$refs.mainBox;

        //   if (mainBox) {
        //     this.isRotated = !this.isRotated;
        //     gsap.to(mainBox, { duration: 3, opacity: 0, ease: 'power2.inOut' });
        //   }

        //   console.log('sssssss');
        //   setTimeout(() => {
        //     this.$router.push('/dashboard');
        //   }, 1500);
        // }
      }
    },

        handleWheel(event){
            

            const deltaY = event.deltaY;

            if (deltaY > 2) {
        console.log('Scrolling down');

        // Increment the scroll count
        this.scrollCount++;

        console.log('scroll',this.scrollCount);

        if(this.scrollCount == 1){
            this.increasewidth();

        }

        // if(this.scrollCount == 4){
       
        //     this.increasewidths();

        // }

        // if(this.scrollCount == 6){
        //     this.increasewidth2();

        // }

        // if(this.scrollCount == 8){
        //     this.increasewidth3();

        // }

        // if(this.scrollCount == 10){
        //     this.increasewidth4();

        // }

      
//         if (this.scrollCount > 1 && this.nextpage) {
//             // this.showContent = false
//             const mainBox = this.$refs.mainBox;


//             if (mainBox) {
//           this.isRotated = !this.isRotated;



//         gsap.to(mainBox, { duration: 3, opacity:0, ease: 'power2.inOut' });



//         }

//             console.log('sssssss');
//       //     this.drop = true
//       // this.isBounceAnimationEnabled = true

// //       setTimeout(() => {
// //   this.$router.push('/pricing');
// //   setTimeout(() => {
// //     window.location.reload(true); // Passing true as a parameter forces a reload from the server
// //   }, 100); // Adjust the timeout value as needed
// // }, 2000);
   
        
//           // setTimeout(() => {
//           //   this.$router.push('/pricing');
//           // }, 1500);
//         }
      }

         


        },



        increasewidth(){
      console.log('SIZE',this.pagesize);
  
          const advancedBox = this.$refs.advancedBox;
  
              if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '28px', left:'120px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
            

            gsap.to(vector, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidths();
      }, 2500);
              }



              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  
              gsap.to(advancedBox, { duration: 2, top: '69px', left:'116px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
            

            gsap.to(vector, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidths();
      }, 2500);
              }


              
              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              console.log('talha');
  
              gsap.to(advancedBox, { duration: 2, top: '25px', left:'167px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
            

            gsap.to(vector, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

      setTimeout(() => {
        this.increasewidths();
      }, 2500);


              }


              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              console.log('talhasss');
  
              gsap.to(advancedBox, { duration: 2, top: '25px', left:'167px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 1, display:'block', ease: 'power4.inOut' });

                    }
            }, 1000);
            setTimeout(() => {
                this.increasewidths();
            }, 2500);



              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              console.log('talhasss');
  
              gsap.to(advancedBox, { duration: 2, top: '25px', left:'167px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 1, display:'block', ease: 'power4.inOut' });

                    }
            }, 1000);

            
              setTimeout(() => {
        this.increasewidths();
      }, 2500);
           
              }

              if (this.pagesize <= 600 && this.pagesize > 375) {
              
              console.log('talhasssz');
  
              gsap.to(advancedBox, { duration: 2, top: '130px', left:'49px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 1, display:'block', ease: 'power4.inOut' });

                    }
            }, 1000);

                      setTimeout(() => {
        this.increasewidths();
      }, 2500);
           
              }


              if (this.pagesize <= 375) {
              
              console.log('nazar');
  
              gsap.to(advancedBox, { duration: 2, top: '143px', left:'39px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 1, display:'block', ease: 'power4.inOut' });

                    }
            }, 1000);

                      setTimeout(() => {
        this.increasewidths();
      }, 2500);
           
              }


          

            },


            increasewidths(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
            console.log('1366');
  
              gsap.to(advancedBox, { duration: 2, top: '123px', left:'395px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth2();
      }, 2500);
              }


              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 2, top: '185px', left:'395px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth2();
      }, 2500);
              }

              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 2, top: '185px', left:'480px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth2();
      }, 2500);
              }

              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 2, top: '209px', left:'528px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth2();
      }, 2500);
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 2, top: '209px', left:'528px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth2();
      }, 2500);
              }

              if (this.pagesize <= 600 && this.pagesize > 375) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 2, top: '173px', left:'130px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth2();
      }, 2500);
              }

              if (this.pagesize <= 375 ) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 2, top: '176px', left:'115px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth2();
      }, 2500);
              }
            },



            increasewidth2(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '230px', left:'700px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2500);
              }

              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '308px', left:'700px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2500);
              }


              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '333px', left:'837px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2500);
              }


              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '355px', left:'955px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2500);
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '355px', left:'955px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
      setTimeout(() => {
        this.increasewidth3();
      }, 2500);
              

              }

              if (this.pagesize <= 600 && this.pagesize > 375) {
              
              
  
                gsap.to(advancedBox, { duration: 2, top: '210px', left:'226px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
                setTimeout(() => {
        this.increasewidth3();
      }, 2500);
              

              }

              if (this.pagesize <= 375 ) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '210px', left:'196px', ease: 'power2.inOut' });
            setTimeout(() => {
              const vectorss = this.$refs.vectorss;

          if (vectorss) {
          
          

          gsap.to(vectorss, { duration: 1, display:'block', ease: 'power4.inOut' });

          }
    }, 1000);
              setTimeout(() => {
      this.increasewidth3();
    }, 2500);
            

            }
            },


            increasewidth3(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '57px', left:'898px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth4();
      }, 2500);
              }


              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '100px', left:'928px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth4();
      }, 2500);
              }


              if (this.pagesize <= 1600  && this.pagesize > 1400) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '100px', left:'1107px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth4();
      }, 2500);
              }

              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '89px', left:'1236px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth4();
      }, 2500);
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '89px', left:'1236px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth4();
      }, 2500);
              }

              if (this.pagesize <= 600 && this.pagesize > 375) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '143px', left:'300px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth4();
      }, 2500);
              }

              if (this.pagesize <= 375) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '153px', left:'259px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

              setTimeout(() => {
        this.increasewidth4();
      }, 2500);
              }
            },


            increasewidth4(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '55px', left:'638px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
    

              setTimeout(() => {
        this.nextpage = true;
      }, 2500);
              }

              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '124px', left:'638px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
   

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);
              }


              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '124px', left:'755px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
   

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }


              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '124px', left:'854px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
     

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '124px', left:'854px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);
     

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }


              if (this.pagesize <= 600  && this.pagesize > 375) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '150px', left:'207px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

      // setTimeout(() => {
      //               const mainBox = this.$refs.mainBox;


      //           if (mainBox) {
      //           this.isRotated = !this.isRotated;



      //           gsap.to(mainBox, { duration: 3, opacity:0, ease: 'power2.inOut' });



      //           }

      //           console.log('sssssss');
      //               this.drop = true
      //           this.isBounceAnimationEnabled = true


      //           setTimeout(() => {
      //           this.$router.push('/dashboard');
      //           }, 1500);
      //       },4500)
     

    //   setTimeout(() => {
    //     this.nextpage = true;
    //   }, 2500);

    
              }


              if (this.pagesize <= 375) {
              
              
  
              gsap.to(advancedBox, { duration: 2, top: '161px', left:'178px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 1, display:'block', ease: 'power4.inOut' });

            }
      }, 1000);

      
      // setTimeout(() => {
      //               const mainBox = this.$refs.mainBox;


      //           if (mainBox) {
      //           this.isRotated = !this.isRotated;



      //           gsap.to(mainBox, { duration: 3, opacity:0, ease: 'power2.inOut' });



      //           }

      //           console.log('sssssss');
               

      //           setTimeout(() => {
      //           this.$router.push('/pricing');
      //           }, 1500);
      //       },4500)
     

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }
              
            }




    }

    }

  

</script>


<style scoped>

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


.vectorssss{

    position: absolute;
    left: 933px;
    width: 24%;
    display: none;
    z-index: 0;
    top: 52px;

}

.vectorsss{

    position: absolute;
    left: 1069px;
    width: 15%;
    top: 153px;
    display: none;
    z-index: 0;

}

.vectorss{
    position: absolute;
    left: 712px;
    top: 284px;
    width: 20%;
    display: none;
    z-index: 0;
}

.vectors{
    position: absolute;
    left: 346px;
    top: 94px;
    width: 18%;

    display: none;
    z-index: 0;
}

.vector{
    position: absolute;
    top: 90px;
    left: 166px;
    width: 5%;
    display: none;
    z-index: 0;
}

.main-new {
    width: 100%;
    background-color: #589AD3 !important;
    height: 100vh;
}

.contaner {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}

.new-detail-box {
    width: 100%;
   
}
.clinte-box{
    background-image: url(../assets/images/main-newbg.png);
    height: 775px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
.new-detail-box h1 {
    font-size: 73px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 136px 0px 30px 0px;
}
img.\35 {
    position: absolute;
    top: 260px;
    left: 117px;
    z-index: 1 !important;
}


@media screen and (max-width: 1920px){
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


.vectorssss{

    position: absolute;
    left: 933px;
    width: 24%;
    display: none;
    z-index: 0;
    top: 52px;

}

.vectorsss{

    position: absolute;
    left: 1069px;
    width: 15%;
    top: 153px;
    display: none;
    z-index: 0;

}

.vectorss{
    position: absolute;
    left: 712px;
    top: 284px;
    width: 20%;
    display: none;
    z-index: 0;
}

.vectors{
    position: absolute;
    left: 346px;
    top: 94px;
    width: 18%;

    display: none;
    z-index: 0;
}

.vector{
    position: absolute;
    top: 90px;
    left: 166px;
    width: 5%;
    display: none;
    z-index: 0;
}

.main-new {
    width: 100%;
    background-color: #589AD3 !important;
    height: 100%;
}

.contaner {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}

.new-detail-box {
    width: 100%;
   
}
.clinte-box{
    background-image: url(../assets/images/main-newbg.png);
    height: 775px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
.new-detail-box h1 {
    font-size: 72px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 136px 0px 30px 0px;
}
img.\35 {
    position: absolute;
    top: 260px;
    left: 117px;
    z-index: 1 !important;
}
}

@media screen and (max-width: 1600px){

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


    .vectorssss {
    position: absolute;
    left: 843px;
    width: 24%;
    display: none;
    z-index: 0;
    top: 38px;
}

    .vectorsss {
    position: absolute;
    left: 1002px;
    width: 13%;
    top: 127px;
    display: none;
    z-index: 0;
}

    .vectorss {
    position: absolute;
    left: 661px;
    top: 246px;
    width: 20%;
    display: none;
    z-index: 0;
}
    .vectors {
    position: absolute;
    left: 318px;
    top: 78px;
    width: 18%;
    display: none;
    z-index: 0;
}
    .vector {
    position: absolute;
    top: 67px;
    left: 149px;
    width: 5%;
    display: none;
    z-index: 0;
}
    .new-detail-box h1 {
    font-size: 65px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 80px 0px 20px 0px;
}
.contaner {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
}
.clinte-box {
    background-image: url(/src/assets/images/main-newbg.png);
    height: 680px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
img.\35  {
    position: absolute;
    top: 222px;
    left: 117px;
    width: 5%;
}
}

@media screen and (max-width: 1440px){

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

    .vectorssss {
    position: absolute;
    left: 708px;
    width: 24%;
    display: none;
    z-index: 0;
    top: 68px;
}

    .vectorsss {
    position: absolute;
    left: 819px;
    width: 14%;
    top: 135px;
    display: none;
    z-index: 0;
}

    .vectorss {
    position: absolute;
    left: 548px;
    top: 246px;
    width: 20%;
    display: none;
    z-index: 0;
}
    .vectors {
    position: absolute;
    left: 252px;
    top: 91px;
    width: 19%;
    display: none;
    z-index: 0;
}

    .vector {
    position: absolute;
    top: 106px;
    left: 121px;
    width: 5%;
    display: none;
    z-index: 0;
}

    img.\35  {
    position: absolute;
    top: 217px;
    left: 90px;
    width: 5%;
}
    .new-detail-box h1 {
    font-size: 52px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 70px 0px 15px 0px;
}
.contaner {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}
.clinte-box {
    background-image: url(/src/assets/images/main-newbg.png);
    height: 645px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
}



@media screen and (max-width: 1366px){

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


    .vectorssss{

        position: absolute;
    left: 695px;
    width: 24%;
    display: none;
    z-index: 0;
    top: 4px;
}

.vectorsss{

position: absolute;
left: 787px;
width: 15%;
top: 75px;
display: none;
z-index: 0;

}

.vectorss{
position: absolute;
left: 512px;
top: 178px;
width: 20%;
display: none;
z-index: 0;
}

.vectors{
position: absolute;
left: 241px;
top: 42px;
width: 18%;

display: none;
z-index: 0;
}

.vector{
position: absolute;
top: 41px;
left: 121px;
width: 5%;
display: none;
z-index: 0;
}

img.\35  {
    position: absolute;
    top: 156px;
    left: 90px;
    width: 5%;
}


    .new-detail-box h1 {
    font-size: 53px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 50px 0px 10px 0px;
}
.clinte-box {
    background-image: url(/src/assets/images/main-newbg.png);
    height: 505px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
}



@media screen and (max-width: 1024PX){

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

    .clinte-box
     {
    background-image: url(/src/assets/images/main-newbg.png);
    height: 575px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    position: relative;
}
.new-detail-box h1
 {
    font-size: 40px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 40px 0px 0px 0px;
}
.main-new
 {
    width: 100%;
    background-color: #8F8F8F;
    padding: 10px 65px;
}
img.\35 
 {
    position: absolute;
    top: 167px;
    left: 145px;
    width: 5%;
}
}



@media screen and (max-width: 1024PX){
.new-detail-box h1 {
    font-size: 40px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 20px 0px 0px 0px;
}
.clinte-box{
    background-image: url(/src/assets/images/main-newbg.png);
    height: 435px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    position: relative;
}
}


@media screen and (max-width: 768px){

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

    .main-new{
    width: 100%;
    background-color: #8F8F8F;
    padding: 10px 24px;
}
.new-detail-box h1{
    font-size: 35px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 20px 0px 0px 0px;
}
}

@media screen and (max-width: 600px){

  .new-detail-box h1 {
    font-size: 17px;
    color: #F1F1EF;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 20px 0px 0px 0px;
}

  .new-detail-box {
    width: 100%;

    padding-top: 150px;
   
}
    img.\35{
    position: absolute;
    top: 185px;

    left: 31px;
    width: 5%;
}

.vector{
    position: absolute;
    top: 148px;
    left: 40px;
    width: 5%;
    display: none;
    z-index: 0;
}

.vectors{
    position: absolute;
    left: 92px;
    top: 145px;
    width: 18%;
    display: none;
    z-index: 0;
}

.vectorss {
    position: absolute;
    left: 174px;
    top: 186px;
    width: 22%;
    display: none;
    z-index: 0;
}

.vectorsss {
    position: absolute;
    left: 257px;
    width: 15%;
    top: 171px;
    display: none;
    z-index: 0;
}

.vectorssss {
    position: absolute;
    left: 229px;
    width: 24%;
    display: none;
    z-index: 0;
    top: 135px;
}

.main-new {
    width: 100%;
    background-color: #8F8F8F;
    padding: 10px 24px;
    height: 100vh;
}
}


@media screen and (max-width: 375px){

  

  .new-detail-box {
    width: 100%;

    padding-top: 150px;
   
}
    img.\35{
    position: absolute;
    top: 185px;

    left: 31px;
    width: 5%;
}

.vector{
    position: absolute;
    top: 156px;
    left: 40px;
    width: 5%;
    display: none;
    z-index: 0;
}

.vectors{
    position: absolute;
    left: 75px;
    top: 152px;
    width: 18%;
    display: none;
    z-index: 0;
}

.vectorss {
    position: absolute;
    left: 149px;
    top: 191px;
    width: 22%;
    display: none;
    z-index: 0;
}

.vectorsss {
    position: absolute;
    left: 226px;
    width: 15%;
    top: 171px;
    display: none;
    z-index: 0;
}

.vectorssss {
  position: absolute;
    left: 202px;
    width: 24%;
    display: none;
    z-index: 0;
    top: 143px;
}

.main-new {
    width: 100%;
    background-color: #8F8F8F;
    padding: 10px 24px;
    height: 100vh;
}
}
</style>
