<template>
  <div>
    <el-container>
      <el-row type="flex">
        <el-form ref="searchForm" :model="searchForm" label-width="80px" :inline="true">
          <el-form-item label="用户名">
            <el-input v-model="searchForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="searchForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="searchForm.email"></el-input>
          </el-form-item>
        </el-form>
        <el-button-group>
          <el-button type="primary">搜索</el-button>
          <el-button type="success" v-on:click="visible = true">添加</el-button>
          <!--        <el-button type="primary">搜索</el-button>-->
        </el-button-group>
      </el-row>
    </el-container>

    <!--  抽屉  -->
    <el-container>
      <!--   添加   -->
      <el-container direction="vertical">
        <el-drawer
            :visible.sync="visible"
            title="添加用户"
            :wrapperClosable="false"
        >
          <el-form ref="addForm" :model="addForm" label-width="80px" :rules="rules" :status-icon="true">
            <el-form-item label="用户名:" prop="username">
              <el-input v-model="addForm.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="真实姓名:" prop="realName">
              <el-input v-model="addForm.realName" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input v-model="addForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="重复密码:" prop="repeatPass">
              <el-input v-model="addForm.repeatPass" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="手机号:" prop="phone">
              <el-input v-model="addForm.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:" prop="email">
              <el-input v-model="addForm.email" placeholder="请输入邮箱号"></el-input>
            </el-form-item>
            <el-form-item label="角色:" prop="role">
              <el-checkbox-group v-model="addForm.role">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <el-footer>
            <el-button-group>
              <el-button type="primary" @click="addUser('addForm')">添加</el-button>
              <el-button type="danger" @click="visible=false">返回</el-button>
            </el-button-group>
          </el-footer>
        </el-drawer>

      </el-container>
    </el-container>
    <el-table
        :data="tableData"
        stripe
        border>
      <el-table-column
          label="姓名"
          header-align="center"
          align-="center"
          :resizable="true">
      </el-table-column>
      <el-table-column
          header-align="center"
          align-="center"
          label="手机号"
          :resizable="true">
      </el-table-column>
      <el-table-column
          header-align="center"
          align-="center"
          label="邮箱"
          :resizable="true">
      </el-table-column>
      <el-table-column
          header-align="center"
          align-="center"
          label="创建时间"
          :resizable="true">
      </el-table-column>
      <el-table-column
          header-align="center"
          align-="center"
          width="100px"
          label="是否锁定"
          :resizable="true">
        <template>
          <el-switch></el-switch>
        </template>
      </el-table-column>
      <el-table-column
          header-align="center"
          sortable
          label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {

    var pwd1 = (rule, value, callback) => {
      let passReg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
      if (!passReg.test(value)) {
        return callback(new Error("密码格式不正确"))
      }
      callback();
    }
    var pwd2 = (rule, value, callback) => {
      let passReg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
      if (!passReg.test(value)) {
        return callback(new Error("密码格式不正确"))
      }
      if (this.addForm.password !== value) {
        return callback(new Error("两次密码输入不同"))
      }
      callback();
    }
    return {
      tableData: [{}],
      searchForm: {
        realName: '',
        phone: '',
        email: ''
      },
      addForm: {
        username: '',
        realName: '',
        phone: '',
        email: '',
        password: '',
        repeatPass: '',
        role: []
      },
      rules: {
        username: [
          {trigger: 'blur', required: true, message: '请输入用户名'},
          {trigger: 'blur', max: 16, min: 5, message: '长度请在5到16位'},
          {trigger: 'blur', pattern: '[a-zA-Z]+[a-z,A-Z,0-9]*', message: '用户名应该为字母开头'}
        ],
        realName: [
          {trigger: 'blur', required: true, message: '请输入用户名'}
        ],
        phone: [
          {trigger: 'change', required: true, message: '手机号必填'},
          {trigger: 'blur', pattern: '^1[3456789]\\d{9}$', message: '手机号格式不正确!'}
        ],
        email: [
          {trigger: 'blur', message: '邮箱格式不正确', pattern: ''}
        ],
        password: [
          {trigger: 'blur', validator: pwd1}
        ],
        repeatPass: [
          {validator: pwd2, trigger: 'blur'}
        ]
      },
      visible: false
    };
  },
  mounted() {
  },
  methods: {
    addUser: function (formName) {
      console.log(".....")
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          alert("123")
        } else {
          this.axios.post('/user/sys-user/insert', this.addForm).then(function (result) {
            console.log(result)
          })
        }
      })


    }
  }
};
</script>
<style scoped>
.el-footer {
  /*display: flex;*/
  /*justify-content: flex-end;*/
  position: absolute;
  bottom: 0;
  right: 0;
}

.el-drawer__body > .el-form {
  width: 30vw;
  padding-left: 2vw;
}
</style>