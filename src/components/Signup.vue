<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <label for="username">Username:</label>
        <input type="number" min="0" max="4" v-model="username" @change="data(username)"/>
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />

        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
  
        <button type="submit">Sign Up</button>
      </form>
      <p>{{ message }}</p>



      <h1>one user send</h1>
      <form @submit.prevent="oneup">
        <label for="username">Username:</label>
        <input type="text" v-model="onename" required />
  
       

     
  
        <button type="submit">oneup</button>
      </form>


    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'signup',
    data() {
      return {
        username: 0,
        password: '',
        email:'',
        message: '',
        onename: '',
      };
    },

  //   mounted() {

  //       console.log(this.username);
     
  // },
   
    methods: {

      data(e){
        if (e >4){
          this.username = 4

        }
      },

      
      signup() {
        axios
          .post('http://localhost:3001/signup', {
            username: this.username,
            password: this.password,
            email: this.email,
          })
          .then((response) => {
            this.message = response.data.message;
          })
          .catch((error) => {
            console.error('Signup error:', error);
            this.message = 'Error during signup';
          });
      },

      oneup(){
        axios
          .post('http://localhost:3001/oneuser', {
            onename: this.onename,
         
          })
          .then((response) => {
            this.message = response.data.message;
          })
          .catch((error) => {
            console.error('Signup error:', error);
            this.message = 'Error during signup';
          });


      }


    },
  };
  </script>
  
  <style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input {
    margin-bottom: 16px;
  }
  </style>
  