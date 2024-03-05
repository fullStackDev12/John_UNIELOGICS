<template>
    <div>
        <h1>User Template</h1>
    </div>
</template>


<script>
export default {

name:'user',

methods: {
created() {
    const userId = this.$route.params.id;
    // Use userId as needed
  }
}


}

</script>