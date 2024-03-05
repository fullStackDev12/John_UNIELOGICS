<template>




<transition name="fade-in" class="fade-in">
<div class="main-new"  ref="mainBox" @wheel="handleWheel" @touchstart="handleTouch" @touchmove="handleTouch" @touchend="handleTouch">

 <div class="contaner" >
    <div class="new-detail-box">
      <span class="exi">
        Don't Limit Your Store
      </span>
        <h1 ref="unilogics">Grow On The UnieLogics Network</h1>

        
<!-- <h1 ref="explore" style="width: 100%;
    display: none; opacity: 0; cursor: pointer;" @touchstart="gotos" @touchmove="gotos" @touchend="gotos"  @click="gotos"> -->

<!-- <h1 ref="explore" style="width: 100%;
     opacity: 0; cursor: pointer;"> -->

    
    

<div style="    display: flex;
    justify-content: center;
">



<button @click="gotos">
        <svg
           xmlns="http://www.w3.org/2000/svg"
           class="h-6 w-6"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           stroke-width="4"
         >
           <path
             stroke-linecap="round"
             stroke-linejoin="round"
             d="M14 5l7 7m0 0l-7 7m7-7H3"
           ></path>
         </svg>
         <p>Explore More</p>
       </button>

      </div>

<!-- </h1> -->
        <!-- <h1 ref="explore" style="width: 40%;
    display: none; opacity: 0; cursor: pointer;" @touchstart="gotos" @touchmove="gotos" @touchend="gotos"  @click="gotos">Explore More</h1> -->

        <div class="clinte-box">
            <!-- <img class="5"  src="../assets/images/XMLID_4685_.png" alt="" ref="advancedBox">  -->

            <img class="vector"  src="../assets/images/map_vector_1.png" alt="" ref="vector">
            <img class="vector1"  src="../assets/images/one.png" alt="" ref="vector1">

            <img class="vectors"  src="../assets/images/map_vector_2.png" alt="" ref="vectors">
            <img class="vector2"  src="../assets/images/two.png" alt="" ref="vector2">

            <img class="vectorss"  src="../assets/images/map_vector_3.png" alt="" ref="vectorss">
            <img class="vector3"  src="../assets/images/three.png" alt="" ref="vector3">


            <img class="vectorsss"  src="../assets/images/map_vector_4.png" alt="" ref="vectorsss">
            <img class="vector4"  src="../assets/images/four.png" alt="" ref="vector4">


            <img class="vectorssss"  src="../assets/images/map_vector_5.png" alt="" ref="vectorssss">
            <img class="vector5"  src="../assets/images/five.png" alt="" ref="vector5">

            <img class="vectorsssss"  src="../assets/images/map_vector_6.png" alt="" ref="vectorsssss">
            <img class="vector6"  src="../assets/images/six.png" alt="" ref="vector6">







          
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

  
  };
},

        // name:'Home1',

        created(){

            this.pagesize = window.innerWidth;
 
    console.log('screen', this.pagesize);
   


        setTimeout(() => {
        this.increasewidth();
      }, 1000);


     
    },

    methods:{

      gotos(){

        const mainBox = this.$refs.mainBox;
  
  if (mainBox) {
  
  

  gsap.to(mainBox, { duration: 2, opacity:0, ease: 'power4.inOut' });

}

                    setTimeout(() => {
  this.$router.push('/pricing');
  setTimeout(() => {
    window.location.reload(true); 
  }, 100);
}, 2000);
      },
      increasewidth(){
      console.log('SIZE',this.pagesize);
  
          const advancedBox = this.$refs.advancedBox;
  
              if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '28px', left:'120px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
            

            gsap.to(vector, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

      setTimeout(() => {
                const vector2 = this.$refs.vector2;
  
            if (vector2) {
            
            

            gsap.to(vector2, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidths();
      }, 2000);
              }



              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  
              gsap.to(advancedBox, { duration: 4, top: '69px', left:'116px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
            

            gsap.to(vector, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

      setTimeout(() => {
                const vector2 = this.$refs.vector2;
  
            if (vector2) {
            
            

            gsap.to(vector2, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidths();
      }, 2000);
              }


              
              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              console.log('talha');
  
              gsap.to(advancedBox, { duration: 4, top: '25px', left:'167px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
            

            gsap.to(vector, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

      setTimeout(() => {
                const vector2 = this.$refs.vector2;
  
            if (vector2) {
            
            

            gsap.to(vector2, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

      setTimeout(() => {
        this.increasewidths();
      }, 2000);


              }


              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              console.log('talhasss');
  
              gsap.to(advancedBox, { duration: 4, top: '25px', left:'167px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 2, display:'block', ease: 'power4.inOut' });

                    }
            }, 1500);

            setTimeout(() => {
                const vector2 = this.$refs.vector2;
  
            if (vector2) {
            
            

            gsap.to(vector2, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
            setTimeout(() => {
                this.increasewidths();
            }, 2000);



              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              console.log('talhasss');
  
              gsap.to(advancedBox, { duration: 4, top: '25px', left:'167px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 2, display:'block', ease: 'power4.inOut' });

                    }
            }, 1500);

            setTimeout(() => {
                const vector2 = this.$refs.vector2;
  
            if (vector2) {
            
            

            gsap.to(vector2, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

            
              setTimeout(() => {
        this.increasewidths();
      }, 2000);
           
              }

              if (this.pagesize <= 425 && this.pagesize > 375) {
              
              console.log('talhasssz');
  
              gsap.to(advancedBox, { duration: 4, top: '130px', left:'49px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 2, display:'block', ease: 'power4.inOut' });

                    }
            }, 1500);

            setTimeout(() => {
                const vector2 = this.$refs.vector2;
  
            if (vector2) {
            
            

            gsap.to(vector2, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

                      setTimeout(() => {
        this.increasewidths();
      }, 2000);
           
              }


              if (this.pagesize <= 375) {
              
              console.log('nazar');
  
              gsap.to(advancedBox, { duration: 4, top: '143px', left:'39px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vector = this.$refs.vector;
  
            if (vector) {
            
        
            gsap.to(vector, { duration: 2, display:'block', ease: 'power4.inOut' });

                    }
            }, 1500);

            setTimeout(() => {
                const vector2 = this.$refs.vector2;
  
            if (vector2) {
            
            

            gsap.to(vector2, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

                      setTimeout(() => {
        this.increasewidths();
      }, 2000);
           
              }


          

            },


            increasewidths(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
            console.log('1366');
  
              gsap.to(advancedBox, { duration: 4, top: '123px', left:'395px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector3 = this.$refs.vector3;
  
  if (vector3) {
  
  

  gsap.to(vector3, { duration: 2, display:'block', ease: 'power4.inOut' });

  }
      }, 1500);

              setTimeout(() => {
        this.increasewidth2();
      }, 2000);
              }


              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 4, top: '185px', left:'395px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector3 = this.$refs.vector3;
  
  if (vector3) {
  
  

  gsap.to(vector3, { duration: 2, display:'block', ease: 'power4.inOut' });

  }
      }, 1500);

              setTimeout(() => {
        this.increasewidth2();
      }, 2000);
              }

              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 4, top: '185px', left:'480px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector3 = this.$refs.vector3;
  
  if (vector3) {
  
  

  gsap.to(vector3, { duration: 2, display:'block', ease: 'power4.inOut' });

  }
      }, 1500);

              setTimeout(() => {
        this.increasewidth2();
      }, 2000);
              }

              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 4, top: '209px', left:'528px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector3 = this.$refs.vector3;
  
            if (vector3) {
            
            

            gsap.to(vector3, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth2();
      }, 2000);
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 4, top: '209px', left:'528px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector3 = this.$refs.vector3;
  
          if (vector3) {
          
          

          gsap.to(vector3, { duration: 2, display:'block', ease: 'power4.inOut' });

          }
      }, 1500);

              setTimeout(() => {
        this.increasewidth2();
      }, 2000);
              }

              if (this.pagesize <= 425 && this.pagesize > 375) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 4, top: '173px', left:'130px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector3 = this.$refs.vector3;
  
  if (vector3) {
  
  

  gsap.to(vector3, { duration: 2, display:'block', ease: 'power4.inOut' });

  }
      }, 1500);

              setTimeout(() => {
        this.increasewidth2();
      }, 2000);
              }

              if (this.pagesize <= 375 ) {
              
              console.log('1440');
  
              gsap.to(advancedBox, { duration: 4, top: '176px', left:'115px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectors = this.$refs.vectors;
  
            if (vectors) {
            
            

            gsap.to(vectors, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector3 = this.$refs.vector3;
  
  if (vector3) {
  
  

  gsap.to(vector3, { duration: 2, display:'block', ease: 'power4.inOut' });

  }
      }, 1500);

              setTimeout(() => {
        this.increasewidth2();
      }, 2000);
              }
            },



            increasewidth2(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '230px', left:'700px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

//             const vector4 = this.$refs.vector4;
  
//               if (vector4) {
              
              

//               gsap.to(vector4, { duration: 2, display:'block', ease: 'power4.inOut' });

//   }

//   const unilogics = this.$refs.unilogics;
  
//   if (unilogics) {
  
  

//   gsap.to(unilogics, { duration: 1, opacity:0, display:'none', ease: 'power4.inOut' });

// }


setTimeout(() => {
const explore = this.$refs.explore;
  
  if (explore) {
  
  

  gsap.to(explore, { duration: 2, display:'block', width:'100%', opacity:1 ,ease: 'power4.inOut' });

}
}, 1000);


  
      }, 1500);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2000);
              }

              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '308px', left:'700px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

//             const vector4 = this.$refs.vector4;
  
//   if (vector4) {
  
  

//   gsap.to(vector4, { duration: 2, display:'block', ease: 'power4.inOut' });

// }

// const unilogics = this.$refs.unilogics;
  
//   if (unilogics) {
  
  

//   gsap.to(unilogics, { duration: 1, opacity:0, display:'none', ease: 'power4.inOut' });

// }


setTimeout(() => {
const explore = this.$refs.explore;
  
  if (explore) {
  
  

  gsap.to(explore, { duration: 2, display:'block', width:'100%', opacity:1 ,ease: 'power4.inOut' });

}
}, 1000);
      }, 1500);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2000);
              }


              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '333px', left:'837px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

//             const vector4 = this.$refs.vector4;
  
//   if (vector4) {
  
  

//   gsap.to(vector4, { duration: 2, display:'block', ease: 'power4.inOut' });

// }

// const unilogics = this.$refs.unilogics;
  
//   if (unilogics) {
  
  

//   gsap.to(unilogics, { duration: 1, opacity:0, display:'none', ease: 'power4.inOut' });

// }


setTimeout(() => {
const explore = this.$refs.explore;
  
  if (explore) {
  
  

  gsap.to(explore, { duration: 2, display:'block', width:'100%', opacity:1 ,ease: 'power4.inOut' });

}
}, 1000);
      }, 1500);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2000);
              }


              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '355px', left:'955px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

//             const vector4 = this.$refs.vector4;
  
//   if (vector4) {
  
  

//   gsap.to(vector4, { duration: 2, display:'block', ease: 'power4.inOut' });

// }

// const unilogics = this.$refs.unilogics;
  
//   if (unilogics) {
  
  

//   gsap.to(unilogics, { duration: 1, opacity:0, display:'none', ease: 'power4.inOut' });

// }


setTimeout(() => {
const explore = this.$refs.explore;
  
  if (explore) {
  
  

  gsap.to(explore, { duration: 2, display:'block', width:'100%', opacity:1 ,ease: 'power4.inOut' });

}
}, 1000);
      }, 1500);
              

              setTimeout(() => {
        this.increasewidth3();
      }, 2000);
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '355px', left:'955px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

//             const vector4 = this.$refs.vector4;
  
//   if (vector4) {
  
  

//   gsap.to(vector4, { duration: 2, display:'block', ease: 'power4.inOut' });

// }

// const unilogics = this.$refs.unilogics;
  
//   if (unilogics) {
  
  

//   gsap.to(unilogics, { duration: 1, opacity:0, display:'none', ease: 'power4.inOut' });

// }


setTimeout(() => {
const explore = this.$refs.explore;
  
  if (explore) {
  
  

  gsap.to(explore, { duration: 2, display:'block', width:'100%', opacity:1 ,ease: 'power4.inOut' });

}
}, 1000);
      }, 1500);
      setTimeout(() => {
        this.increasewidth3();
      }, 2000);
              

              }

              if (this.pagesize <= 600 && this.pagesize > 375) {
              
              
  
                gsap.to(advancedBox, { duration: 4, top: '210px', left:'226px', ease: 'power2.inOut' });
              setTimeout(() => {
                const vectorss = this.$refs.vectorss;
  
            if (vectorss) {
            
            

            gsap.to(vectorss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

//             const vector4 = this.$refs.vector4;
  
//   if (vector4) {
  
  

//   gsap.to(vector4, { duration: 2, display:'block', ease: 'power4.inOut' });

// }

// const unilogics = this.$refs.unilogics;
  
//   if (unilogics) {
  
  

//   gsap.to(unilogics, { duration: 1, opacity:0, display:'none', ease: 'power4.inOut' });

// }


setTimeout(() => {
const explore = this.$refs.explore;
  
  if (explore) {
  
  

  gsap.to(explore, { duration: 2, display:'block', width:'100%', opacity:1 ,ease: 'power4.inOut' });

}
}, 1000);
      }, 1500);
                setTimeout(() => {
        this.increasewidth3();
      }, 2000);
              

              }

              if (this.pagesize <= 375 ) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '210px', left:'196px', ease: 'power2.inOut' });
            setTimeout(() => {
              const vectorss = this.$refs.vectorss;

          if (vectorss) {
          
          

          gsap.to(vectorss, { duration: 2, display:'block', ease: 'power4.inOut' });

          }

//           const vector4 = this.$refs.vector4;
  
//   if (vector4) {
  
  

//   gsap.to(vector4, { duration: 2, display:'block', ease: 'power4.inOut' });

// }

// const unilogics = this.$refs.unilogics;
  
//   if (unilogics) {
  
  

//   gsap.to(unilogics, { duration: 1, opacity:0, display:'none', ease: 'power4.inOut' });

// }


setTimeout(() => {
const explore = this.$refs.explore;
  
  if (explore) {
  
  

  gsap.to(explore, { duration: 2, display:'block', width:'100%', opacity:1 ,ease: 'power4.inOut' });

}
}, 1000);
    }, 1500);
              setTimeout(() => {
      this.increasewidth3();
    }, 2000);
            

            }
            },


            increasewidth3(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '57px', left:'898px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

                      const vector5 = this.$refs.vector5;
            
            if (vector5) {
            
            

            gsap.to(vector5, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth4();
      }, 2000);
              }


              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '100px', left:'928px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector5 = this.$refs.vector5;
            
            if (vector5) {
            
            

            gsap.to(vector5, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth4();
      }, 2000);
              }


              if (this.pagesize <= 1600  && this.pagesize > 1400) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '100px', left:'1107px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector5 = this.$refs.vector5;
            
            if (vector5) {
            
            

            gsap.to(vector5, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth4();
      }, 2000);
              }

              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '89px', left:'1236px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector5 = this.$refs.vector5;
            
            if (vector5) {
            
            

            gsap.to(vector5, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth4();
      }, 2000);
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '89px', left:'1236px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector5 = this.$refs.vector5;
            
            if (vector5) {
            
            

            gsap.to(vector5, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth4();
      }, 2000);
              }

              if (this.pagesize <= 425 && this.pagesize > 375) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '143px', left:'300px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector5 = this.$refs.vector5;
            
            if (vector5) {
            
            

            gsap.to(vector5, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth4();
      }, 2000);
              }

              if (this.pagesize <= 375) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '153px', left:'259px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorsss = this.$refs.vectorsss;
  
            if (vectorsss) {
            
            

            gsap.to(vectorsss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector5 = this.$refs.vector5;
            
            if (vector5) {
            
            

            gsap.to(vector5, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);

              setTimeout(() => {
        this.increasewidth4();
      }, 2000);
              }
            },


            increasewidth4(){
      console.log('abcd');
  
          const advancedBox = this.$refs.advancedBox;
  
          if (this.pagesize == 1366 ||this.pagesize < 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '55px', left:'638px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

                      const vector6 = this.$refs.vector6;
            
            if (vector6) {
            
            

            gsap.to(vector6, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
    

              setTimeout(() => {
        this.nextpage = true;
      }, 2500);
              }

              if (this.pagesize <= 1440  && this.pagesize > 1366) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '124px', left:'638px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector6 = this.$refs.vector6;
            
            if (vector6) {
            
            

            gsap.to(vector6, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
   

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);
              }


              if (this.pagesize <= 1600  && this.pagesize > 1440) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '124px', left:'755px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector6 = this.$refs.vector6;
            
            if (vector6) {
            
            

            gsap.to(vector6, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
   

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }


              if (this.pagesize <= 1920  && this.pagesize > 1600) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '124px', left:'854px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector6 = this.$refs.vector6;
            
            if (vector6) {
            
            

            gsap.to(vector6, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
     

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }

              if (this.pagesize <= 3024  && this.pagesize > 1920) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '124px', left:'854px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector6 = this.$refs.vector6;
            
            if (vector6) {
            
            

            gsap.to(vector6, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
     

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }


              if (this.pagesize <= 425  && this.pagesize > 375) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '150px', left:'207px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector6 = this.$refs.vector6;
            
            if (vector6) {
            
            

            gsap.to(vector6, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
      // setTimeout(() => {
      //               const mainBox = this.$refs.mainBox;


      //           if (mainBox) {
      //           this.isRotated = !this.isRotated;



      //           gsap.to(mainBox, { duration: 3, opacity:0, ease: 'power2.inOut' });



      //           }

      //           console.log('sssssss');
      //           //     this.drop = true
      //           // this.isBounceAnimationEnabled = true


      //           // setTimeout(() => {
      //           // this.$router.push('/dashboard');
      //           // }, 1500);
      //       },2000)
   
    
              }


              if (this.pagesize <= 375) {
              
              
  
              gsap.to(advancedBox, { duration: 4, top: '161px', left:'178px', ease: 'power2.inOut' });

              setTimeout(() => {
                const vectorssss = this.$refs.vectorssss;
  
            if (vectorssss) {
            
            

            gsap.to(vectorssss, { duration: 2, display:'block', ease: 'power4.inOut' });

            }

            const vector6 = this.$refs.vector6;
            
            if (vector6) {
            
            

            gsap.to(vector6, { duration: 2, display:'block', ease: 'power4.inOut' });

            }
      }, 1500);
      // setTimeout(() => {
      //               const mainBox = this.$refs.mainBox;


      //           if (mainBox) {
      //           this.isRotated = !this.isRotated;



      //           gsap.to(mainBox, { duration: 3, opacity:0, ease: 'power2.inOut' });



      //           }

      //           console.log('sssssss');
               

      //           // setTimeout(() => {
      //           // this.$router.push('/pricing');
      //           // }, 1500);
      //       },2000)
     

      setTimeout(() => {
        this.nextpage = true;
      }, 2500);

    
              }
              
            }
    }

  
    }

  

</script>


<style scoped>


button {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
}
button {
  --primary-color: #161543;
  --hovered-color: #B44E9D;
  position: relative;
  display: flex;
  font-weight: 500;
  font-size: 40px;
  gap: 0.5rem;
  align-items: center;
}
button p {
  margin: 0;
  position: relative;
  font-size: 30px;
  color: var(--primary-color);
}
button::after {
  position: absolute;
  content: "";
  width: 0;
  left: 0;
  bottom: -7px;
  background: var(--hovered-color);
  height: 2px;
  transition: 0.3s ease-out;
}
button p::before {
  position: absolute;
  /*   box-sizing: border-box; */
  /* content: "Explore More"; */
  width: 0%;
  inset: 0;
  color: var(--hovered-color);
  overflow: hidden;
  transition: 0.3s ease-out;
}
button:hover::after {
  width: 100%;
}
button:hover p::before {
  width: 100%;
}
button:hover svg {
  transform: translateX(190px);
  color: var(--hovered-color);
}
button svg {
  color: var(--primary-color);
  transition: 0.9s;
  position: relative;
  width: 20px;
  transition-delay: 0.2s;
}

/* === removing default button style ===*/
.buttons {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}

/* button styling */
.buttons {
  --border-right: 6px;
  --text-stroke-color: rgba(255,255,255,0.6);
  --animation-color: #161543;
  --fs-size: 1em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.buttons:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}


.vector6{
  position: absolute;
    z-index: 0;
    left: 1096px;
    top: 51px;
    width: 16%;
    display: none;
}

.vector5{
  display: block;
    position: absolute;
    z-index: 0;
    left: 687px;
    top: 279px;
    width: 16%;
    display: none;
}

.vector4{
  display: block;
    position: absolute;
    z-index: 0;
    left: 1233px;
    top: 514px;
    width: 17%;
    display: none;
}

.vector3{
  position: absolute;
    left: 647px;
    top: 17px;
    width: 16%;
    display: none;
    z-index: 0;
    display: none;


}

.vector2{
  position: absolute;
    left: 312px;
top: 440px;
    width: 17%;
    display: none;
    z-index: 0;
    display: none;
}


.vector1{
  position: absolute;
    top: 79px;
    left: 171px;
    width: 15%;
    /* display: none; */
    z-index: 0;
}


.exi{
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    /* line-height: 29.97px; */
    font-family: system-ui;
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

.vectorsssss{

position: absolute;
left: 933px;
width: 24%;
display: none;
z-index: 0;
top: 52px;

}
.vectorssss{

  position: absolute;
    left: 812px;
    width: 27%;
    display: none;
    z-index: 0;
    top: 66px;

}

.vectorsss{

  position: absolute;
    left: 830px;
    width: 31%;
    top: 438px;
    display: none;
    z-index: 0;

}

.vectorss{
  position: absolute;
    left: 821px;
    top: 114px;
    width: 35%;
    display: none;
    z-index: 0;
}



.vectors{
  position: absolute;
    left: 441px;
    top: 115px;
    width: 20%;
    display: none;
    z-index: 0;

}

.vector{
  position: absolute;
    top: 201px;
    left: 320px;
    width: 9%;
    display: none;
    z-index: 0;

}

.main-new {
    width: 100%;
    background-color: #D9D9D9 !important;
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
    background-image: url(../assets/images/usa_map.png);
    height: 775px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
.new-detail-box h1 {
    font-size: 90px;
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 40px 0px 30px 0px;
}
img.\35 {
    position: absolute;
    top: 260px;
    left: 117px;
    z-index: 1 !important;
}


@media screen and (max-width: 1920px){

  button p{
    margin: 0;
    position: relative;
    font-size: 25px;
    color: var(--primary-color);
}

  .exi{
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: 600;
    /* line-height: 29.97px; */
    font-family: system-ui;
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


.vector6{
  position: absolute;
    z-index: 0;
    left: 1096px;
    top: 51px;
    width: 16%;
    display: none;
}

.vector5{
  display: block;
    position: absolute;
    z-index: 0;
    left: 687px;
    top: 279px;
    width: 16%;
    display: none;
}

.vector4{
  display: block;
    position: absolute;
    z-index: 0;
    left: 1233px;
    top: 514px;
    width: 17%;
    display: none;
}

.vector3{
  position: absolute;
    left: 647px;
    top: 17px;
    width: 16%;
    display: none;
    z-index: 0;
    display: none;


}

.vector2{
  position: absolute;
    left: 312px;
top: 440px;
    width: 17%;
    display: none;
    z-index: 0;
    display: none;
}


.vector1{
  position: absolute;
    top: 79px;
    left: 171px;
    width: 15%;
    /* display: none; */
    z-index: 0;
}


.vectorsssss{

position: absolute;

  display: none;
  z-index: 0;
    top: 200px;
    width: 47%;
    left: 475px;


}

.vectorssss{

  position: absolute;
    left: 815px;
    width: 26%;
    display: none;
    z-index: 0;
    top: 71px;

}

.vectorsss{

  position: absolute;
    left: 817px;
    width: 33%;
    top: 432px;
    display: none;
    z-index: 0;

}

.vectorss{
  position: absolute;
    left: 821px;
    top: 131px;
    width: 35%;
    display: none;
    z-index: 0;

}

.vectors{
  position: absolute;
    left: 449px;
    top: 115px;
    width: 20%;
    display: none;
    z-index: 0;
}

.vector{
  position: absolute;
    top: 180px;
    left: 323px;
    width: 10%;
    display: none;
    z-index: 0;
}

.main-new {
    width: 100%;
    background-color: #D9D9D9 !important;
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
    background-image: url(../assets/images/usa_map.png);
    height: 775px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
.new-detail-box h1 {
    font-size: 90px;
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 10px 0px 10px 0px;
}
img.\35 {
    position: absolute;
    top: 260px;
    left: 117px;
    z-index: 1 !important;
}
}

@media screen and (max-width: 1600px){

  .exi{
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 23px;
    font-weight: 600;
    /* line-height: 29.97px; */
    font-family: system-ui;
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

.vectorsssss {
    position: absolute;
    display: none;
    z-index: 0;
    top: 176px;
    width: 47%;
    left: 432px;
}

.vector6 {
    position: absolute;
    z-index: 0;
    left: 995px;
    top: 46px;
    width: 16%;
    display: none;
}

.vector5 {
    display: block;
    position: absolute;
    z-index: 0;
    left: 632px;
    top: 247px;
    width: 16%;
    display: none
}


.vectorssss {
    position: absolute;
    left: 739px;
    width: 25%;
    display: none;
    z-index: 0;
    top: 57px;
}

.vector4{
    display: block;
    position: absolute;
    z-index: 0;
    left: 1121px;
    top: 465px;
    width: 16%;
    display: none;
}

.vectorsss{
    position: absolute;
    left: 745px;
    width: 31%;
    top: 381px;
    display: none;
    z-index: 0
}

.vector3 {
    position: absolute;
    left: 604px;
    top: 16px;
    width: 16%;
    display: none;
    z-index: 0;
    display: none;
}

.vectorss {
    position: absolute;
    left: 742px;
    top: 101px;
    width: 35%;
    display: none;
    z-index: 0;
}

.vector2 {
    position: absolute;
    left: 296px;
    top: 396px;
    width: 16%;
    display: none;
    z-index: 0;
    
}
    .vectors {
      position: absolute;
    left: 413px;
    top: 78px;
    width: 20%;
    display: none;
    z-index: 0;
}

.vector1 {
    position: absolute;
    top: 72px;
    left: 160px;
    width: 15%;
    /* display: none; */
    z-index: 0;
}
    .vector {
      position: absolute;
    top: 171px;
    left: 288px;
    width: 9%;
    display: none;
    z-index:0
}
    .new-detail-box h1 {
    font-size: 70px;
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 5px 0px 5px 0px;
}
.contaner {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
}
.clinte-box {
    background-image: url(/src/assets/images/usa_map.png);
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
  .exi{
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 21px;
    font-weight: 600;
    /* line-height: 29.97px; */
    font-family: system-ui;
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

.vector6 {
    position: absolute;
    z-index: 0;
    left: 833px;
    top: 63px;
    width: 16%;
    display: none;
}

    .vectorssss {
      position: absolute;
    left: 604px;
    width: 27%;
    display: none;
    z-index: 0;
    top: 68px;
}

.vector5{
    display: block;
    position: absolute;
    z-index: 0;
    left: 507px;
    top: 247px;
    width: 16%;
    display: none;
}

.vector4{
  position: absolute;
    z-index: 0;
    left: 940px;
    top: 438px;
    width: 16%;
    display: none;
}

    .vectorsss {
      position: absolute;
    left: 590px;
    width: 36%;
    top: 354px;
    display: none;
    z-index: 0;
}

    .vectorss {
    position: absolute;
    left: 595px;
    top: 110px;
    width: 38%;
    display: none;
    z-index: 0;
}

.vector3{
  position: absolute;
    left: 487px;
    top: 34px;
    width: 16%;
    display: none;
    z-index: 0;
    display: none;
}

.vector2{
  position: absolute;
    left: 225px;
    top: 376px;
    width: 16%;
    display: none;
    z-index: 0;
}
    .vectors {
      position: absolute;
    left: 311px;
    top: 120px;
    width: 20%;
    display: none;
    z-index: 0;
}


.vector1 {
    position: absolute;
    top: 85px;
    left: 103px;
    width: 15%;
    /* display: none; */
    z-index: 0
}
    .vector {
      position: absolute;
    top: 175px;
    left: 207px;
    width: 10%;
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
    font-size: 65px;
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 5px 0px 5px 0px;
}
.contaner {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}
.clinte-box {
    background-image: url(/src/assets/images/usa_map.png);
    height: 645px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
}
}



@media screen and (max-width: 1366px){

  button p{
    margin: 0;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-color);
}

button:hover svg {
  transform: translateX(160px);
  color: var(--hovered-color);
}

  .exi{
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    /* line-height: 29.97px; */
    font-family: system-ui;
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

.vectorsssss {
    position: absolute;
    display: none;
    z-index: 0;
    top: 120px;
    width: 47%;
    left: 349px;
}

.vector6{
  position: absolute;
    z-index: 0;
    left: 805px;
    top: 10px;
    width: 16%;
    display: none;
}


    .vectorssss{

      position: absolute;
    left: 591px;
    width: 26%;
    display: none;
    z-index: 0;
    top: 24px;
}

.vector5{
  display: block;
    position: absolute;
    z-index: 0;
    left: 505px;
    top: 176px;
    width: 16%;
    display: none;
}

.vectorsss{

  position: absolute;
    left: 605px;
    width: 32%;
    top: 283px;
    display: none;
    z-index: 0;

}
.vector4{
  display: block;
    position: absolute;
    z-index: 0;
    left: 902px;
    top: 349px;
    width: 17%;
    display: none;
}

.vectorss{
  position: absolute;
    left: 605px;
    top: 68px;
    width: 34%;
    display: none;
    z-index: 0;

}
.vector3{
  position: absolute;
    left: 483px;
    top: -12px;
    width: 16%;
    display: none;
    z-index: 0;
    display: none;


}

.vectors{
  position: absolute;
    left: 334px;
    top: 71px;
    width: 19%;
    display: none;
    z-index: 0;
}

.vector2{
  position: absolute;
    left: 231px;
    top: 292px;
    width: 17%;
    display: none;
    z-index: 0;
    display: none;
}

.vector{
  position: absolute;
    top: 104px;
    left: 235px;
    width: 10%;
    display: none;
    z-index: 0;
}

.vector1{
  position: absolute;
    top: 29px;
    left: 120px;
    width: 15%;
    /* display: none; */
    z-index: 0;
}

img.\35  {
    position: absolute;
    top: 156px;
    left: 90px;
    width: 5%;
}


    .new-detail-box h1 {
    font-size: 60px;
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 5px 0px 5px 0px;
}
.clinte-box {
    background-image: url(/src/assets/images/usa_map.png);
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
    background-image: url(/src/assets/images/usa_map.png);
    height: 575px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    position: relative;
}
.new-detail-box h1
 {
    font-size: 50px;
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 5px 0px 0px 0px;
}
.main-new
 {
    width: 100%;
    background-color: #D9D9D9;
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
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 5px 0px 0px 0px;
}
.clinte-box{
    background-image: url(/src/assets/images/usa_map.png);
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
    background-color: #D9D9D9;
    padding: 10px 24px;
}
.new-detail-box h1{
    font-size: 30px;
    color: #161543;
    font-family: 'Poly Sans', sans-serif;
    text-align: center;
    font-weight: 500;
    padding: 5px 0px 0px 0px;
}
}

@media screen and (max-width: 600px){

  button p{
    margin: 0;
    position: relative;
    font-size: 20px;
    color: var(--primary-color);
}

button:hover svg {
  transform: translateX(170px);
  color: var(--hovered-color);
}


  .new-detail-box {
    width: 100%;

    padding-top: 50px;
   
}
    img.\35{
    position: absolute;
    top: 185px;

    left: 31px;
    width: 5%;
}

.vector1{
    position: absolute;
    top: 140px;
    left: 38px;
    width: 17%;
    /* display: none; */
    z-index: 0;
}

.vector2 {
    position: absolute;
    left: 77px;
    top: 230px;
    width: 17%;
    display: none;
    z-index: 0;
    display: none;
}

.vector3 {
    position: absolute;
    left: 158px;
    top: 127px;
    width: 16%;
    display: none;
    z-index: 0;
    display: none;
}

.vector4 {
    display: block;
    position: absolute;
    z-index: 0;
    left: 294px;
    top: 249px;
    width: 17%;
    display: none;
}

.vector5 {
    display: block;
    position: absolute;
    z-index: 0;
    left: 167px;
    top: 193px;
    width: 16%;
    display: none;
}

.vector6{
    position: absolute;
    z-index: 0;
    left: 264px;
    top: 137px;
    width: 16%;
    display: none;
}
.vector {
    position: absolute;
    top: 167px;
    left: 77px;
    width: 10%;
    display: none;
    z-index: 0;
}

.vectors{
    position: absolute;
    left: 110px;
    top: 160px;
    width: 18%;
    display: none;
    z-index: 0;
}

.vectorss {
    position: absolute;
    left: 200px;
    top: 157px;
    width: 34%;
    display: none;
    z-index: 0;
}

.vectorsss {
    position: absolute;
    left: 197px;
    width: 33%;
    top: 226px;
    display: none;
    z-index: 0;
}

.vectorssss {
  position: absolute;
    left: 194px;
    width: 27%;
    display: none;
    z-index: 0;
    top: 144px;
}

.main-new {
    width: 100%;
    background-color: #D9D9D9;
    padding: 10px 24px;
    height: 100vh;
}
}


@media screen and (max-width: 375px){

  .new-detail-box {
    width: 100%;

    padding-top: 55px;
   
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
    background-color: #D9D9D9;
    padding: 10px 24px;
    height: 100vh;
}
}
</style>
