<template>
  <div id="loginDiv">
    <input
      class="loginInput"
      type="email"
      name="Email"
      id="email"
      placeholder="Email"
      autocomplete="off"
      v-model="email"
    />

    <input
      class="loginInput"
      type="password"
      name="Password"
      id="password"
      placeholder="Password"
      autocomplete="off"
      v-model="password"
    />

    <input
      class="loginInput"
      type="button"
      name="Login"
      value="Login"
      id="loginButton"
      v-on:click="handleLogin"
    />
  </div>
  <p id="toRegister" v-on:click="toRegister">Don't have an Account ?</p>
</template>

<script>
import axios from "axios";

const userBaseURL = "http://localhost:8081/user";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    toRegister: function () {
      this.$router.push("/register");
    },

    handleLogin: function () {
      axios
        .get(userBaseURL + "/login", {
          params: { email: this.email, password: this.password },
        })
        .then(res => {
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("loggedIn", true);
          this.loggedIn = true
          this.$router.push("/converter");
  
          console.log(res);
        }).catch(function(error){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return;
        });
  
    },
  },
};
</script>

<style>
#loginDiv {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
}

.loginInput {
  margin-top: 100px;
  width: 20vw;
  height: 33px;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  outline: none;
  background-color: white;
}
.loginInput:focus {
  margin-top: 100px;
  width: 20vw;
  height: 33px;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  outline: none;
  background-color: white;
  border-bottom-style: groove;
}

.loginInput::placeholder {
  transition: color 0.3s ease;
}
.loginInput:focus::placeholder {
  color: transparent;
}

#loginButton {
  border-style: none;
  width: 110px;
  height: 30px;
  background-color: rgb(84, 178, 233);
  border-radius: 7px;
  border-style: solid;
  cursor: pointer;
}
#loginButton:hover {
  border-style: none;
  width: 110px;
  height: 30px;
  background-color: rgb(56, 172, 240);
  border-radius: 7px;
  border-style: solid;
  cursor: pointer;
}
#toRegister {
  color: rgb(63, 63, 63);
  cursor: pointer;
  margin-top: 50px;
}
#toRegister:hover {
  text-shadow: 1px 5px 5px 1px;
  box-shadow: 3px;
  color: black;
  cursor: pointer;
  margin-top: 50px;
}
</style>