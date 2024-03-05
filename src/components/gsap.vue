<template>
  <div ref="app">
    <section class="first">
      <div class="outer">
        <div class="inner">
          <div class="bg one">
            <h2 class="section-heading"></h2>
          </div>
        </div>
      </div>
    </section>

    <section class="second">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">Animated with GSAP</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="new-section">
    <div class="cont">
      <div class="bg">
      
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
      </div>
  </section>
  </div>
</template>

<script>
import gsap from 'gsap';
import { Observer } from "gsap/Observer";
import SplitText from 'split-type';

gsap.registerPlugin(Observer);

export default {
  data() {
    return {
      sections: null,
      images: null,
      headings: null,
      outerWrappers: null,
      innerWrappers: null,
      splitHeadings: null,
      currentIndex: -1,
      wrap: null,
      animating: false,
    };
  },
  mounted() {
    this.sections = this.$el.querySelectorAll("section");
    this.images = this.$el.querySelectorAll(".bg");
    this.headings = gsap.utils.toArray(".section-heading");
    this.outerWrappers = gsap.utils.toArray(".outer");
    this.innerWrappers = gsap.utils.toArray(".inner");
    this.splitHeadings = this.headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" }));
    this.currentIndex = -1;
    this.wrap = gsap.utils.wrap(0, this.sections.length);

    gsap.set(this.outerWrappers, { yPercent: 100 });
    gsap.set(this.innerWrappers, { yPercent: -100 });

    this.gotoSection(0, 1);

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !this.animating && this.gotoSection(this.currentIndex - 1, -1),
      onUp: () => !this.animating && this.gotoSection(this.currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });
  },
  methods: {
    gotoSection(index, direction) {
      this.animating = true;
      index = this.wrap(index);

      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => (this.animating = false)
          });

      if (this.currentIndex >= 0) {
        gsap.set(this.sections[this.currentIndex], { zIndex: 0 });
        tl.to(this.images[this.currentIndex], { yPercent: -15 * dFactor })
          .set(this.sections[this.currentIndex], { autoAlpha: 0 });
      }

      gsap.set(this.sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([this.outerWrappers[index], this.innerWrappers[index]], { 
          yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, { 
          yPercent: 0 
        }, 0)
        .fromTo(this.images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(this.splitHeadings[index].chars, { 
            autoAlpha: 0, 
            yPercent: 150 * dFactor
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
          }, 0.2);

      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");


.new {
  width: 46% !important;
  position: absolute;
  top:-30px !important;
  left: 29%;
  z-index: 0;
   opacity: 0; /* Initially set opacity to 0 */
  visibility: hidden; /* Initially set visibility to hidden */
  // animation: showAndBounce 2s cubic-bezier(0.68, -2.55, 0.27, 3.55) 1s forwards
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




$bg-gradient: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.3) 100%
);

* {
  box-sizing: border-box;
  user-select: none;
}

a {
  color: #fff;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  color: white;
  background: black;
  font-family: "Cormorant Garamond", serif;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5em;
  margin-right: -0.5em;
  color: hsl(0, 0, 80%);
  width: 90vw;
  max-width: 1200px;
}

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  z-index: 3;
  height: 7em;
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(0.66rem, 2vw, 1rem);
  letter-spacing: 0.5em;
}

section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;

  .outer,
  .inner {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }

  .bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-size: cover;
    background-position: center;

    h2 {
      z-index: 2;
    }

    .clip-text {
      overflow: hidden;
    }
  }
}

.first {
  .bg {
    background-image: $bg-gradient,
      url(https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920);
  }
}

.second {
  .bg {
    background-image: $bg-gradient,
      url("https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920");
  }
}

.third {
  .bg {
    background-image: $bg-gradient,
      url(https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920);
  }
}

.fourth {
  .bg {
    background-image: $bg-gradient,
      url(https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920);
  }
}

.fifth {
  .bg {
    background-image: $bg-gradient,
      url("https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920");
    background-position: 50% 45%;
  }
}

h2 * {
  will-change: transform;
}
</style>
