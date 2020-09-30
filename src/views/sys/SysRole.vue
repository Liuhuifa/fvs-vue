<template>
  <div>
    <el-container direction="vertical">

      <el-header>
        <el-form label-width="80px" :model="searchData" inline>
          <el-form-item label="角色名:">
            <el-input v-model="searchData.roleName"></el-input>
          </el-form-item>
          <el-form-item label="角色:">
            <el-input v-model="searchData.role"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button-group>
              <el-button type="primary">搜索</el-button>
              <el-button type="success" @click="drawerData.visible=true">添加</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </el-header>

      <el-row>
        <el-table stripe border>
          <el-table-column type="index"
                           label="序号"
                           width="80px"
                           align="center"
          >

          </el-table-column>
          <el-table-column label="角色名"
                           align="center"
          >

          </el-table-column>
          <el-table-column label="角色"
                           align="center"
          >

          </el-table-column>
          <el-table-column label="图标"
                           align="center"
          >

          </el-table-column>
          <el-table-column label="创建时间"
                           align="center"
          >

          </el-table-column>
          <el-table-column label="操作"
                           align="center"
          >
            <!--            <template slot-scope="scope">-->
            <template>
              <el-button type="primary">修改</el-button>
              <el-button type="primary">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>

      <el-footer>

      </el-footer>
    </el-container>
    <el-drawer :title="drawerData.title" :visible.sync="drawerData.visible" :wrapperClosable="false" destroy-on-close
               size="20%">
      <el-container direction="horizontal" class="form">
        <el-row>
          <el-col>

          </el-col>
        </el-row>
        <el-row :gutter="10" justify="center">

          <el-col>
            <el-form ref="operForm" :model="operData" label-width="80px">
              <el-row :gutter="20" justify="center">
                <el-col :span="24">
                  <el-form-item label="角色名:">
                    <el-input placeholder="请输入角色名" v-model="operData.roleName"></el-input>
                  </el-form-item>
                  <el-form-item label="角色:">
                    <el-input v-model="operData.role" placeholder="请输入角色"></el-input>
                  </el-form-item>
                  <el-form-item label="图标:">
                    <el-input v-model="operData.icon" placeholder="请输入图标"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="buttons">
                <el-form-item>
                  <el-button type="primary">提交</el-button>
                  <el-button type="success" @click="drawerData.visible=false">取消</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </el-col>

        </el-row>

      </el-container>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "SysRole",
  data() {
    return {
      searchData: {
        role: null,
        roleName: null,
      },
      drawerData: {
        title: "添加角色",
        visible: false,
      },
      operData: {
        role: null,
        roleName: null,
        icon: null,
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: start;
}

.buttons {
  display: flex;
  justify-content: right;
}
</style>