<template>

<section class="new-section">
  <!-- <div class="backimage"></div> -->
    <div class="oneSpace">
      <div class="new-sections">

     
      <div class="cont">
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
      
    </div>
    <div class="oneSpace centered background">
    <News/>
    </div>
</section>



 
</template>

<script>



import  News from './dashboardshow.vue';
export default {
  components: {
   
   News,
 
},
  data() {
    return {
    
    };
  },

  mounted() {
    // window.addEventListener("wheel", this.handleWheel);
    // window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("load", this.handleLoad);
    // window.addEventListener("resize", this.handleResize);


    window.addEventListener("wheel", function(event) {
  if (window.innerWidth > 768) {
    replaceVerticalScrollByHorizontal(event);
  //  moveBackground(event.deltaY);
    fillBar();    
  } else {
    // fillBarVertical();
  }
});
window.addEventListener("scroll", function(event){
  moveBackground(event);

  if (window.innerWidth <= 768) {
    fillBarVertical();
  }
})
window.addEventListener("load", function(event) {
  fillBar();
  constructBar();
  scrollArea(document.querySelector('body'))
})
window.addEventListener("resize", function(event){
  fillBar();
  constructBar();
})


var allPoints;
var positions = [];
function replaceVerticalScrollByHorizontal(event) {
    	if (event.deltaY != 0) {
      	// manually scroll horizonally instead
        window.scroll(window.scrollX + event.deltaY * 1, window.scrollY);
        
        // prevent vertical scroll
      	event.preventDefault();
      }
      return;
    }

function fillBar(){
  totalSize = document.body.offsetWidth - window.innerWidth;
  widthPosition = window.scrollX;
  percentPosition = widthPosition / totalSize * 100;
  //console.log(totalSize, widthPosition, percentPosition);
  bar = document.querySelector('.barNav .barNavFuel');
  bar.style.width = percentPosition + '%'; 
  bar.style.height = '1px';
}
function fillBarVertical(){
  totalSize = document.body.offsetHeight - window.innerHeight;
  heightPosition = window.scrollY;
  percentPosition = heightPosition / totalSize * 100;
  //console.log(totalSize, widthPosition, percentPosition);
  bar = document.querySelector('.barNav .barNavFuel');
  bar.style.height = percentPosition + '%'; 
  bar.style.width = '1px';
}

function constructBar() {
  arrowArea = document.querySelector('.arrows');
  arrowArea.innerHTML ="";
  allPoints = document.querySelectorAll('section');
  position = 1;
  allPoints.forEach(function(element) {
      place = (position / totalSize * 100);
      parameter = 'calc('+ place + '% - 4px)';
      arrow = '<i class="fas fa-sort-down" onclick="moveto('+ position +')" style="left:' + parameter + '"></i>';
    arrowArea.innerHTML += arrow;
    position += element.offsetWidth;
    positions.push(position);
  })

}
function moveto(position) {
  startPoint = window.scrollX;
  endPoint = position;
  distance = endPoint - startPoint;
  i = 0;
  changes = distance / 100;
  moving = window.setInterval(function(){
    if (distance > 0) {
      i = i + changes;
      if ( i >= distance ){
        window.scroll(position - 1, 0) ;
        clearInterval(moving);
      } else {
        window.scroll(startPoint + i - 1, 0);
      }

    } else {
      i = i + changes;
      if ( i <= distance ){
        window.scroll(position - 1, 0) ;
        clearInterval(moving);
      } else {
        window.scroll(startPoint + i - 1, 0);
      }

    }
    // fillBar();
  }, 10);
}



function initialPosition(elem) {
  if (elem.dataset['fixed'] == undefined) {
    elem.style.top = 0;
    elem.style.left = 0;
    elem.style.right = 0;
    elem.style.bottom = 0;
    elem.dataset['fixed'] = 1;    
  }
}

function moveBackground(movement){
  console.log(movement);
  position = positions.findIndex(findPosition);
  background = allPoints[position].querySelector('.backimage');
  if (background != null) {
    actualValue = background.style.backgroundPositionX.slice(0, -2);
    movement1 = movement * 0.05;
    // movement1 = window.innerWidth * 0.2 * movement / (positions[position + 1] - positions[position]);
    // if (movement > 0) {
    //   newValue = Number(actualValue) -
    //   background.style.backgroundPositionX = newValue + 'vw'  
    // } else  {
      newValue = Number(actualValue) - movement1;
      block = window.innerWidth * -0.2
      if (newValue <= 0 && newValue >= block) {
        background.style.backgroundPositionX = newValue + 'px';   
      }
    // }
  } 
}

function findPosition(position){
  return position >= window.scrollX + 2;
}

function scrollArea(elem) {
    area = elem;

    elem.addEventListener('mousedown', function(event){
        mouseDownControl(event, elem);
    });
    elem.addEventListener('touchstart', function (event) {
        mouseDownControlMobile(event, elem);
    })
} 
    
    //begin the process of drag
    function mouseDownControl(event, elem) {
        let area = elem;
        event.preventDefault();
        // area.querySelector('#container').style = 'cursor: grabbing';
        // get the mouse cursor position at startup:
        start = event.clientX;
        position = event.clientX;
        area.setAttribute('onmouseup', 'stopDragEvent(this)');
        area.setAttribute('onmouseleave', 'stopDragEvent(this)');
        // call a function whenever the cursor moves:
        area.setAttribute('onmousemove', 'rollTheArea(event, this)');
    }
    function mouseDownControlMobile(event) {
        // get the mouse cursor position at startup:
        start = event.touches[0].clientX;
        position = event.touches[0].clientX;
        // call a function whenever the cursor moves:
        area.ontouchmove = rollTheAreaMobile(event, elem);
    }
    function stopDragEvent(elem) {
       // console.log(elem);
        // stop moving when mouse button is released:
        // elem.querySelector('#container').style = 'cursor: grab';
        elem.setAttribute('onmousemove', '');
        elem.setAttribute('onmouseup', '');
        
    }
    
    function rollTheArea(event, elem) {
        event = event || window.event;
        event.preventDefault();
        position = event.clientX;
        movement = ((start - position) * 1.5);
        //console.log(position);
        window.scroll(window.scrollX + movement, 0);
        start = position;
        fillBar();
    }
    function rollTheAreaMobile(event, elem) {
        event = event || window.event;
        position = event.touches[0].clientX;
        movement = ((start - position) * 2);
        window.scroll(window.scrollX + movement, 0);
        start = position;
    }
  },
  methods: {
    handleWheel(event) {
      if (window.innerWidth > 768) {
        this.replaceVerticalScrollByHorizontal(event);
        this.fillBar();
      } else {
        // fillBarVertical();
      }
    },
    handleScroll(event) {
      this.moveBackground(event);

      if (window.innerWidth <= 768) {
        this.fillBarVertical();
      }
    },
    handleLoad(event) {
      this.fillBar();
      this.constructBar();
      this.scrollArea(document.querySelector("body"));
    },
    handleResize(event) {
      this.fillBar();
      this.constructBar();
    },
    replaceVerticalScrollByHorizontal(event) {
      if (event.deltaY !== 0) {
        // manually scroll horizontally instead
        window.scroll(window.scrollX + event.deltaY * 1, window.scrollY);

        // prevent vertical scroll
        event.preventDefault();
      }
    },
    fillBar() {
      // Your existing fillBar function logic
    },
    fillBarVertical() {
      // Your existing fillBarVertical function logic
    },
    constructBar() {
      // Your existing constructBar function logic
    },
    moveto(position) {
      // Your existing moveto function logic
    },
    moveBackground(movement) {
      // Your existing moveBackground function logic
    },
    scrollArea(elem) {
      // Your existing scrollArea function logic
    },
  }
  
  
};
</script>

