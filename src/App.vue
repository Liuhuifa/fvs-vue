<template>
  <div id="app">
    <home/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
import Home from "@/components/Home";

export default {
  components: {Home}
}
</script>