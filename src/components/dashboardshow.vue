<template>
    
    <transition name="fade-in" class="fade-in" v-if="showContent">
      <div class="fade-out" name="fade-out" ref="final">
    <section class="advanced"  ref="last">
      <div class="Exciting-tital" ref="Dig" style="display:none; opacity: 0;">
        <span class="exi">
            Find, Analyze, Prepare, Deliver
        </span>
          <h2>Our Features</h2>
        </div>
        <div class="main-advanced" ref="mainadvance"  @wheel="handleWheel" >
          <div class="advanced-tital" v-show="dd" ref="decreaseBox">
            <p ref="textBox"><span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M17.9688 40.6738C17.3193 40.6738 16.7725 40.8936 16.333 41.333C15.8936 41.7725 15.6738 42.3193 15.6738 42.9688C15.6738 43.6182 15.8936 44.165 16.333 44.6045C16.7725 45.0439 17.3193 45.2783 17.9688 45.3125C18.6182 45.2783 19.165 45.0439 19.6045 44.6045C20.0439 44.165 20.2637 43.6182 20.2637 42.9688C20.2637 42.3193 20.0439 41.7725 19.6045 41.333C19.165 40.8936 18.6182 40.6738 17.9688 40.6738ZM39.4043 31.25C39.7656 31.25 40.0781 31.1426 40.3564 30.9326C40.6348 30.7227 40.8203 30.4346 40.918 30.0781L46.3867 8.20312C46.4844 7.71484 46.377 7.26562 46.0693 6.86035C45.7617 6.45508 45.3613 6.25 44.873 6.25H4.6875C4.2334 6.25 3.85742 6.39648 3.56445 6.68945C3.27148 6.98242 3.125 7.3584 3.125 7.8125C3.125 8.2666 3.27148 8.64258 3.56445 8.93555C3.85742 9.22852 4.2334 9.375 4.6875 9.375H9.375V37.5H42.1875C42.6416 37.5 43.0176 37.3535 43.3105 37.0605C43.6035 36.7676 43.75 36.3916 43.75 35.9375C43.75 35.4834 43.6035 35.1074 43.3105 34.8145C43.0176 34.5215 42.6416 34.375 42.1875 34.375H12.5V31.25H39.4043ZM12.5 9.375H42.8711L38.1836 28.125H12.5V9.375ZM33.5938 40.6738C32.9443 40.6738 32.3975 40.8936 31.958 41.333C31.5186 41.7725 31.2988 42.3193 31.2988 42.9688C31.2988 43.6182 31.5186 44.165 31.958 44.6045C32.3975 45.0439 32.9443 45.2783 33.5938 45.3125C34.2432 45.2783 34.79 45.0439 35.2295 44.6045C35.6689 44.165 35.8887 43.6182 35.8887 42.9688C35.8887 42.3193 35.6689 41.7725 35.2295 41.333C34.79 40.8936 34.2432 40.6738 33.5938 40.6738Z" fill="black"/>
            </svg></span>Grow Your Ecommerce Business With</p>
            <h2 ref="textBox1">On Demand Product Research & Nationwide Logistics In One Platform</h2>
            <div class="advanced-btn" ref="textBox2">
              <button class="SignUp"><a style="text-decoration: none; color: white;" href="https://chromewebstore.google.com/detail/unielogics/bagcekacfgdabdkhamefiohigjiepjpb">Download Extension </a></button>
              <button class="Login">Sign UP</button>
            </div>
          </div>
         
          <div class="advanced-box" :style="{ width: boxWidth + '%', height: boxHeight + 'px'}" ref="advancedBox" :class="{ rotated: isRotated }">
              
            <div class="boxing-1" :style="{ height: boxHeight + 'px'}" ref="advancedBoxs">
              
              <div class="logo-boxing">
                <img src="../assets/images/Mask.png" alt="">
              </div>
              <div class="boxing-btn-box" >
                <button><a href="#"> 
               <span class="icon-box">
                <img src="../assets/images/Group 6.png" alt="">
                <div>

                    <h2 ref="products">Products</h2>
                    <h2 ref="products_new" style="display: none;">Products Management</h2>

                    
             
             
            
                </div>
               </span>
               <span class="error-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                  <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                </svg>
               </span>
                </a></button>
                <button><a href="#"> 
                  <span class="icon-box">
                   <img src="../assets/images/Group 7.png" alt="">
                   <h2 ref="shipment">Shipment Plans</h2>
                   <h2 ref="shipment_new" style="display: none;">Shipment Management</h2>
                  </span>
                  <span class="error-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                      <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                    </svg>
                  </span>
                   </a></button>
                   <button><a href="#"> 
                    <span class="icon-box">
                     <img src="../assets/images/Group 8.png" alt="">
                     <h2 ref="academy">Academy</h2>
                     <h2 ref="academy_new" style="display: none;">Proximity Management</h2>
                    </span>
                    <span class="error-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                        <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                      </svg>
                    </span>
                     </a></button>
                     <button><a href="#"> 
                      <span class="icon-box">
                       <img src="../assets/images/Group 9.png" alt="">
                       <h2 ref="profile">Profile</h2>
                       <h2 ref="profile_new" style="display: none;">Logistics Management</h2>
                      </span>
                      <span class="error-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
                          <path d="M1.25931 0.88833C0.907799 1.23994 0.710332 1.71677 0.710332 2.21395C0.710332 2.71114 0.907799 3.18797 1.25931 3.53958L10.5406 12.8208L1.25931 22.1021C0.917761 22.4557 0.728771 22.9293 0.733044 23.421C0.737315 23.9126 0.934506 24.3829 1.28215 24.7305C1.62979 25.0781 2.10006 25.2753 2.59168 25.2796C3.0833 25.2839 3.55693 25.0949 3.91056 24.7533L14.5174 14.1465C14.8689 13.7948 15.0664 13.318 15.0664 12.8208C15.0664 12.3236 14.8689 11.8468 14.5174 11.4952L3.91056 0.88833C3.55894 0.536822 3.08211 0.339355 2.58493 0.339355C2.08775 0.339355 1.61092 0.536822 1.25931 0.88833Z" fill="white"/>
                        </svg>
                      </span>
                       </a></button>
              </div>
  
              <div class="boxing-last-btn">
                <button v-if="all" @click="increasewidth"  @scroll="increasewidth" style="cursor: pointer;" ref="visibles1"><a >UnieLogics</a></button>
                <!-- <button style="cursor: pointer; display: none;" ref="visibles"><a >Rotate</a></button> -->
                <button @click="gotonew" style="cursor: pointer; display: none;" ref="visibles"><a>Explore Sponsors</a></button>
                
  
              </div>
            </div>
            <div class="boxing-2">
               <div class="box_div" style="    display: flex;
    justify-content: space-between;">
                <h2 class="boxing_h2">
                    Products
                </h2>

                <button class="logins" @click="gotonew">Explore More</button>
               </div>
               <hr>

               <img src="../assets/images/list.png" alt="" class="listing" ref="dashboard">

               <img src="../assets/images/dashboard.png" alt="" class="dashb" ref="chart">
  
            </div>
          </div>

        </div>
        <div class="Exciting-btn-box" ref="Exciting" style="opacity: 0;">
          <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M14.5827 4.1665H6.24935C5.69681 4.1665 5.16691 4.386 4.77621 4.7767C4.38551 5.1674 4.16602 5.6973 4.16602 6.24984V43.7498C4.16602 44.3024 4.38551 44.8323 4.77621 45.223C5.16691 45.6137 5.69681 45.8332 6.24935 45.8332H14.5827C15.1352 45.8332 15.6651 45.6137 16.0558 45.223C16.4465 44.8323 16.666 44.3024 16.666 43.7498V6.24984C16.666 5.6973 16.4465 5.1674 16.0558 4.7767C15.6651 4.386 15.1352 4.1665 14.5827 4.1665ZM10.416 43.7498C9.59193 43.7498 8.78634 43.5055 8.10114 43.0476C7.41593 42.5898 6.88188 41.939 6.56652 41.1777C6.25115 40.4163 6.16864 39.5785 6.32941 38.7703C6.49018 37.962 6.88702 37.2196 7.46974 36.6369C8.05246 36.0542 8.79489 35.6573 9.60314 35.4966C10.4114 35.3358 11.2492 35.4183 12.0105 35.7337C12.7719 36.049 13.4226 36.5831 13.8805 37.2683C14.3383 37.9535 14.5827 38.7591 14.5827 39.5832C14.5827 40.6882 14.1437 41.748 13.3623 42.5294C12.5809 43.3108 11.5211 43.7498 10.416 43.7498ZM14.5827 24.9998H6.24935V6.24984H14.5827V24.9998ZM12.4993 39.5832C12.4993 39.9952 12.3772 40.398 12.1482 40.7406C11.9193 41.0832 11.594 41.3502 11.2133 41.5079C10.8326 41.6656 10.4137 41.7069 10.0096 41.6265C9.60545 41.5461 9.23424 41.3477 8.94288 41.0563C8.65152 40.7649 8.4531 40.3937 8.37271 39.9896C8.29233 39.5855 8.33358 39.1666 8.49127 38.7859C8.64895 38.4052 8.91598 38.0799 9.25858 37.8509C9.60118 37.622 10.004 37.4998 10.416 37.4998C10.9685 37.4998 11.4985 37.7193 11.8892 38.11C12.2799 38.5007 12.4993 39.0306 12.4993 39.5832ZM29.166 4.1665H20.8327C20.2801 4.1665 19.7502 4.386 19.3595 4.7767C18.9688 5.1674 18.7493 5.6973 18.7493 6.24984V43.7498C18.7493 44.3024 18.9688 44.8323 19.3595 45.223C19.7502 45.6137 20.2801 45.8332 20.8327 45.8332H29.166C29.7185 45.8332 30.2485 45.6137 30.6392 45.223C31.0299 44.8323 31.2493 44.3024 31.2493 43.7498V6.24984C31.2493 5.6973 31.0299 5.1674 30.6392 4.7767C30.2485 4.386 29.7185 4.1665 29.166 4.1665ZM24.9993 43.7498C24.1753 43.7498 23.3697 43.5055 22.6845 43.0476C21.9993 42.5898 21.4652 41.939 21.1498 41.1777C20.8345 40.4163 20.752 39.5785 20.9127 38.7703C21.0735 37.962 21.4704 37.2196 22.0531 36.6369C22.6358 36.0542 23.3782 35.6573 24.1865 35.4966C24.9947 35.3358 25.8325 35.4183 26.5939 35.7337C27.3552 36.049 28.006 36.5831 28.4638 37.2683C28.9216 37.9535 29.166 38.7591 29.166 39.5832C29.166 40.6882 28.727 41.748 27.9456 42.5294C27.1642 43.3108 26.1044 43.7498 24.9993 43.7498ZM29.166 24.9998H20.8327V6.24984H29.166V24.9998ZM27.0827 39.5832C27.0827 39.9952 26.9605 40.398 26.7316 40.7406C26.5027 41.0832 26.1773 41.3502 25.7966 41.5079C25.4159 41.6656 24.997 41.7069 24.5929 41.6265C24.1888 41.5461 23.8176 41.3477 23.5262 41.0563C23.2348 40.7649 23.0364 40.3937 22.956 39.9896C22.8757 39.5855 22.9169 39.1666 23.0746 38.7859C23.2323 38.4052 23.4993 38.0799 23.8419 37.8509C24.1845 37.622 24.5873 37.4998 24.9993 37.4998C25.5519 37.4998 26.0818 37.7193 26.4725 38.11C26.8632 38.5007 27.0827 39.0306 27.0827 39.5832ZM43.7493 4.1665H35.416C34.8635 4.1665 34.3336 4.386 33.9429 4.7767C33.5522 5.1674 33.3327 5.6973 33.3327 6.24984V43.7498C33.3327 44.3024 33.5522 44.8323 33.9429 45.223C34.3336 45.6137 34.8635 45.8332 35.416 45.8332H43.7493C44.3019 45.8332 44.8318 45.6137 45.2225 45.223C45.6132 44.8323 45.8327 44.3024 45.8327 43.7498V6.24984C45.8327 5.6973 45.6132 5.1674 45.2225 4.7767C44.8318 4.386 44.3019 4.1665 43.7493 4.1665ZM39.5827 43.7498C38.7586 43.7498 37.953 43.5055 37.2678 43.0476C36.5826 42.5898 36.0485 41.939 35.7332 41.1777C35.4178 40.4163 35.3353 39.5785 35.4961 38.7703C35.6568 37.962 36.0537 37.2196 36.6364 36.6369C37.2191 36.0542 37.9616 35.6573 38.7698 35.4966C39.5781 35.3358 40.4158 35.4183 41.1772 35.7337C41.9386 36.049 42.5893 36.5831 43.0471 37.2683C43.505 37.9535 43.7493 38.7591 43.7493 39.5832C43.7493 40.6882 43.3104 41.748 42.529 42.5294C41.7476 43.3108 40.6877 43.7498 39.5827 43.7498ZM43.7493 24.9998H35.416V6.24984H43.7493V24.9998ZM41.666 39.5832C41.666 39.9952 41.5438 40.398 41.3149 40.7406C41.086 41.0832 40.7606 41.3502 40.3799 41.5079C39.9993 41.6656 39.5804 41.7069 39.1762 41.6265C38.7721 41.5461 38.4009 41.3477 38.1095 41.0563C37.8182 40.7649 37.6198 40.3937 37.5394 39.9896C37.459 39.5855 37.5002 39.1666 37.6579 38.7859C37.8156 38.4052 38.0826 38.0799 38.4252 37.8509C38.7678 37.622 39.1706 37.4998 39.5827 37.4998C40.1352 37.4998 40.6651 37.7193 41.0558 38.11C41.4465 38.5007 41.666 39.0306 41.666 39.5832Z" fill="black"/>
          </svg></a></button>
          <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M35.9375 35.9375V40.625H13.2812C11.4164 40.625 9.62802 39.8842 8.30941 38.5656C6.99079 37.247 6.25 35.4586 6.25 33.5938C6.25 31.7289 6.99079 29.9405 8.30941 28.6219C9.62802 27.3033 11.4164 26.5625 13.2812 26.5625H14.0625V23.4375H13.2812C10.5876 23.4375 8.00436 24.5075 6.0997 26.4122C4.19503 28.3169 3.125 30.9001 3.125 33.5938C3.125 36.2874 4.19503 38.8706 6.0997 40.7753C8.00436 42.68 10.5876 43.75 13.2812 43.75H35.9375V48.4375H48.4375V35.9375H35.9375ZM45.3125 45.3125H39.0625V39.0625H45.3125V45.3125Z" fill="black"/>
            <path d="M32.8125 34.375H29.6875V29.6875H20.3125V34.375H17.1875V29.6875C17.1883 28.859 17.5178 28.0646 18.1037 27.4787C18.6896 26.8928 19.484 26.5633 20.3125 26.5625H29.6875C30.516 26.5633 31.3104 26.8928 31.8963 27.4787C32.4822 28.0646 32.8117 28.859 32.8125 29.6875V34.375ZM25 25C24.0729 25 23.1666 24.7251 22.3958 24.21C21.6249 23.6949 21.0241 22.9629 20.6693 22.1063C20.3145 21.2498 20.2217 20.3073 20.4026 19.398C20.5834 18.4887 21.0299 17.6535 21.6854 16.9979C22.341 16.3424 23.1762 15.8959 24.0855 15.7151C24.9948 15.5342 25.9373 15.627 26.7938 15.9818C27.6504 16.3366 28.3824 16.9374 28.8975 17.7083C29.4126 18.4791 29.6875 19.3854 29.6875 20.3125C29.6863 21.5553 29.192 22.7469 28.3132 23.6257C27.4344 24.5045 26.2428 24.9988 25 25ZM25 18.75C24.691 18.75 24.3889 18.8416 24.1319 19.0133C23.875 19.185 23.6747 19.429 23.5564 19.7146C23.4382 20.0001 23.4072 20.3142 23.4675 20.6173C23.5278 20.9204 23.6766 21.1988 23.8951 21.4174C24.1137 21.6359 24.3921 21.7847 24.6952 21.845C24.9983 21.9053 25.3124 21.8743 25.5979 21.7561C25.8835 21.6378 26.1275 21.4375 26.2992 21.1806C26.4709 20.9236 26.5625 20.6215 26.5625 20.3125C26.5621 19.8982 26.3973 19.501 26.1044 19.2081C25.8115 18.9152 25.4143 18.7504 25 18.75Z" fill="black"/>
            <path d="M36.7188 6.25H14.0625V1.5625H1.5625V14.0625H14.0625V9.375H36.7188C38.5836 9.375 40.372 10.1158 41.6906 11.4344C43.0092 12.753 43.75 14.5414 43.75 16.4062C43.75 18.2711 43.0092 20.0595 41.6906 21.3781C40.372 22.6967 38.5836 23.4375 36.7188 23.4375H35.9375V26.5625H36.7188C39.4124 26.5625 41.9956 25.4925 43.9003 23.5878C45.805 21.6831 46.875 19.0999 46.875 16.4062C46.875 13.7126 45.805 11.1294 43.9003 9.2247C41.9956 7.32003 39.4124 6.25 36.7188 6.25ZM10.9375 10.9375H4.6875V4.6875H10.9375V10.9375Z" fill="black"/>
          </svg></a></button>
          <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <g clip-path="url(#clip0_136_419)">
              <path d="M47.1562 39.9688C47.5533 39.6595 47.8699 39.259 48.0789 38.8012C48.288 38.3434 48.3834 37.8419 48.357 37.3393C48.3306 36.8367 48.1832 36.3479 47.9274 35.9145C47.6715 35.4811 47.3148 35.1159 46.8875 34.85L46.875 16.6562L43.75 18.75V34.8438C43.3276 35.1096 42.975 35.4726 42.7215 35.9024C42.468 36.3323 42.3211 36.8166 42.2929 37.3149C42.2648 37.8132 42.3563 38.3109 42.5597 38.7666C42.7632 39.2223 43.0727 39.6227 43.4625 39.9344L42.2812 41.5031C41.2307 42.8397 40.6487 44.4845 40.625 46.1844V50.0031H43.1719C43.7837 50.0031 44.378 49.799 44.8608 49.4232C45.3436 49.0473 45.6873 48.5212 45.8375 47.9281L46.8719 43.7531V50.0031H49.9969V46.2219C49.973 44.5133 49.3865 42.8603 48.3281 41.5187L47.1562 39.9688ZM25 0L0 12.5L25 28.125L50 12.5L25 0Z" fill="black"/>
              <path d="M25 31.25L9.375 20.8438V26.1875C9.375 29.0312 18.5625 37.5 25 37.5C31.4375 37.5 40.625 29.0312 40.625 26.1875V20.8438L25 31.25Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_136_419">
                <rect width="50" height="50" fill="white"/>
              </clipPath>
            </defs>
          </svg></a></button>
          <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M46.0938 4.6875H3.90625C3.28487 4.68822 2.68915 4.93539 2.24977 5.37477C1.81039 5.81415 1.56322 6.40987 1.5625 7.03125V42.9688C1.56322 43.5901 1.81039 44.1858 2.24977 44.6252C2.68915 45.0646 3.28487 45.3118 3.90625 45.3125H12.5V39.5682C12.5002 39.22 12.5933 38.8782 12.7699 38.5781C12.9465 38.278 13.2 38.0306 13.5043 37.8613L22.4866 32.8688L19.5312 25.4804V19.5312C19.5312 18.0808 20.1074 16.6898 21.133 15.6643C22.1586 14.6387 23.5496 14.0625 25 14.0625C26.4504 14.0625 27.8414 14.6387 28.867 15.6643C29.8926 16.6898 30.4688 18.0808 30.4688 19.5312V25.4804L27.5134 32.8686L36.4957 37.8613C36.8 38.0306 37.0535 38.278 37.2301 38.5781C37.4066 38.8782 37.4998 39.22 37.5 39.5682V45.3125H46.0938C46.7151 45.3118 47.3108 45.0646 47.7502 44.6252C48.1896 44.1858 48.4368 43.5901 48.4375 42.9688V7.03125C48.4368 6.40987 48.1896 5.81415 47.7502 5.37477C47.3108 4.93539 46.7151 4.68822 46.0938 4.6875ZM45.3125 42.1875H40.625V39.5682C40.6247 38.6628 40.3825 37.7739 39.9234 36.9936C39.4644 36.2132 38.8051 35.5697 38.0139 35.1296L31.437 31.4746L33.5938 26.0821V19.5312C33.5938 17.252 32.6883 15.0662 31.0767 13.4546C29.4651 11.8429 27.2792 10.9375 25 10.9375C22.7208 10.9375 20.5349 11.8429 18.9233 13.4546C17.3117 15.0662 16.4062 17.252 16.4062 19.5312V26.0821L18.563 31.4746L11.9861 35.1301C11.195 35.5701 10.5358 36.2136 10.0767 36.9938C9.61762 37.7741 9.37537 38.6629 9.375 39.5682V42.1875H4.6875V7.8125H45.3125V42.1875Z" fill="black"/>
          </svg></a></button>
       
        
        </div>
      </section>
  </div>
    </transition>
      
    </template>
  
    <script>
  
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
  
  gsap.registerPlugin(ScrollTrigger);
  export default {
    name: "Other",
    data(){
      return{
        showContent: true,
        dd: true,
        boxWidth: 0,
        boxHeight: 0, 
        dd:true,
        scrollCount: 0,
        all:true,
        boxHeights:0,
  
        isRotated:false,
        fullpage:false
         
      }
    },
  
    created() {
      console.log('aaaaa');
  
      this.pagesize = window.innerWidth;
    if(this.pagesize == 1366 ||this.pagesize > 1366){
      console.log('screen', this.pagesize);
      this.boxWidth = 50
      this.boxHeight = 425
      this.boxHeights = 450
  
  
    }
  
    if(this.pagesize == 1600 ||this.pagesize > 1600){
      console.log('screen', this.pagesize);
      this.boxWidth = 50
      this.boxHeight = 590
      this.boxHeights = 630
  
    }
  
  
    if(this.pagesize == 1920 || this.pagesize > 1920 || this.pagesize < 2000){
      console.log('screen', this.pagesize);
      this.boxWidth = 50
      this.boxHeight = 605
      this.boxHeights = 640
  
    }


    if(this.pagesize >= 2000 && this.pagesize < 2500){
      console.log('screen', this.pagesize);
      this.boxWidth = 50
      this.boxHeight = 705
      this.boxHeights = 640
  
    }

    if(this.pagesize == 3024 ||this.pagesize > 3024 || this.pagesize > 2500 ){
      console.log('screen', this.pagesize);
      this.boxWidth = 50
      this.boxHeight = 790
      this.boxHeights = 830
  
    }
      // this.showContent = false;
      
      // Add a short delay to trigger the fade-out effect after the component is created
      setTimeout(() => {
        console.log('ssss');
        this.showContent = true;
      }, 1500);
    },
  
  //   beforeRouteLeave(to, from, next) {
  //     // Trigger fade-out effect before leaving the page
  //     this.showContent = false;
  //     setTimeout(() => {
  //       next();
  //     }, 1500); // Adjust the delay based on your fade-out duration
  //   },
  
    mounted() {
      // this.setupScrollAnimation();
      this.scrollToTop();
    },
  
    methods: {
  
      scrollToTop() {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
  
      
      },
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
            this.increasewidth();

          
          //   this.dd = false;
            // setTimeout(() => {
            //   this.$router.push('/');
            // }, 1500);
          }
          // else{
          //   this.dd = true;
          // }
        } else if (deltaY < 0) {
          console.log('Scrolling up');
        }
      },
  
  
      rotateSection(){
          console.log('aaaa');
          this.isRotated = !this.isRotated;
          const advancedBox = this.$refs.advancedBox;
  
              if (advancedBox) {
  
  
  
              gsap.to(advancedBox, { duration: 1, width: 100,  height: this.heights, ease: 'power2.inOut' });
  
  
  
              }   
  
              const last = this.$refs.last;
  
                  if (last) {
  
  
  
                  gsap.to(last, { duration: 6, opacity:'0' ,ease: 'power2.inOut' });
  
  
  
                  } 
  
  
                  // const final = this.$refs.final;
  
                  //     if (last) {
  
  
  
                  //     gsap.to(advancedBox, { duration: 4, opacity:'0' ,ease: 'power2.inOut' });
  
  
  
                  //     } 
  
  setTimeout(() => {
      this.showContent = false;
     
        this.$router.push('/first');
      
    }, 2500);
      },

      gotonew(){

        const final = this.$refs.final;
  
            if (final) {



            gsap.to(final, { duration: 2, opacity:'0' ,ease: 'power2.inOut' });



            } 

        setTimeout(() => {
      this.showContent = false;
     
        this.$router.push('/updated');
      
    }, 2000);
      },
  
      increasewidth(){
        console.log('helllo');
          this.all = false
  
          const advancedBox = this.$refs.advancedBox;

          
  
              if (advancedBox) {
              
              
  
              gsap.to(advancedBox, { duration: 4, width: '90%',  height: this.boxHeights, justifyContent:'start', gap:'50px',ease: 'power4.inOut' });

       
              }


            //   const mainadvance = this.$refs.mainadvance;

          
  
            //     if (mainadvance) {



            //     gsap.to(mainadvance, { duration: 4, justifyContent:'start', ease: 'power4.inOut' });


            //     }

              const products = this.$refs.products;

          
                
                if (products) {



                gsap.to(products, { duration: 2, display: 'none',   ease: 'power4.inOut' });


                }

                const profile = this.$refs.profile;

          
                
                if (profile) {



                gsap.to(profile, { duration: 2, display: 'none',   ease: 'power4.inOut' });


                }


                const academy = this.$refs.academy;

                        
                                
                if (academy) {



                gsap.to(academy, { duration: 2, display: 'none',   ease: 'power4.inOut' });


                }

                const shipment = this.$refs.shipment;

                        
                                
                if (shipment) {



                gsap.to(shipment, { duration: 2, display: 'none',   ease: 'power4.inOut' });


                }



                setTimeout(() => {

                const products_new = this.$refs.products_new;

          
                
                        if (products_new) {



                        gsap.to(products_new, { duration: 2, display: 'block',fontSize:'large' , ease: 'power4.inOut' });


                        }

                        const profile_new = this.$refs.profile_new;

          
                
                        if (profile_new) {



                        gsap.to(profile_new, { duration: 2, display: 'block',fontSize:'large' , ease: 'power4.inOut' });


                        }

                        const shipment_new = this.$refs.shipment_new;

          
                                        
                        if (shipment_new) {



                        gsap.to(shipment_new, { duration: 2, display: 'block',fontSize:'large' , ease: 'power4.inOut' });


                        }

                        const academy_new = this.$refs.academy_new;

          
                                                                    
                            if (academy_new) {



                            gsap.to(academy_new, { duration: 2, display: 'block',fontSize:'large' , ease: 'power4.inOut' });


                            }

                    }, 3000);

              const chart = this.$refs.chart;

          
  
              if (chart) {
              
              
  
              gsap.to(chart, { duration: 6, display:'block' ,opacity:1, ease: 'power2.inOut' });

       
              }

              const dashboard = this.$refs.dashboard;

          
                
                if (dashboard) {



                // gsap.to(dashboard, { duration: 0, opacity:'0', ease: 'power2.inOut' });
                gsap.to(dashboard, { duration: 0, display:'none', ease: 'power2.inOut' });



                }
                
  
  
                   const advancedBoxs = this.$refs.advancedBoxs;
  
                  if (advancedBoxs) {
  
                      
                
  
                  gsap.to(advancedBoxs, { duration: 3, width: '26%', height: this.boxHeights, ease: 'power2.inOut' });
                  }
  
                  const textBox = this.$refs.textBox;
  
                      if (textBox) {
                      
  
                      gsap.to(textBox, { duration: 1, display:'none', ease: 'power2.inOut' });
                      }
  
  
                      const textBox1 = this.$refs.textBox1;
  
                      if (textBox1) {
                      
  
                      gsap.to(textBox1, { duration: 1, display:'none', ease: 'power2.inOut' });
                      }
  
  
                      const textBox2 = this.$refs.textBox2;
  
                  if (textBox2) {
  
  
                  gsap.to(textBox2, { duration: 1, display:'none', ease: 'power2.inOut' });
                  }
  
  
  
                  const decreaseBox = this.$refs.decreaseBox;
                  

                  if (decreaseBox) {
  
  
                  gsap.to(decreaseBox, { duration: 3, width:'0%', ease: 'power2.inOut' });
                  }
               
  
  
                  const visibles = this.$refs.visibles;
  
                      if (visibles) {
  
  
                      gsap.to(visibles, { duration: 3, display:'block', ease: 'power2.inOut' });
                      }

                    //   const lasts = this.$refs.last;
  
                    //     if (lasts) {


                    //     gsap.to(lasts, { duration: 3, padding:'10px', ease: 'power2.inOut' });
                    //     }

                      if(this.pagesize <= 600){
                        console.log('ssssssssssszz');
                        const Dig = this.$refs.Dig;
  
                        if (Dig) {


                        gsap.to(Dig, { duration: 5, height:'250px' ,display:'block', opacity:'1', ease: 'linear' });
                        }


                      }

                      else{

                        const Dig = this.$refs.Dig;
  
                      if (Dig) {
  
  
                      gsap.to(Dig, { duration: 5 ,display:'block', opacity:'1', ease: 'linear' });
                      }

                      }
  
                      
  
                      const Exciting = this.$refs.Exciting;
  
                      if (Exciting) {
  
  
                      gsap.to(Exciting, { duration: 5, opacity:'1', ease: 'linear' });
                      }
  
  
      }
  
  
      
  
  
      
  
    },
  
   
  }
  
  </script>
  <style scoped>

  .dashb{
    height: 100%;
     opacity: 0;
     display: none;
  }

  .listing{
    height: 90%;
    width: 100%;
    opacity: 1;
    padding: 0px 35px;
}

  .logins{
    border-radius: 10px;
    border: none;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
   
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    padding: 8px 0px;
    color: white;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: 'NATS', sans-serif;
    margin-right: 10px;
    cursor: pointer;
    background-color: #589AD3;;
  }
  .fade-in {
  animation: fadeIn 1.5s !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.boxing_h2{
    font-family: sans-serif;
    color: white;
    font-weight: 500;
    /* line-height: 24px; */
    letter-spacing: 2px;

}
  .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-out-enter, .fade-out-leave-to  {
    opacity: 0;
  }
  /* .advanced-box {
    transition: transform 2.5s ease-in-out, width 2.5s ease-in-out;
  } */
  
  .rotated {
      transition: transform 2.5s ease-in-out, width 2.5s ease-in-out;
    transform: rotate(90deg);
  
  
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

  .box_div{
    padding: 20px 0px 20px 30px;
  }
  
  
  /* .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-out-enter, .fade-out-leave-to  {
    opacity: 0;
  } */
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  .fade-out {
    animation: fadeOut 1.5s;
  }
  
  @keyframes zoomOut {
    from {
      transform: scale(0.3);
    }
    to {
      transform: scale(1); 
    }
  }
  
  
  .linear-hide-enter-active,
  .linear-hide-leave-active {
    transition: opacity 0.5s, transform 0.5s; /* Adjust the duration as needed */
  }
  
  .linear-hide-enter,
  .linear-hide-leave-to /* .linear-hide-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(100%); /* Adjust the translation amount as needed */
  }
  .zoom-out {
    animation: zoomOut 1.5s ease-out;
  }
  
  
  .zoom-out-enter-active, .zoom-out-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  
  .zoom-out-enter, .zoom-out-leave-to /* .zoom-out-leave-active in <2.1.8 */ {
    transform: scale(1);
    opacity: 1;
  }
  
  .zoom-out-enter-to, .zoom-out-leave /* .zoom-out-leave-active in <2.1.8 */ {
    transform: scale(0.8);
    opacity: 0;
    
    transform: scale(0.9);
  }
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
      width: 0px;
    }
  
  section.hero {
      width: 100%;
      background-color: #F5F2FF;
      /* height: 1024px; */
      padding: 340px 50px 30px 50px;
      /* background-image: url(./assets/images/Group\ 24.png); */
      background-image: url(../assets/images/Frame_new.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
  }
  
  .contanir {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
  }
  
  .hero-main {
      width: 100%;
  }
  
  .hero-tital {
      width: 100%;
  }
  
  .hero-tital p {
      color: #000;
      font-family: 'NATS', sans-serif;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0px;
      display: flex;
      align-items: center;
      gap: 5px;
  }
  
  .hero-tital p span svg {
      width: 50px;
      height: 50px;
  }
  
  .hero-tital h2 {
      color: #161543;
      font-family: 'Poly Sans', sans-serif;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin: 0px;
  }
  
  .hero-tital h2 span {
      padding-left: 172px;
  }
  
  .hero-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 145px 0px 0px 0px;
  }
  
  .box-tital {
      width: 40%;
  }
  
  .box-video {
      width: 24%;
  }
  
  .box-tital p {
      color: #000;
      font-family: sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 125% */
  }
  
  .box-video img {
      width: 100%;
  }
  
  section.home {
      width: 100%;
      background-color: #589AD3;
      padding: 305px 0px;
  }
  
  .main-home {
      width: 100%;
  }
  
  .main-home h1 {
      color: #F1F1EF;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 100%;
  }
  
  .main-home h1 span {
      text-align: center;
      display: flex;
      justify-content: flex-end;
  }
  
  span.span-2 {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 18px;
  }
  
  section.advanced {
    width: 100%;
    background: #F5F2FF;
    padding: 235px 50px;
    /* background-image: url(../assets/images/HELLO.png); */
    background-image: url(/src/assets/images/HELLO.png);
    background-position: left;
    background-repeat: no-repeat;
    background-size: 76%;
}
  
  .main-advanced {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .advanced-tital {
      width: 46%;
  }
  
  .advanced-box {
      width: 50%;
      height: 605px;
      border-radius: 20px;
      background: #B44E9D;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 4px solid #161543 !important;
  }
  
  .advanced-box img {
      width: 100%;
  }
  
  .advanced-tital p {
      color: #000;
      font-family: 'NATS', sans-serif;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 0px;
  }
  
  .advanced-tital h2 {
      font-family: 'Poly Sans', sans-serif;
      color: #161543;
      font-size: 90px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding-top: 10px;
  }
  
  .advanced-btn {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 19px;
      padding-top: 50px;
  }
  
  button.SignUp {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      color: #FFF;
      border: none;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      width: 218px;
      padding: 24px 0px;
  }
  
  button.Login {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 218px;
      padding: 24px 0px;
      color: #1E1E1E;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .advanced-box img {
      width: 100%;
  }
  
  .boxing-1 {
      /* height: 605px; */
      background-color: #589AD3;
      border-radius: 20px 0px 0px 20px;
      width: 38%;
      padding: 30px 30px 0px 30px;
      border-top: 4px solid #161543 !important;
      border-bottom: 4px solid #161543 !important;
  }
  
  .boxing-2 {
      width: 62%;
      height: 603px;
      border-radius: 0px 20px 20px 0px;
  }
  
  .logo-boxing {
      width: 16%;
  }
  
  .logo-boxing img {
      width: 100%;
  }
  
  .boxing-btn-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      padding: 60px 0px 60px 0px;
  }
  
  .boxing-btn-box button a {
      display: flex;justify-content: space-between;align-items: center;width: 100%;text-decoration: none;}
  
      
  .boxing-btn-box button {
      width: 100%;
      flex-shrink: 0;
      padding: 14px 20px;
      background-color: transparent;
      border: none;
      border-radius: 20px;
  }
  
  span.icon-box {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 72%;
  }
  
  span.icon-box h2 {
      color: #FFF;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 116.667% */
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  span.error-icon {
      width: 12%;
  }
  
  span.error-icon svg {
      width: 30px;
      height: 30px;
  }
  
  span.icon-box img {
      width: 47px;
  }
  
  .boxing-last-btn {
      width: 100%;
      cursor: pointer;
  }
  
  .boxing-last-btn button {
    opacity: 0;
      width: 100%;
      background: transparent;
      border: none;
      padding-bottom: 15px;
  }
  
  .boxing-last-btn  button a {
      color: #FFF;
      font-size: 16px;
      font-family: 'NATS', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 218.75% */
      text-decoration: none;
      text-align: center;
  }
  
  .Exciting-box {
      width: 75%;
      height: 615px;
      border-radius: 20px;
      background: #b44e9d;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  section.Exciting {
      width: 100%;
      background: #F5F2FF;
      padding: 165px 50px 70px 50px;
      /* background-image: url(../assets/images/lastbg.png); */
      background-image: url(../assets/images/lastbg.png);
  
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
  
  
  }
  
  .main-Exciting {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  
  .Exciting-tital {
      width: 100%;
      padding-bottom: 40px;
  }
  
  .Exciting-tital h2 {
      color: #161543;
      text-align: center;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .boxings-1 {
      background-color: #589ad3;
      border-radius: 20px 0px 0px 20px;
      width: 30%;
      padding: 30px 30px 0px 30px;
  }
  
  .Exciting-btn-box {
      /* width: 75%;
      display: flex;
      align-items: center;
      padding-top: 20px;
      justify-content: flex-end;
      gap: 30px; */

      width: 100% !important;
    display: flex !important;
    align-items: center !important;
    padding-top: 20px !important;
    justify-content: center !important;
    gap: 30px !important;
  }
  
  .Exciting-btn-box button {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      background: #FFF;
      padding: 25px;
  }
  section.Takes {
      width: 100%;
      padding: 266px 0px;
      background: #F5F2FF;
      background-image: url(./assets/long-bg.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .main-Takes {
      width: 100%;
  }
  
  .Takes-tital span {
      display: flex;
      align-items: center;
      gap: 5px;
  }
  
  .Takes-tital span p {
      color: #000;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .Takes-tital h2 {
      color: #161543;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .Takes-box {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 50px;
      padding-top: 50px;
  }
  
  .Takes-boxing {
      display: flex;
      width: 24%;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      /* background-image: url(../assets/images/Frame\ 95.png); */
      background-image: url(../assets/images/Frame\ 95.png);
  
      justify-content: center;
      padding: 26px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .Takes-boxing h3 {
      color: #F5F2FF;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .Takes-boxing h2 {
      color: #F5F2FF;
      font-size: 140px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .Takes-boxing p {
      color: #F5F2FF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      padding-bottom: 50px;
  }
  
  .Takes-boxing button {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      padding: 20px 48px;
      border: none;
  }
  
  .Takes-boxing button a {
      color: #FFF;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }
  
  .main-better {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  section.BETTER {
      width: 100%;
      padding: 214px 95px 220px 95px;
      background-image: url(../assets/images/Frame90.png);
      
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  }
  
  .better-1 {
      width: 32%;
      display: flex;
      flex-direction: column;
      gap: 149px;
      align-items: center;
  }
  
  .better-2 {
      border-radius: 20px;
      border: 5px solid #1E1E1E;
      width: 35%;
      height: 718px;
      flex-shrink: 0;
      background-color: #589ad3;
  }
  
  .box-better {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      padding: 27px 33px;
      justify-content: center;
      align-items: center;
      gap: 24px;
      width: 449px;
      height: 140px;
  }
  
  section.WORKS {
      width: 100%;
      background-color: #D9D9D9;
      padding: 176px 95px 236px 95px;
  }
  
  .main-works {
      width: 100%;
  }
  
  .main-works h2 {
      color: #161543;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .works-box {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 32px 0px;
      justify-content: space-between;
  }
  
  .works-card {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      width: 23%;
      height: 233px;
      flex-shrink: 0;
      padding: 45px 0px 0px 0px;
  }
  
  .works-card h3 {
      color: #161543;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-align: center;
  }
  
  .works-card p {
      color: #161543;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 76.667% */
      font-family: 'NATS', sans-serif;
      text-align: center;
      padding-top: 10px;
  }
  
  .works-boxing {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 120px;
  }
  
  .works-boxing h3 {
      color: #161543;
      font-size: 100px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 42%;
  }
  
  .works-imger {
      width: 55%;
  }
  
  .works-img-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 104px;
  }
  
  section.Journey {
      width: 100%;
      background-color: #589AD3;
      padding: 191px 145px 26px 145px;
  }
  
  .main-Journey {
      width: 100%;
  }
  
  .Journey-box {
      width: 100%;
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
      padding-bottom: 322px;
  }
  
  .Journey-btn {
      width: 50%;
      display: flex;
      align-items: center;
      gap: 40px;
  }
  
  .Journey-btn button {
      display: flex;
      width: 28%;
      padding: 25px 52px 31px 52px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #D9D9D9;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      border: 2px solid #D9D9D9 ;
  }
  
  .Journey-btn button a {
      color: #263238;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  button.Loging {
      background: transparent;border-radius: 10px;border: 2px solid #D9D9D9;box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }
  
  button.Loging a {
      color: #fff;
  }
  
  .Journey-last-box {
      width: 100%;
      border-bottom: 2px solid #fff;
      border-top: 2px solid #fff;
      padding: 40px 0px 52px 0px;
  }
  
  .hello-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .hello-tital {
      width: 60%;
  }
  
  .hello-tital img {
      width: 44%;
  }
  
  .hello-tital p {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px; /* 145% */
      font-family: 'NATS', sans-serif;
      padding-top: 22px;
  }
  
  .hello-list {
      width: 12%;
  }
  
  .hello-list ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
  }
  
  .hello-list ul li {
      list-style: none;
  }
  
  .hello-list ul li a {
      text-decoration: none;
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .works-img-box img {
      width: 40%;
  }
  
  .copy-right {
      width: 100%;
      text-align: center;
      padding-top: 30px;
  }
  
  .copy-right p a {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }

  @media screen and (max-width: 2560px){
    span.icon-box h2 {
      
        font-size: 17px;
      
    }

    .advanced-box img {
    width: 100%;
    height: 80%;
}

section.advanced {
    width: 100%;
    background: #F5F2FF;
    padding: 147px 50px;
    /* background-image: url(../assets/images/HELLO.png); */
    background-image: url(/src/assets/images/HELLO.png);
    background-position: left;
    background-repeat: no-repeat;
    background-size: 76%;
}

.boxing-last-btn button {
    display: none;
      width: 100%;
      background: transparent;
      border: none;
      padding-bottom: 15px;
  }
}
  
  @media screen and (max-width: 1920px){

    .dashb {
    height: 90%;
    opacity: 0;
    display: none;
}

    .listing {
    height: 80%;
    width: 100%;
    opacity: 1;
    padding: 0px 10px;
}
    .box_div{
    padding: 20px 0px 20px 30px;
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
  
  .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-out-enter, .fade-out-leave-to  {
    opacity: 0;
  }
  /* .advanced-box {
    transition: transform 2.5s ease-in-out, width 2.5s ease-in-out;
  } */
  
  .rotated {
      transition: transform 2.5s ease-in-out, width 2.5s ease-in-out;
    transform: rotate(90deg);
  
  
  }
  
  
  /* .fade-out-enter-active, .fade-out-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-out-enter, .fade-out-leave-to  {
    opacity: 0;
  } */
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  .fade-out {
    animation: fadeOut 1.5s;
  }
  
  @keyframes zoomOut {
    from {
      transform: scale(0.3);
    }
    to {
      transform: scale(1); 
    }
  }
  
  
  .linear-hide-enter-active,
  .linear-hide-leave-active {
    transition: opacity 0.5s, transform 0.5s; /* Adjust the duration as needed */
  }
  
  .linear-hide-enter,
  .linear-hide-leave-to /* .linear-hide-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(100%); /* Adjust the translation amount as needed */
  }
  .zoom-out {
    animation: zoomOut 1.5s ease-out;
  }
  
  
  .zoom-out-enter-active, .zoom-out-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  
  .zoom-out-enter, .zoom-out-leave-to /* .zoom-out-leave-active in <2.1.8 */ {
    transform: scale(1);
    opacity: 1;
  }
  
  .zoom-out-enter-to, .zoom-out-leave /* .zoom-out-leave-active in <2.1.8 */ {
    transform: scale(0.8);
    opacity: 0;
    
    transform: scale(0.9);
  }
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
      width: 0px;
    }
  
  section.hero {
      width: 100%;
      background-color: #F5F2FF;
      /* height: 1024px; */
      padding: 340px 50px 30px 50px;
      /* background-image: url(./assets/images/Group\ 24.png); */
      background-image: url(../assets/images/Frame_new.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
  }
  
  .contanir {
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
  }
  
  .hero-main {
      width: 100%;
  }
  
  .hero-tital {
      width: 100%;
  }
  
  .hero-tital p {
      color: #000;
      font-family: 'NATS', sans-serif;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0px;
      display: flex;
      align-items: center;
      gap: 5px;
  }
  
  .hero-tital p span svg {
      width: 50px;
      height: 50px;
  }
  
  .hero-tital h2 {
      color: #161543;
      font-family: 'Poly Sans', sans-serif;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin: 0px;
  }
  
  .hero-tital h2 span {
      padding-left: 172px;
  }
  
  .hero-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 145px 0px 0px 0px;
  }
  
  .box-tital {
      width: 40%;
  }
  
  .box-video {
      width: 24%;
  }
  
  .box-tital p {
      color: #000;
      font-family: sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 125% */
  }
  
  .box-video img {
      width: 100%;
  }
  
  section.home {
      width: 100%;
      background-color: #589AD3;
      padding: 305px 0px;
  }
  
  .main-home {
      width: 100%;
  }
  
  .main-home h1 {
      color: #F1F1EF;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 100%;
  }
  
  .main-home h1 span {
      text-align: center;
      display: flex;
      justify-content: flex-end;
  }
  
  span.span-2 {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      gap: 18px;
  }
  
  section.advanced {
      width: 100%;
      background: #F5F2FF;
      padding: 110px 50px;
      /* background-image: url(../assets/images/HELLO.png); */
      background-image: url(/src/assets/images/HELLO.png);
      background-position: left;
      background-repeat: no-repeat;
      background-size: 80%;

  }
  
  .main-advanced {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .advanced-tital {
      width: 46%;
  }
  
  .advanced-box {
      width: 50%;
      height: 605px;
      border-radius: 20px;
      background: #B44E9D;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 4px solid #161543 !important;
  }
  
  .advanced-box img {
      width: 100%;
  }
  
  .advanced-tital p {
      color: #000;
      font-family: 'NATS', sans-serif;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 0px;
  }
  
  .advanced-tital h2 {
      font-family: 'Poly Sans', sans-serif;
      color: #161543;
      font-size: 56px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding-top: 10px;
  }
  
  .advanced-btn {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 19px;
      padding-top: 50px;
  }
  
  button.SignUp {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      color: #FFF;
      border: none;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      width: 218px;
      padding: 24px 0px;
  }
  
  button.Login {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 218px;
      padding: 24px 0px;
      color: #1E1E1E;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .advanced-box img {
      width: 100%;
  }
  
  .boxing-1 {
      /* height: 605px; */
      background-color: #589AD3;
      border-radius: 20px 0px 0px 10px;
      width: 38%;
      padding: 30px 30px 0px 30px;
      border-top: 4px solid #161543 !important;
      border-bottom: 4px solid #161543 !important;
  }
  
  .boxing-2 {
      width: 62%;
      height: 603px;
      border-radius: 0px 20px 20px 0px;
  }
  
  .logo-boxing {
      width: 16%;
  }
  
  .logo-boxing img {
      width: 100%;
  }
  
  .boxing-btn-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      padding: 60px 0px 60px 0px;
  }
  
  .boxing-btn-box button a {
      display: flex;justify-content: space-between;align-items: center;width: 100%;text-decoration: none;}
  
      
  .boxing-btn-box button {
      width: 100%;
      flex-shrink: 0;
      padding: 14px 0px;
      background-color: transparent;
      border: none;
      border-radius: 20px;
  }
  
  span.icon-box {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 72%;
  }
  
  span.icon-box h2 {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 116.667% */
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  span.error-icon {
      width: 12%;
  }
  
  span.error-icon svg {
      width: 30px;
      height: 30px;
  }
  
  span.icon-box img {
      width: 47px;
  }
  
  .boxing-last-btn {
      width: 100%;
      cursor: pointer;
  }
  
  .boxing-last-btn button {
      width: 100%;
      background: transparent;
      border: none;
      padding-bottom: 15px;
  }
  
  .boxing-last-btn  button a {
      color: #FFF;
      font-size: 16px;
      font-family: 'NATS', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 35px; /* 218.75% */
      text-decoration: none;
      text-align: center;
  }
  
  .Exciting-box {
      width: 75%;
      height: 615px;
      border-radius: 20px;
      background: #b44e9d;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  section.Exciting {
      width: 100%;
      background: #F5F2FF;
      padding: 165px 50px 70px 50px;
      /* background-image: url(../assets/images/lastbg.png); */
      background-image: url(../assets/images/lastbg.png);
  
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
  
  
  }
  
  .main-Exciting {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  
  .Exciting-tital {
      width: 100%;
      padding-bottom: 40px;
  }
  
  .Exciting-tital h2 {
      color: #161543;
      text-align: center;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .boxings-1 {
      background-color: #589ad3;
      border-radius: 20px 0px 0px 20px;
      width: 30%;
      padding: 30px 30px 0px 30px;
  }
  
  .Exciting-btn-box {
      width: 85%;
      display: flex;
      align-items: center;
      padding-top: 20px;
      justify-content: flex-end;
      gap: 30px;
  }
  
  .Exciting-btn-box button {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      background: #FFF;
      padding: 25px;
  }
  section.Takes {
      width: 100%;
      padding: 266px 0px;
      background: #F5F2FF;
      background-image: url(./assets/long-bg.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .main-Takes {
      width: 100%;
  }
  
  .Takes-tital span {
      display: flex;
      align-items: center;
      gap: 5px;
  }
  
  .Takes-tital span p {
      color: #000;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .Takes-tital h2 {
      color: #161543;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .Takes-box {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 50px;
      padding-top: 50px;
  }
  
  .Takes-boxing {
      display: flex;
      width: 24%;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      /* background-image: url(../assets/images/Frame\ 95.png); */
      background-image: url(../assets/images/Frame\ 95.png);
  
      justify-content: center;
      padding: 26px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .Takes-boxing h3 {
      color: #F5F2FF;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .Takes-boxing h2 {
      color: #F5F2FF;
      font-size: 140px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .Takes-boxing p {
      color: #F5F2FF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      padding-bottom: 50px;
  }
  
  .Takes-boxing button {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      padding: 20px 48px;
      border: none;
  }
  
  .Takes-boxing button a {
      color: #FFF;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }
  
  .main-better {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  section.BETTER {
      width: 100%;
      padding: 214px 95px 220px 95px;
      background-image: url(../assets/images/Frame90.png);
      
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  }
  
  .better-1 {
      width: 32%;
      display: flex;
      flex-direction: column;
      gap: 149px;
      align-items: center;
  }
  
  .better-2 {
      border-radius: 20px;
      border: 5px solid #1E1E1E;
      width: 35%;
      height: 718px;
      flex-shrink: 0;
      background-color: #589ad3;
  }
  
  .box-better {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      padding: 27px 33px;
      justify-content: center;
      align-items: center;
      gap: 24px;
      width: 449px;
      height: 140px;
  }
  
  section.WORKS {
      width: 100%;
      background-color: #D9D9D9;
      padding: 176px 95px 236px 95px;
  }
  
  .main-works {
      width: 100%;
  }
  
  .main-works h2 {
      color: #161543;
      font-size: 135px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  
  .works-box {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 32px 0px;
      justify-content: space-between;
  }
  
  .works-card {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      width: 23%;
      height: 233px;
      flex-shrink: 0;
      padding: 45px 0px 0px 0px;
  }
  
  .works-card h3 {
      color: #161543;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-align: center;
  }
  
  .works-card p {
      color: #161543;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 76.667% */
      font-family: 'NATS', sans-serif;
      text-align: center;
      padding-top: 10px;
  }
  
  .works-boxing {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 120px;
  }
  
  .works-boxing h3 {
      color: #161543;
      font-size: 100px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 42%;
  }
  
  .works-imger {
      width: 55%;
  }
  
  .works-img-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 104px;
  }
  
  section.Journey {
      width: 100%;
      background-color: #589AD3;
      padding: 191px 145px 26px 145px;
  }
  
  .main-Journey {
      width: 100%;
  }
  
  .Journey-box {
      width: 100%;
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
      padding-bottom: 322px;
  }
  
  .Journey-btn {
      width: 50%;
      display: flex;
      align-items: center;
      gap: 40px;
  }
  
  .Journey-btn button {
      display: flex;
      width: 28%;
      padding: 25px 52px 31px 52px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #D9D9D9;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      border: 2px solid #D9D9D9 ;
  }
  
  .Journey-btn button a {
      color: #263238;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  
  button.Loging {
      background: transparent;border-radius: 10px;border: 2px solid #D9D9D9;box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }
  
  button.Loging a {
      color: #fff;
  }
  
  .Journey-last-box {
      width: 100%;
      border-bottom: 2px solid #fff;
      border-top: 2px solid #fff;
      padding: 40px 0px 52px 0px;
  }
  
  .hello-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .hello-tital {
      width: 60%;
  }
  
  .hello-tital img {
      width: 44%;
  }
  
  .hello-tital p {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px; /* 145% */
      font-family: 'NATS', sans-serif;
      padding-top: 22px;
  }
  
  .hello-list {
      width: 12%;
  }
  
  .hello-list ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
  }
  
  .hello-list ul li {
      list-style: none;
  }
  
  .hello-list ul li a {
      text-decoration: none;
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  
  .works-img-box img {
      width: 40%;
  }
  
  .copy-right {
      width: 100%;
      text-align: center;
      padding-top: 30px;
  }
  
  .copy-right p a {
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }
}
  
  
  @media screen and (max-width: 1600px){

    .dashb {
    height: 70%;
    opacity: 0;
    display: none;
}

    .listing {
    height: 65%;
    width: 100%;
    opacity: 1;
    padding: 0px 20px;
}

    .box_div {
    padding: 110px 0px 20px 30px;
}

    .exi{
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 23px;
    font-weight: 600;
    /* line-height: 29.97px; */
    font-family: system-ui;
  }
  
      .hero-tital h2 {
          color: #161543;
          font-family: 'Poly Sans', sans-serif;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0px;
      }
      .hero-tital p {
          color: #000;
          font-family: 'NATS', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0px;
          display: flex;
          align-items: center;
          gap: 5px;
      }
      .hero-tital p span svg {
          width: 40px;
          height: 40px;
      }
      .contanir {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
      }
      section.hero {
          width: 100%;
          background-color: #F5F2FF;
          /* height: 1024px; */
          padding: 285px 30px 25px 30px;
          background-image: url(../assets/images/Frame_new.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
      }
      .box-tital p {
          color: #000;
          font-family: sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
      }
      .main-home h1 {
          color: #F1F1EF;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 100%;
      }
      span.span-2 {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          gap: 8px;
      }
      section.home {
          width: 100%;
          background-color: #589AD3;
          padding: 270px 0px;
      }
      section.advanced {
          width: 100%;
          background: #F5F2FF;
          padding: 130px 45px;
          background-image: url(../assets/images/HELLO.png);
          background-position: left;
          background-repeat: no-repeat;
          background-size: 88%;
      }
      .advanced-tital p {
          color: #000;
          font-family: 'NATS', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          display: flex;
          align-items: center;
          gap: 5px;
          margin: 0px;
      }
      .advanced-tital p span svg {
          width: 40px;
          height: 40px;
      }
      .advanced-tital h2 {
          font-family: 'Poly Sans', sans-serif;
          color: #161543;
          font-size: 46px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding-top: 10px;
      }
      button.SignUp {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          color: #FFF;
          border: none;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          width: 218px;
          padding: 24px 0px;
      }
      button.Login {
          border-radius: 10px;
          border: 2px solid #1E1E1E;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 218px;
          padding: 20px 0px;
          color: #1E1E1E;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .boxing-1 {
          /* height: 605px; */
          background-color: #589AD3;
          border-radius: 20px 0px 0px 20px;
          width: 38%;
          padding: 20px 20px 0px 20px;
      }
      .advanced-box {
          width: 50%;
          height: 580px;
          border-radius: 20px;
          background: #B44E9D;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      span.icon-box h2 {
          color: #FFF;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 35px;
          font-family: 'NATS', sans-serif;
          text-decoration: none;
      }
      span.error-icon svg {
          width: 20px;
          height: 20px;
      }
      span.icon-box img {
          width: 45px;
      }
      .Exciting-tital h2 {
          color: #161543;
          text-align: center;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Exciting-tital {
          width: 100%;
          padding-bottom: 25px;
      }
      .Exciting-box {
          width: 75%;
          height: 595px;
          border-radius: 20px;
          background: #b44e9d;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .Exciting-btn-box button a svg {
          width: 40px;
          height: 40px;
      }
      .Exciting-btn-box button {
          border-radius: 10px;
          border: 2px solid #1E1E1E;
          background: #FFF;
          padding: 15px;
      }
      section.Exciting {
          width: 100%;
          background: #F5F2FF;
          padding: 160px 45px 55px 45px;
          background-image: url(../assets/images/lastbg.png);
          background-position: left;
          background-repeat: no-repeat;
          background-size: contain;
      }
      .Takes-tital span svg {
          width: 40px;
          height: 40px;
      }
      .Takes-tital span p {
          color: #000;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Takes-tital h2 {
          color: #161543;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-box {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 50px;
          padding-top: 35px;
      }
      .Takes-boxing h3 {
          color: #F5F2FF;
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Takes-boxing h2 {
          color: #F5F2FF;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-boxing p {
          color: #F5F2FF;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          padding-bottom: 40px;
      }
      .Takes-boxing button {
          border-radius: 10px;
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          padding: 15px 28px;
          border: none;
      }
      .Takes-boxing button a {
          color: #FFF;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          font-family: 'NATS', sans-serif;
      }
      section.Takes {
          width: 100%;
          padding: 225px 0px;
          background: #F5F2FF;
          background-image: url(./assets/long-bg.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }
      .Takes-boxing {
          display: flex;
          width: 24%;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          background-image: url(../assets/images/Frame\ 95.png);
          justify-content: center;
          padding: 24px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }
      section.BETTER {
          width: 100%;
          padding: 190px 65px 180px 65px;
          background-image: url(../assets/images/Frame90.png);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
      }
      .box-better {
          border-radius: 10px;
          background: #FFF;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          display: flex;
          padding: 24px 24px;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 400px;
          height: 110px;
      }
      .box-better svg {
          width: 75px;
          height: 75px;
      }
      .better-1 {
          width: 32%;
          display: flex;
          flex-direction: column;
          gap: 115px;
          align-items: center;
      }
      .better-2 {
          border-radius: 20px;
          border: 5px solid #1E1E1E;
          width: 35%;
          height: 575px;
          flex-shrink: 0;
          background-color: #589ad3;
      }
      section.WORKS {
          width: 100%;
          background-color: #D9D9D9;
          padding: 160px 70px 170px 70px;
      }
      .main-works h2 {
          color: #161543;
          font-size: 100px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .works-card h3 {
          color: #161543;
          font-size: 50px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          text-align: center;
      }
      .works-card p {
          color: #161543;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          font-family: 'NATS', sans-serif;
          text-align: center;
          padding-top: 10px;
      }
      .works-box {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 28px 0px;
          justify-content: space-between;
      }
      .works-card {
          border-radius: 10px;
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          width: 23%;
          height: 233px;
          flex-shrink: 0;
          padding: 40px 0px 0px 0px;
      }
      .works-boxing h3 {
          color: #161543;
          font-size: 75px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 42%;
      }
      .Journey-box h2 {
          color: #FFF;
          font-size: 75px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Journey-btn button {
          display: flex;
          width: 33%;
          padding: 20px 45px 20px 45px;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      button.Loging {
          background: transparent;
          border-radius: 10px;
          border: 2px solid #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      .Journey-btn-box {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 280px;
      }
      section.Journey {
          width: 100%;
          background-color: #589AD3;
          padding: 170px 125px 25px 125px;
      }
      .hello-tital p {
          color: #FFF;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 29px;
          font-family: 'NATS', sans-serif;
          padding-top: 22px;
      }
      .hello-list ul li a {
          text-decoration: none;
          color: #FFF;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Journey-last-box {
          width: 100%;
          border-bottom: 2px solid #fff;
          border-top: 2px solid #fff;
          padding: 35px 0px 45px 0px;
      }
  }
  
  
  
  @media screen and (max-width: 1440px){

    .dashb {
    height: 56%;
    opacity: 0;
    display: none;
}

    .listing{
    height: 55%;
    width: 100%;
    opacity: 1;
    padding: 0px 20px;
}

    .box_div {
    padding: 120px 0px 20px 30px;
}
    .exi{
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 21px;
    font-weight: 600;
    /* line-height: 29.97px; */
    font-family: system-ui;
  }
  
  
  .contanir {
          width: 100%;
          max-width: 1170px;
          margin: 0 auto;
  }
  .hero-tital h2 {
          color: #161543;
          font-family: 'Poly Sans', sans-serif;
          font-size: 75px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0px;
  }
  .hero-tital p {
          color: #000;
          font-family: 'NATS', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin: 0px;
          display: flex;
          align-items: center;
          gap: 5px;
  }
  .hero-tital p span svg {
          width: 35px;
          height: 35px;
  }
  section.hero {
          width: 100%;
          background-color: #F5F2FF;
          /* height: 1024px; */
          padding: 275px 25px 25px 25px;
          background-image: url(../assets/images//Frame_new.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
  }    
  .box-tital {
      width: 44%;
  }
  .main-home h1 {
      color: #F1F1EF;
      font-size: 75px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 100%;
  }
  section.home {
      width: 100%;
      background-color: #589AD3;
      padding: 255px 0px;
  }
  .advanced-tital p {
      color: #000;
      font-family: 'NATS', sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 0px;
  }
  .advanced-tital p span svg {
      width: 34px;
      height: 34px;
  }
  .advanced-tital h2 {
      font-family: 'Poly Sans', sans-serif;
      color: #161543;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding-top: 10px;
  }
  .advanced-btn {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 19px;
      padding-top: 35px;
  }
  button.SignUp {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      color: #FFF;
      border: none;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      width: 190px;
      padding: 18px 0px;
  }
  button.Login {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 190px;
      padding: 16px 0px;
      color: #1E1E1E;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .boxing-btn-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 40px 0px 40px 0px;
  }
  span.icon-box {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 72%;
  
  }
  .boxing-1 {
      /* height: 605px; */
      background-color: #589AD3;
      border-radius: 20px 0px 0px 20px;
      width: 38%;
      padding: 15px 15px 0px 15px;
  }
  span.icon-box img {
      width: 40px;
  }
  .advanced-box {
      width: 50%;
      height: 485px;
      border-radius: 20px;
      background: #B44E9D;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .Exciting-box {
      width: 75%;
      height: 500px;
      border-radius: 20px;
      background: #b44e9d;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .Exciting-tital h2 {
      color: #161543;
      text-align: center;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Exciting-btn-box button {
      border-radius: 10px;
      border: 2px solid #1E1E1E;
      background: #FFF;
      padding: 10px;
  }
  .Exciting-btn-box button a svg {
      width: 30px;
      height: 30px;
  }
  section.Exciting {
      width: 100%;
      background: #F5F2FF;
      padding: 150px 45px 50px 45px;
      background-image: url(../assets/images/lastbg.png);
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
  }
  .Takes-tital span p {
      color: #000;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .Takes-tital span svg {
      width: 35px;
      height: 35px;
  }
  .Takes-tital h2 {
      color: #161543;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Takes-box {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 35px;
      padding-top: 30px;
  }
  .Takes-boxing h3 {
      color: #F5F2FF;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .Takes-boxing h2 {
      color: #F5F2FF;
      font-size: 75px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Takes-boxing p {
      color: #F5F2FF;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      padding-bottom: 30px;
  }
  .Takes-boxing button {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      padding: 12px 18px;
      border: none;
  }
  .Takes-boxing button a {
      color: #FFF;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      font-family: 'NATS', sans-serif;
  }
  .box-better {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      padding: 24px 24px;
      align-items: center;
      gap: 10px;
      width: 355px;
      height: 90px;
      justify-content: center;
  }
  .box-better svg {
      width: 60px;
      height: 60px;
  }
  .box-better h2 {
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
  }
  .better-2 {
      border-radius: 20px;
      border: 5px solid #1E1E1E;
      width: 35%;
      height: 510px;
      flex-shrink: 0;
      background-color: #589ad3;
  }
  section.BETTER {
      width: 100%;
      padding: 165px 65px 155px 65px;
      background-image: url(../assets/images/Frame90.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  }
  .main-works h2 {
      color: #161543;
      font-size: 75px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .works-card h3 {
      color: #161543;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-align: center;
  }
  .works-card p {
      color: #161543;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      font-family: 'NATS', sans-serif;
      text-align: center;
      padding-top: 10px;
  }
  .works-card {
      border-radius: 10px;
      background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      width: 23%;
      height: 200px;
      flex-shrink: 0;
      padding: 40px 0px 0px 0px;
  }
  section.WORKS {
      width: 100%;
      background-color: #D9D9D9;
      padding: 140px 70px 130px 70px;
  }
  .works-boxing {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 90px;
  }
  .works-boxing h3 {
      color: #161543;
      font-size: 65px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
      width: 42%;
  }
  .Journey-box h2 {
      color: #FFF;
      font-size: 65px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-family: 'Poly Sans', sans-serif;
  }
  .Journey-btn button {
      display: flex;
      width: 32%;
      padding: 16px 35px 16px 34px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: #D9D9D9;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }
  button.Loging {
      background: transparent;
      border-radius: 10px;
      border: 2px solid #D9D9D9;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }
  .Journey-btn button a {
      color: #263238;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'NATS', sans-serif;
      text-decoration: none;
  }
  section.Journey {
      width: 100%;
      background-color: #589AD3;
      padding: 135px 125px 20px 125px;
  }
  .Journey-btn-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 220px;
  }
  .hello-tital {
      width: 64%;
  }
  .hello-list {
      width: 14%;
  }
  .Journey-last-box {
      width: 100%;
      border-bottom: 2px solid #fff;
      border-top: 2px solid #fff;
      padding: 30px 0px 40px 0px;
  }
  }
  
  
  
  @media screen and (max-width: 1366px){

    

    .listing {
    height: 50%;
    width: 100%;
    opacity: 1;
    padding: 0px 20px;
}
    .box_div{
    padding: 110px 0px 20px 30px;
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
  
      .hero-tital h2 {
          color: #161543;
          font-family: 'Poly Sans', sans-serif;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0px;
      }
      .hero-box {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 135px 0px 0px 0px;
      }
      section.hero {
          width: 100%;
          background-color: #F5F2FF;
          /* height: 1024px; */
          padding: 262px 20px 25px 20px;
          background-image: url(../assets/images/Frame_new.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
      }
      .main-home h1 {
          color: #F1F1EF;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 1153px;
      }
      span.span-2 img {
          width: 25%;
      }
      section.home {
          width: 100%;
          background-color: #589AD3;
          padding: 220px 0px;
      }
      .advanced-tital h2 {
          font-family: 'Poly Sans', sans-serif;
          color: #161543;
          font-size: 38px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding-top: 10px;
      }
      .advanced-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 19px;
          padding-top: 25px;
      }
      button.SignUp {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          color: #FFF;
          border: none;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          width: 170px;
          padding: 16px 0px;
      }
      button.Login {
          border-radius: 10px;
          border: 2px solid #1E1E1E;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          padding: 14px 0px;
          color: #1E1E1E;
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .advanced-box {
        position: relative;
        z-index: 1;
          width: 50%;
          height: 465px;
          border-radius: 20px;
          background: #B44E9D;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .boxing-btn-box button {
          width: 100%;
          flex-shrink: 0;
          padding: 12px 0px;
          background-color: transparent;
          border: none;
          border-radius: 20px;
      }
      section.advanced {
          width: 100%;
          background: #F5F2FF;
          padding: 130px 35px;
          background-image: url(../assets/images/HELLO.png);
          background-position: left;
          background-repeat: no-repeat;
          background-size: contain;
      }
      .Exciting-box {
          width: 75%;
          height: 482px;
          border-radius: 20px;
          background: #b44e9d;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .Exciting-btn-box {
          width: 85%;
      display: flex;
      align-items: center;
      padding-top: 20px;
      justify-content: flex-end;
      gap: 30px ;
      }
      .Exciting-tital h2 {
          color: #161543;
          text-align: center;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-tital h2 {
          color: #161543;
          font-size: 42px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-boxing h3 {
          color: #F5F2FF;
          font-size: 25px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      .Takes-boxing h2 {
          color: #F5F2FF;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Takes-boxing p {
          color: #F5F2FF;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          padding-bottom: 30px;
      }
      .Takes-boxing button a {
          color: #FFF;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          font-family: 'NATS', sans-serif;
      }
      section.Takes {
          width: 100%;
          padding: 200px 0px;
          background: #F5F2FF;
          background-image: url(./assets/long-bg.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }
      .box-better {
          border-radius: 10px;
          background: #FFF;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          display: flex;
          padding: 24px 24px;
          align-items: center;
          gap: 10px;
          width: 305px;
          height: 85px;
          justify-content: center;
      }
      .box-better svg {
          width: 55px;
          height: 55px;
      }
      .box-better h2 {
          color: #000;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
      }
      section.BETTER {
          width: 100%;
          padding: 150px 65px 150px 65px;
          background-image: url(../assets/images/Frame90.png);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
      }
      .main-works h2 {
          color: #161543;
          font-size: 70px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .works-card h3 {
          color: #161543;
          font-size: 38px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          text-align: center;
      }
      .works-card {
          border-radius: 10px;
          background: linear-gradient(265deg, #589AD3 23.16%, #AF52A0 83.05%);
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
          width: 23%;
          height: 190px;
          flex-shrink: 0;
          padding: 35px 0px 0px 0px;
      }
      .works-card p {
          color: #161543;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
          font-family: 'NATS', sans-serif;
          text-align: center;
          padding-top: 10px;
      }
      .works-boxing h3 {
          color: #161543;
          font-size: 58px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
          width: 42%;
      }
      .works-boxing {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 80px;
      }
      .Journey-box h2 {
          color: #FFF;
          font-size: 58px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          font-family: 'Poly Sans', sans-serif;
      }
      .Journey-btn button {
          display: flex;
          width: 30%;
          padding: 12px 30px 12px 30px;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      .Journey-btn button a {
          color: #263238;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          font-family: 'NATS', sans-serif;
          text-decoration: none;
      }
      button.Loging {
          background: transparent;
          border-radius: 10px;
          border: 2px solid #D9D9D9;
          box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
      }
      .Journey-btn-box img {
          width: 32%;
      }
      .Journey-btn-box {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 180px;
      }
      .hello-tital {
          width: 66%;
      }
      .hello-tital img {
          width: 40%;
      }
      .hello-list {
          width: 15%;
      }
      .Journey-last-box {
          width: 100%;
          border-bottom: 2px solid #fff;
          border-top: 2px solid #fff;
          padding: 25px 0px 35px 0px;
      }
      section.Journey {
          width: 100%;
          background-color: #589AD3;
          padding: 124px 120px 15px 120px;
      }

  }

  @media screen and (max-width: 600px){

    .advanced-tital {
    
    padding-top: 40px;
 
}

    .advanced-tital h2 {
    
      font-size: 32px !important;
   
  }

    .logins{
    border-radius: 5px;
    border:none;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    padding: 0px 0px;
    color: white;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: 'NATS', sans-serif;
    margin-right: 10px;
    cursor: pointer;
    background-color: #589AD3;

}

    .box_div {
    padding: 15px 0px 10px 5px;
}
    .dashb {
    height: 70%;
    opacity: 0;
    display: none;
}

    .listing {
    height: 70%;
    width: 100%;
    opacity: 1;
    padding: 0px 10px;
}

section.advanced {
 
    padding: 20px 20px 100px 20px !important;
   
  }

  .boxing_h2{
  
    font-size: 16px;
}
}

 
  </style>
  
  
  
  
    
    