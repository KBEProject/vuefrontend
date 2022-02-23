<template>
  <div id="navLogged">
    <p id="gruß">Willkommen {{ name }}</p>
    <div id="menu">
      <router-link to="/converter">Converter</router-link> |
      <router-link to="/live">Live Data</router-link>
    </div>
    <input id="logOut" type="button" value="Logout" v-on:click="logout()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
    };
  },

  methods: {
    logout: function () {
      localStorage.clear();
      this.loggedIn = false;
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#navLogged {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 30px;
  background: rgb(31, 31, 31);
  border-bottom-style: solid;
}

#navLogged a {
  font-weight: bold;
  color: #fdfdfd;
  text-decoration: none;
}

#navLogged a.router-link-exact-active {
  color: #42b983;
}

#navLogged a.router-link {
  text-decoration: none;
}
</style>