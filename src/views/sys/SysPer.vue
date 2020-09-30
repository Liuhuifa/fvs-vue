<template>
  <div>
    <el-container direction="vertical">
      <el-header>
        <el-row :gutter="10">
          <el-col :span="24">
            <el-form ref="form" :model="searchData" label-width="80px" inline>
              <el-form-item label="权限名:">
                <el-input v-model="searchData.menuName" placeholder="请输入权限名"></el-input>
              </el-form-item>
              <el-form-item label="权限:">
                <el-input v-model="searchData.per" placeholder="请输入权限"></el-input>
              </el-form-item>
              <el-form-item>
                <!--                <el-select v-model="searchData.menuType" placeholder="请选择类型">-->
                <!--                  <el-option-->
                <!--                      v-for="item in optionsList"-->
                <!--                      :key="item.value"-->
                <!--                      :label="item.label"-->
                <!--                      :value="item.value">-->
                <!--                  </el-option>-->
                <!--                </el-select>-->
              </el-form-item>
              <el-form-item>
                <el-button-group>
                  <el-button type="primary">搜索</el-button>
                  <el-button type="success" @click="drawerData.visible=true">添加</el-button>
                </el-button-group>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-header>
      <el-footer>

      </el-footer>
    </el-container>
    <el-container direction="horizontal">
      <el-drawer :title="drawerData.title" :visible.sync="drawerData.visible" :wrapperClosable="false">
        <el-row :gutter="10">
          <el-col :span="15">
            <el-form ref="operForm" :model="operData" label-width="80px">
              <el-form-item label="权限名:">
                <el-input v-model="operData.menuName" placeholder="请输入权限名"></el-input>
              </el-form-item>
              <el-form-item label="权限:">
                <el-input v-model="operData.per" placeholder="请输入权限"></el-input>
              </el-form-item>
              <el-form-item label="图标:">
                <el-input v-model="operData.menuIco" placeholder="请输入图标"></el-input>
              </el-form-item>
              <el-form-item label="类型:">
                <el-select v-model="operData.menuType" placeholder="请选择类型" default-first-option>
                  <el-option value="0" label="菜单"></el-option>
                  <el-option value="1" label="按钮"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">添加</el-button>
                <el-button type="warning" @click="drawerData.visible=false">取消</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-drawer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "SysPer",
  data() {
    return {
      searchData: {
        menuName: null,
        per: null,
        menuType: null
      },
      drawerData: {
        visible: false,
        title: '添加权限'
      },
      operData: {
        per: null,
        menuName: null,
        menuType: null,
        menuIco: null,
        parentId: null,
      }
    }
  }
}
</script>

<style scoped>

</style>