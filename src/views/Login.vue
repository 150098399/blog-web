<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      class="login-form"
      label-width="80px"
      :rules="rules"
      ref="loginFormRef"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="login-btn" style="text-align: center">
        <el-button type="primary" @click="handleSubmit" style="width: 300px"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import hyRequest from '../request';

interface LoginForm {
  username: string;
  password: string;
}

const loginForm: Ref<LoginForm> = ref({
  username: '',
  password: '',
});

const loginFormRef: Ref<ElForm | null> = ref(null);

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

const login = () => {
  return hyRequest.post({
    url: '/users/login',
    data: loginForm.value,
  });
};

const handleSubmit = () => {
  loginFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      // 在这里处理登录逻辑，loginForm 中包含用户名和密码
      console.log('登录表单数据:', loginForm.value);
      // 假设登录成功后的操作
      // 比如跳转页面或发起登录请求等
      login().then((res) => {
        console.log(res);
      });
    } else {
      return false;
    }
  });
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 300px;
  margin-bottom: 20px;
}

.login-btn {
  width: 100%; /* 使按钮占满整个容器宽度 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 按钮上方间距 */
}
</style>