<style scoped>

.new {
  width: 46% !important;
  position: absolute;
  top:-30px !important;
  left: 29%;
  z-index: 0;
   opacity: 0; /* Initially set opacity to 0 */
  visibility: hidden; /* Initially set visibility to hidden */
  animation: showAndBounce 2s cubic-bezier(0.68, -2.55, 0.27, 3.55) 1s forwards
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
.new-sections {
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

.new-sections {
width: 0;
overflow: hidden;
position: relative;

width: 100%;
  background-color: #589AD3;
  padding: 149px 0px !important;
  height: 100vh !important;
}
}

body {
  margin: 0;
  display: flex;
  overflow:hidden;
  width: max-content;
  color: #FAFAFA;
  font-family: 'Cormorant Infant', serif;
  font-weight: 400;
  letter-spacing: 0.9px;
  -webkit-font-smoothing: antialiased;
}
img {
  max-width: 100%;
}

/*********************/
/* NAVIGATION BAR */

.barNav {
  position: fixed;
  bottom: 20px;
  left: 15vw;
  width: 70vw;
  height: 0px;
  border-bottom: 1px solid #555555;
  filter: sepia(1);
  -webkit-filter: sepia(1);
  z-index: 20;
}
.barNavFuel {
  width: 10%;
  height: 1px;
  background-color: #FAFAFA;
  transition: width 0.5s;
  opacity: .8
}
.arrows {
  position: absolute;
  top: -25px;
  width: 100%;
  filter: sepia(1);
  -webkit-filter: sepia(1);
}
.arrows i {
  position: relative;
  width: 0;
  cursor: pointer;
  opacity: .5;
}
.arrows i:hover {
  opacity: .8;
}
/*********************/
/* BORDER */
.fullBorder {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index:10;
}
.fullBorder div {
  position: absolute;
  filter: sepia(1);
  -webkit-filter: sepia(1);
  opacity: .5;

}
.fullBorder div.corner {
  width: 50px;
  height: 50px;
}
.fullBorder .top {
  width: calc(100vw - 200px);
  height: 0px;
  border-bottom: 1px solid #FAFAFA;
  top: 20px;
  left: 100px;
}
.fullBorder .leftTop {
  position: absolute;
  top: 21px;
  left: 50px;
  border-right: 2px solid #FAFAFA;
  border-radius: 50px 0;
}
.fullBorder .left {
  top: 71px;
  left: 50px;
  width: 0;
  height: calc(100vh - 142px);
  border-right: 1px solid #FAFAFA;
}
.fullBorder .leftBot {
  bottom: 21px;
  left: 50px;
  border-right: 2px solid #FAFAFA;
  border-radius: 0 50px;
}
.fullBorder .rightTop {
  top: 21px;
  right: 50px;
  border-left: 2px solid #FAFAFA;
  border-radius: 0 50px;
}
.fullBorder .right {
  top: 71px;
  right: 50px;
  width: 0;
  height: calc(100vh - 142px);
  border-left: 1px solid #FAFAFA;
}
.fullBorder .rightBot {
  bottom: 21px;
  right: 50px;
  border-left: 2px solid #FAFAFA;
  border-radius: 50px 0;
}
.fullBorder .bot {
  width: calc(100vw - 200px);
  height: 0px;
  border-bottom: 1px solid #FAFAFA;
  bottom: 20px;
  left: 100px;
}

/*********************/

section {
  display: flex;
  width: max-content;
  position: relative
}
.block {
  background-color: #1A1A1F;
}
.background {
  background-color: #000000;
}
.oneSpace {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  width: 100vw;
  height: 100vh;
}
.halfSpace{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  width: 50vw;
  height: 100vh;
}
/*  */
.centered {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
section > div {
  position: relative;
  z-index: 1;
}

/*********************/
/* Content CSS */


#firstBlock .backimage {
    /* background: linear-gradient(to right, rgba(0,0,0,0.65) 26%,rgba(0,0,0,0) 42%,rgba(0,0,0,0) 100%), url('https://www.thoughtco.com/thmb/VEIvog8ZWDAmkp_FrTIivJuWEE0=/2000x1500/filters:fill(auto,1)/GettyImages-675801180-5a7096961d64040037179114.jpg'), black; */

}
#secondBlock .backimage {
  /* background: linear-gradient(to right, rgba(0,0,0,1) 7%,rgba(0,0,0,0.8) 18%, rgba(0,0,0,0.1) 75%,rgba(0,0,0,0) 100%),url('https://www.kcbi.org/wp-content/uploads/2017/06/musical.jpg'); */
}
.backimage {
  background-attachment: fixed !important;
  background-size: 120vw !important;
  width: 100% !important;
  height: 100% !important;
  position: absolute !important;
  top: 0 !important;
  z-index: 0 !important;
  background-position-y: center !important;
  background-position-x: 0vw;
  background-repeat: no-repeat !important;
  transition: background-position-x 0.1s;
  filter: sepia(0.5);
}
#firstBlock h1,
#secondBlock h1 {
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0 0 0 100px;
  filter: sepia(1);
  -webkit-filter: sepia(1);
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
}

