<template>
  <div class="box">
    <div class="top">
      <div class="topicon">
        <i class="fa fa-angle-up"></i>
      </div>
      <div class="topbtn">
        <button>Connect with facebook copy</button>
      </div>
    </div>
    <div class="login">
      <form>
        <div class="email">
          <label for="Email">用户名</label>
          <input type="email" v-model="userName">
        </div>
        <div class="paswd">
          <label for="Password">密码</label>
          <input type="password" v-model="passWord">
        </div>
        <div class="paswd">
          <label for="Password">确定密码</label>
          <input type="password" v-model="confirmWord">
        </div>
      </form>
      <button class="sub" v-on:click="regist()">Regist In</button>
    </div>
  </div>
</template>

<script>
import {registUser} from './store/api';
  export default {
    name: 'login',
    data() {
      return {
        userName: '',
        passWord: '',
        confirmWord:''
      }
    },
    methods: { 
      regist:function() { 
        let self = this;
        if(!self.checkString(self.userName)){
            self.$message({
            showClose: true,
            message: '用户名不能为空',
            type: 'warning'
            });
            return;
        }
        if(!self.checkString(self.passWord)){
            self.$message({
            showClose: true,
            message: '密码不能为空',
            type: 'warning'
            });
            return;
        }
        if(!self.checkString(self.confirmWord)){
            self.$message({
            showClose: true,
            message: '确定密码不能为空',
            type: 'warning'
            });
            return;
        }
        if(self.passWord != self.confirmWord) {
            self.$message({
            showClose: true,
            message: '两次密码输入不一致',
            type: 'warning'
            });
            return;
        }


        let params = {
            userName:self.userName,
            passWord:self.passWord
        }
        console.log(params);
        registUser(params).then(res=>{
            if(res.data.code == '200') {
                self.$router.push({
                    name: 'Login'
                });
            }
        });
      },
      checkString:function(stringValue) {
          if(stringValue == null || '' == stringValue) {
              return false;
          }else{
              return true;
          }
      }
    }
  }
</script>

<style scoped>
  button {
    border: none;
    width: 100%;
    line-height: 4rem;
    color: #fff;
  }
  input {
    width: 90%;
    border: none;
    border-bottom: 1px solid #ebebeb;
    outline: none;
    padding: 0.5rem 0.5rem 1rem;
    color: #363636;
    font-size: 1.2rem;
    font-weight: 600;
  }
  label {
    display: block;
    color: #6f6f6f;
  }
  .top {
    border-bottom: 1px solid #ebebeb;
  }
  .topicon {
    text-align: center;
    font-size: 1.4rem;
    color: #aeaeae;
    line-height: 2.4rem;
  }
  .topbtn {
    padding: 1rem 1.5rem 2rem;
  }
  .topbtn > button {
    line-height: 4rem;
    text-transform: uppercase;
    border-radius: 3rem;
    text-align: center;
    background: linear-gradient(90deg, rgba(106, 64, 159, 1) 0, rgba(144, 30, 177, 1) 100%);
  }
  .title {
    text-align: center;
    color: #363636;
    padding: 2rem;
  }
  .title > span {
    display: inline-block;
    line-height: 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-bottom: 2px solid #363636;
  }
  form {
    padding: 1rem;
    overflow: hidden;
  }
  .email {
    margin-bottom: 1rem;
    position: relative;
  }
  .email > i {
    color: #b8b8b8;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  .paswd {
    margin-bottom: 2rem;
    position: relative;
  }
  .paswd > i {
    color: #b8b8b8;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
  .msg {
    color: #a1a1a1;
    line-height: 3rem;
    text-align: center;
  }
  .sub {
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    background-color: #fd4c9d;
  }
</style>
 