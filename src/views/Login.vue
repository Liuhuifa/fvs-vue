<template>
  <div class="body">
    <el-container direction="vertical">
      <div>页面倒计时{{ time }} 秒,点击
        <el-link type="primary" href="http://192.168.157.131/index.htm">这里</el-link>
        立即跳转
      </div>
    </el-container>
  </div>
</template>

<script>
// import Cookie from 'js-cookie'
// import { mapMutations } from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      time: 5
    }
  },
  created() {

  },
  mounted() {
    let search = window.location.search;
    if (search) {
      let code = search.substr(1);
      console.log(code)
      if (code.startsWith("code=")) {
        let val = code.substr(5);
        if (val) {
          this.getToken(val)
        }
      }
    }

  },
  methods: {
    getToken(code) {

      this.$oauth({
        url: '/oauth/token',
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
          code: code,
          grant_type: 'authorization_code',
          redirect_uri: 'http://192.168.157.131/security'
        }
      }).then(res => {

        this.Cookie.set("token", res.data.access_token)
        this.Cookie.set("expires_in", res.data.expires_in)
        this.Cookie.set("scope", res.data.scope)
        this.Cookie.set("token_type", res.data.token_type);
        this.$store.commit('userInfo',res.data.info)
        this.toIndex();

      })
    },
    toIndex() {
      let _this = this;
      window.setInterval(function () {
        _this.time--;
        console.log(_this.time)
        if (_this.time <= 1) {
          window.location.href = 'http://192.168.157.131/index.htm';
        }
      }, 1000)
    }
  }

}
</script>

<style scoped>
.body {
  width: 100%;
  height: 98.3vh;
  /*background-image: url("../assets/login.jpg");*/
  /*background-position: center;*/
  /*background-repeat: repeat;*/
}

</style>