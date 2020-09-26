<template>
  <el-col>
    <el-container>
      <el-header>
        <el-col class="right">
          <el-col class="right_left">
            <el-link type="primary" href="http://192.168.157.131/oauth/authorize?client_id=e5170418-8560-460b-9296-d7bd95a06a5e&response_type=code&scope=all&redirect_uri=http://192.168.157.131">登录</el-link>
            /
            <el-link type="success">注册</el-link>
          </el-col>
          <el-col class="right_right">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                设置<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>

        </el-col>
      </el-header>
    </el-container>
    <el-container>
      <!--    左侧    -->
      <el-aside width="200px">
        <div class="top">
          <el-image/>
        </div>
        <div class="center">
          <el-col>
            <el-menu mode="vertical" :router="true">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item index="/user">用户管理</el-menu-item>
                <el-menu-item index="2">角色管理</el-menu-item>
                <el-menu-item index="3">权限管理</el-menu-item>
                <el-menu-item index="4">菜单管理</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航二</span>
                </template>
              </el-submenu>
              <el-submenu index=3>
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航三</span>
                </template>
              </el-submenu>
            </el-menu>
          </el-col>
        </div>
        <div class="footer">

        </div>
      </el-aside>
      <!--中间        -->
      <el-container>

        <el-col>
          <el-main>
            <el-col class="header">
              <el-page-header title="返回" :content="content"/>
            </el-col>
            <el-col class="main">
              <router-view></router-view>
            </el-col>
          </el-main>
        </el-col>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-col>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      content: '憨憨',
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #211C1C;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: black;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: #E9EEF3;*/
  /*color: #333;*/
  /*text-align: center;*/
  height: 84.3vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.right {
  display: flex;
  justify-content: flex-end;
}

.el-header {
  display: flex;
  justify-content: flex-end;
}

.el-header > :nth-child(1) {
  width: 11vw;
}

.el-image {
  border-radius: 50%;
  width: 8vw;
  height: 8vw;
}

.top {
  margin-top: 10px;
}
.main{
  margin-top: 8vh;
}
</style>