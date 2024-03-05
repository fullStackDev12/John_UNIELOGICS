<template>
    <button @click="click">
        Route Click
    </button>
</template>


<script>

export default {
    name:'RouteClick',



    methods:{

click()
{
// navigator.navigate('/home');
console.log('Button Clicked');
this.$router.push('/home');

}

}
}




</script>