<template>
  <my-header>
    
  </my-header>
</template>

<script>
import MyHeader from "@/components/MyHeader";

export default {
  name: 'App',
  components: {
    MyHeader,
  },
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: #f1f1f1;
  height: 120vh;
}

.container {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

</style>
