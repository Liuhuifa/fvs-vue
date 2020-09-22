<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "Login",
  created() {
    this.$axios.get('http://192.168.157.131/oauth/authorize?client_id=e5170418-8560-460b-9296-d7bd95a06a5e&response_type=code&scope=all&redirect_uri=http://200.3.201.182:8080')
        .then(response => {
          console.log(response)
        })
  }
}
</script>

<style scoped>

</style>