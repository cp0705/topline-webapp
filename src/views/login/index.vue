<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable label="手机" placeholder="请输入手机号" />

      <van-field v-model="user.code" type="password" label="验证码" placeholder="请输入验证码" required />
    </van-cell-group>

    <div class="login-btn">
      <van-button type="info" @click="onlogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18715653826',
        code: '246810'
      }
    }
  },
  methods: {
    async onlogin () {
      try {
        const { data } = await request({
          method: 'POST',
          url: '/app/v1_0/authorizations',
          data: this.user
        })
        console.log(data)
        this.$toast.success('登录成功')
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  .login-btn {
    padding: 20px;
    .van-button {
      width: 100%;
    }
  }
}
</style>
