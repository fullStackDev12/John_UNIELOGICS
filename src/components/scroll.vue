
    <template>
      <!-- <section class="new-section"> -->

        <div id="app">
 
  <div>
      <div class="boxss" :style="{ width: boxWidth + 'px', height: boxHeight + 'px' , position: alpha}"></div>

  </div>
  </div>


<!-- </section> -->
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      boxWidth: 100,
      boxHeight: 100, 
      alpha:'absolute'
    };
  },
  mounted() {
    this.setupScrollAnimation();
  },
  methods: {
    setupScrollAnimation() {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".boxss",
          start: "top center",
          end: "bottom top",
          scrub: 3,
        }
      });

    //   timeline.to(this.$data, { boxWidth: window.innerWidth, duration: 1, ease: "power2.inOut" });
    //   timeline.to(this.$data, { boxHeight: window.innerHeight, duration: 1, ease: "power2.inOut" });

    timeline.to(this.$data, { 
        boxWidth: window.innerWidth, 
        boxHeight: window.innerHeight, 
        alpha:'fixed',
        duration: 4, 
        ease: "power2.inOut" 
      });
    },
  },
};
</script>

<style scoped>

.zoom-out-enter-active, .zoom-out-leave-active {
  transition: transform 0.5s;
}

.zoom-out-enter, .zoom-out-leave-to /* .zoom-out-leave-active in <2.1.8 */ {
  transform: scale(0.8);
}
#app {
  height: 200vh; 
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
.boxss {
 position: absolute;
  top: 50%;
  right: 5%;
  /* left: 70%; */
  transform: translate(5%, -50%);
  background-color: #3498db;
}
</style>

