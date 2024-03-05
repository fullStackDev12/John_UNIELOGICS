
<template>
  <header class="header-main">
  <div class="contanar">
    <nav class="main-nav">
    <a class="logo" @click="first"><img src="../assets/images/Mask.png" alt=""></a>
  
    <button class="hamburger-btn" @click="toggleMenu">
      <img src="../assets/images/hamburger.png"/>
           
          </button>
   
    <div class=" main-ul" :class="{ 'show-menu': menuOpen }" id="navbarNav">
      <ul class="ul-list">
       
        <li class="nav-item">
          <a class="nav-link" href="#">Join Our Beta</a>
        </li>
        <li class="nav-item" >
          <a style="text-decoration: none; color: #333;" class="nav-link disable" href="https://chromewebstore.google.com/detail/unielogics/bagcekacfgdabdkhamefiohigjiepjpb">Extensions</a>
        </li>
        <li class="nav-item" @click="start" style="cursor: pointer;">
          <a class="nav-link" >Start The Flow</a>
        </li>
        <li class="nav-item">
          <a class="header-btn" href="#">Log In</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  </header>
  
  
  
  
  
  </template>
  <script>
  
  
  export default {
  
  
  data() {
    return {
      menuOpen: false,
    };
  },
  
  methods: {
      toggleMenu() {
        this.$nextTick(() => {
        this.menuOpen = !this.menuOpen;
      });
      },

      first(){
        this.$router.push('/')
      },
      start(){
        console.log('abcd');
        this.$router.push('/dashboard')
      }
    }
  }
  
  
  </script>
   
  <style scoped>

.ul-list li.nav-item a {
  text-decoration: none; /* Remove default underline */
  color: #333; /* Set the default text color */
  position: relative;
}

.ul-list li.nav-item a:hover {
  text-decoration: underline; /* Add underline on hover */
}

/* Optional: Style for disabled link */
.ul-list li.nav-item a.disable {
  color: #999; /* Set a different color for disabled links */
  cursor: not-allowed; /* Change cursor for disabled links */
}

/* Optional: Style for header button */
.ul-list li.nav-item a.header-btn {
  background-color: #4CAF50; /* Example background color for header button */
  color: #fff; /* Example text color for header button */
  padding: 10px 15px; /* Example padding for header button */
  border-radius: 5px; /* Example border radius for header button */
  text-decoration: none; /* Remove default underline for header button */
}

.ul-list li.nav-item a.header-btn:hover {
  background-color: #45a049; /* Example background color for header button on hover */
}

  
.hamburger-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1;
  }
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #161543;
    margin: 5px 0;
  }
  
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  header.header-main {
      width: 100%;
      position: fixed;
      padding-top: 15px !important;
    
  }
  .contanar{
    width: 100%;
    max-width:2800px !important;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
  }
  .main-nav {
      padding: 23px 0px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
  }
  a.logo {
      width: 4%;
  }
  
  a.logo img {
      width: 100%;
  }
  
  .main-ul {
      width: 50%;
  }
  
  ul.ul-list {
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      gap: 100px;
      justify-content: flex-end;
  }
  
  a.nav-link {
      padding: 0px;
      font-size: 20px;
      color: #161543;
      font-weight: 400;
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  a.header-btn {
      padding: 22px 81px;
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      font-size: 25px;
      font-weight: 400;
      font-family: 'NATS', sans-serif;
      color: #fff;
  }
    @media screen and (max-width: 1920px){
  
  .hamburger-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1;
  }
  .bar {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #161543;
    margin: 5px 0;
  }
  
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  header.header-main {
      width: 100%;
      position: fixed;
      padding-top: 15px !important;
    
  }
  .contanar{
    width: 100%;
    max-width:1800px !important;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
  }
  .main-nav {
      padding: 23px 0px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
  }
  a.logo {
      width: 4%;
  }
  
  a.logo img {
      width: 100%;
  }
  
  .main-ul {
      width: 50%;
  }
  
  ul.ul-list {
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      gap: 100px;
      justify-content: flex-end;
  }
  
  a.nav-link {
      padding: 0px;
      font-size: 20px;
      color: #161543;
      font-weight: 400;
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  a.header-btn {
      padding: 22px 81px;
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      font-size: 25px;
      font-weight: 400;
      font-family: 'NATS', sans-serif;
      color: #fff;
  }
}
  
  @media screen and (max-width: 1600px){
    .main-nav {
      padding: 18px 0px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
  }
  .contanar{
    width: 100%;
    max-width:1500px  !important;
    margin: 0 auto;
  }
  a.nav-link{
      padding: 0px;
      font-size: 18px;
      color: #161543;
      font-weight: 400;
  }
  ul.ul-list {
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      gap: 65px;
      justify-content: flex-end;
  }
  a.logo img {
      width: 80%;
  }
  a.header-btn {
    padding: 18px 58px;
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      font-size: 20px;
      font-weight: 400;
      color: #fff;
  }
  }
  @media screen and (max-width: 1440px){
    .main-nav {
      padding: 16px 0px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
  }
  .contanar{
    width: 100%;
    max-width:1340px !important;
    margin: 0 auto;
  }
  ul.ul-list {
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      gap: 55px;
      justify-content: flex-end;
  }
  a.header-btn {
    padding: 16px 44px;
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      font-size: 18px;
      font-weight: 400;
      color: #fff;
  }
  a.nav-link {
      padding: 0px;
      font-size: 16px;
      color: #161543;
      font-weight: 400;
  }
  }
  @media screen and (max-width: 1366px){
    .contanar{
    width: 100%;
    max-width:1250px !important;
    margin: 0 auto;
  }
  }
  @media screen and (max-width: 1024px){
    ul.ul-list {
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      gap: 30px;
      justify-content: flex-end;
  }
  .contanar{
    width: 100%;
    max-width:924px !important;
    margin: 0 auto;
  }
  .main-nav {
      padding: 12px 0px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
  }
  a.nav-link{
      padding: 0px;
      font-size: 14px;
      color: #161543;
      font-weight: 400;
  }
  a.header-btn{
      padding: 12px 30px;
      border-radius: 8px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      font-size: 16px;
      font-weight: 400;
      color: #fff;
  }
  
  }
  
  @media screen and (max-width: 768px){
    .main-ul{
      /* width: 58%; */
      display: none;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
  }
  
  .main-ul.show-menu {
      display: flex;
    }
  
    .hamburger-btn {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;
    }
  
  a.logo img{
      width: 100%;
  }
  a.logo{
      width: 6%;
  }
  }
  
  
  
  @media screen and (max-width: 600px){
    .main-ul {
      
          top: 0px;
          left: 0;
          padding: 0px 0px 30px 0px !important;
          background-color: #161543;
          border-radius: 0px 0px 50px 50px !important;
          z-index: 0;
        
    
    
  
      }
      .main-ul.show-menu {
    max-height: 500px;
  }
      ul.ul-list{
        
      width: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      gap: 30px !important;
      justify-content: flex-end;
      flex-direction: column !important;
      padding: 150px 0px 112px 0px !important;
      background-color: #589AD3 !important;
      border-radius: 0px 0px 50px 50px !important;
   
      transition: max-height 3.5s ease-in-out;
     
    }
    a.nav-link {
      transition: color 0.3s ease;
      padding: 0px;
      font-size: 18px;
      color: #161543;
      font-weight: 600;
     
  }
  a.header-btn[data-v-7131493d] {
    transition: background 0.3s ease, color 0.3s ease;
      padding: 12px 30px;
      border-radius: 8px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      font-size: 16px;
      font-weight: 600;
      color: #161543;
 
  }
  }
  </style>
  
  
  