#firstBlock .smallInfo, 
#secondBlock .smallInfo {
  width: 400px;
  position: relative;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  height: 250px;
  padding: 0 50px;
  margin-top: calc(50vh - 150px);
  filter: sepia(1);
  -webkit-filter: sepia(1);
  font-size: 20px;
  display: flex;
  align-items: center;
}

.image {
  width: calc(300px * 1.618);
  height: 300px;
  margin: 20px 50px;
  filter: sepia(1);
  -webkit-filter: sepia(1);
  border: 4px ridge;
  background-size: cover;
  background-repeat: no-repeat;
}
.text {
  height: 300px;
  width: calc(300px * 1.618 * 1.5);
  border: 4px ridge;
  margin: 20px 50px;
  padding: 50px;
  filter: sepia(1);
  -webkit-filter: sepia(1);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 18px;
}
@media screen and (max-width: 1500px) {
  .image {
    width: calc(225px * 1.618);
    height: 225px;
    margin: 20px 50px;
  }
  .text {
    height: 225px;
    width: calc(225px * 1.618 * 1.5);
    margin: 20px 50px;
    font-size: 17px;
  }
}
@media only screen and (max-width: 1200px) {
  .barNav {
    bottom: 15px;
  }

  /*********************/
  /* BORDER */
  .fullBorder div.corner {
    width: 40px;
    height: 40px;
  }
  .fullBorder .top {
    width: calc(100vw - 140px);
    height: 0px;
    border-bottom: 1px solid #FAFAFA;
    top: 15px;
    left: 70px;
  }
  .fullBorder .leftTop {
    position: absolute;
    top: 16px;
    left: 30px;
    border-right: 2px solid #FAFAFA;
    border-radius: 50px 0;
  }
  .fullBorder .left {
    top: 56px;
    left: 30px;
    width: 0;
    height: calc(100vh - 112px);
    border-right: 1px solid #FAFAFA;
  }
  .fullBorder .leftBot {
    bottom: 16px;
    left: 30px;
    border-right: 2px solid #FAFAFA;
    border-radius: 0 50px;
  }
  .fullBorder .rightTop {
    top: 16px;
    right: 30px;
    border-left: 2px solid #FAFAFA;
    border-radius: 0 50px;
  }
  .fullBorder .right {
    top: 56px;
    right: 30px;
    width: 0;
    height: calc(100vh - 112px);
    border-left: 1px solid #FAFAFA;
  }
  .fullBorder .rightBot {
    bottom: 16px;
    right: 30px;
    border-left: 2px solid #FAFAFA;
    border-radius: 50px 0;
  }
  .fullBorder .bot {
    width: calc(100vw - 140px);
    height: 0px;
    border-bottom: 1px solid #FAFAFA;
    bottom: 15px;
    left: 70px;
  }

  /*********************/

  
  .image {
    width: calc(180px * 1.618);
    height: 180px;
    margin: 20px 50px;
  }
  .text {
    height: unset;
    min-height: 180px;
    width: calc(180px * 1.618 * 1.5);
    margin: 20px 50px;
    padding: 20px;
    font-size: 16px;
  }
  
}
@media only screen and (max-width: 992px) {
  #firstBlock h1,
  #secondBlock h1 {
    font-size: 24px;
    margin: 0 0 0 60px;

  }

  #firstBlock .smallInfo, 
  #secondBlock .smallInfo {
    width: 300px;
    height: 260px;
    padding: 0 50px;
    margin-top: calc(50vh - 130px);
    font-size: 18px;
  }

}
@media only screen and (max-width: 768px) {
  body, section {
    display: flex;
    width: 100%;
    height: max-content;
    flex-flow: row wrap;
    overflow: unset;
    align-items: self-start;
  }
  .barNav {
    bottom: 10vh;
    left: unset;
    right: 30px;
    width: 0vw;
    height: 70vh;
    border-bottom: unset;
    border-left: 1px solid #555555;
    filter: sepia(1);
    -webkit-filter: sepia(1);
    z-index: 20;
  }
  .barNavFuel {
    height: unset;
    width: 1px;
    background-color: #FAFAFA;
    transition: width 0.5s;
    opacity: .8
  }
  .arrows {
    display: none;
  }
  .oneSpace {
    width: 100%;
    min-height: 100vh;
    height: unset;
  }
  .halfSpace{
    width: 100%;
    min-height: 50vh;
    height: unset;
  }
  .backimage {
    background-size: cover !important;
  }
  #firstBlock h1,
  #secondBlock h1 {
    font-size: 24px;
    margin: 0 0 50px 50px;
    width: 100%;

  }
  #firstBlock .smallInfo, 
  #secondBlock .smallInfo {
    width: 300px;
    height: 260px;
    padding: 0 50px;
    margin-top: 0;
    font-size: 18px;
  }
  .centered {
    padding: 50px 0;    
  }
  
}
@media only screen and (max-width: 528px) {
  .fullBorder {
    display: none;
  }
  .barNav {
    right: 15px;
  }
  #firstBlock h1,
  #secondBlock h1 {
    font-size: 20px;
    margin: 0 20px 50px 20px;
    width: 100%;

  }
  #firstBlock .smallInfo, 
  #secondBlock .smallInfo {
    width: 100%;
    height: 260px;
    padding: 0 20px;
    margin-top: 0;
    font-size: 18px;
  }
  .centered {
    padding: 50px 0;    
  }
  .image {
    margin: 20px 20px;
    border: 2px ridge;

  }
  .text {
    margin: 20px 20px;
    padding: 15px;
    font-size: 16px;
    border: 2px ridge;

  }
}
</style>


