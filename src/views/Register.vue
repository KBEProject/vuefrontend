<template>
  <div id="register">
    <input
      class="registerInput"
      type="text"
      v-model="name"
      placeholder="Name"
      autocomplete="off"
    />
    <p id="nameNote" v-if="showNameNote">Please enter a name</p>
    <input
      class="registerInput"
      type="email"
      v-model="email"
      placeholder="Email"
      autocomplete="off"
    />
    <p id="emailNote" v-if="showEmailNote">No valid email</p>
    <input
      class="registerInput"
      type="password"
      v-model="password"
      placeholder="Password"
      autocomplete="off"
    />
    <p id="passNote" v-if="showPassNote">Minimum password size 5</p>
    <input
      class="registerInput"
      type="button"
      name="Register"
      value="Register"
      id="registerButton"
      v-on:click="handleRegister"
    />
  </div>

  <p id="toLogin" v-on:click="toLogin">Already have an Account ?</p>
</template>

<script>
import axios from "axios";
const userBaseURL = "http://localhost:8084/user";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      showPassNote: false,
      showEmailNote: false,
      showNameNote: false,
    };
  },
  methods: {
    toLogin: function () {
      this.$router.push("/login");
    },
    emailIsValid: function (email) {
      console.log("hello");

      return /\S+@\S+\.\S+/.test(email);
    },
    handleRegister: function () {
      if (this.name.length == 0) {
        this.showNameNote = true;

        if (!this.emailIsValid(this.email)) {
          this.showEmailNote = true;
        }
        if (this.password.length < 5) {
          this.showPassNote = true;
        }
        return;
      }
      if (!this.emailIsValid(this.email)) {
        this.showEmailNote = true;
      }

      if (this.password.length < 5) {
        this.showPassNote = true;
      }

      axios
        .post(userBaseURL + "/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(res => {
          this.$router.push("/login");
          console.log(res);
        })
        .catch(function (error) {
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
#register {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.registerInput {
  margin-top: 100px;
  width: 20vw;
  height: 33px;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  outline: none;
  background-color: white;
}

#registerButton {
  border-style: none;
  width: 110px;
  height: 30px;
  background-color: rgb(84, 178, 233);
  border-radius: 7px;
  border-style: solid;
}
#registerButton:hover {
  border-style: none;
  width: 110px;
  height: 30px;
  background-color: rgb(56, 172, 240);
  border-radius: 7px;
  border-style: solid;
  cursor: pointer;
}
#passNote {
  color: rgb(243, 26, 26);
  margin-right: 105px;
  margin-top: 7px;
}

#emailNote {
  color: rgb(243, 26, 26);
  margin-right: 190px;
  margin-top: 7px;
}
#nameNote {
  color: rgb(243, 26, 26);
  margin-right: 140px;
  margin-top: 7px;
}
#toLogin {
  color: rgb(63, 63, 63);
  cursor: pointer;
  margin-top: 50px;
}
#toLogin:hover {
  text-shadow: 1px 5px 5px 1px;
  box-shadow: 3px;
  color: black;
  cursor: pointer;
  margin-top: 50px;
}
</style>