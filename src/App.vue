<template>
  <div v-if="loggedIn" id="navLogged">
    <p id="gruß">Willkommen {{name}}</p>
    <div id="menu">
    <router-link to="/converter">Converter</router-link> |
    <router-link to="/live">Live Data</router-link>
    </div>
    <input id="logOut" type="button" value="Logout" v-on:click="logout()">
  </div>
  <div v-else id="nav">
    
    <div id="menu">
    <router-link to="/converter">Converter</router-link> |
    <router-link to="/live">Live Data</router-link>
    </div>
   
  </div>

  <router-view/>
</template>
<script>

export default {
  name:'App',
  
  data(){
    return{
      loggedIn: localStorage.getItem("loggedIn"),
      name: localStorage.getItem("name")
    }
  },
  methods:{
    logout: function(){
      localStorage.clear()
      this.loggedIn = false
      this.$router.push("/login");
    }
  },
  mounted() {  
      console.log("HEYHEYHEY")
      this.loggedIn = localStorage.getItem("loggedIn") 
  },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100vh;

}

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

#nav {
  padding: 30px;
  background: rgb(31, 31, 31);
  border-bottom-style: solid;
}

#nav a {
  font-weight: bold;
  color: #fdfdfd;
  text-decoration: none;
}

#gruß{
  color: white;
}
#logOut{
  width: 100px;
  height: 30px;
  border-radius: 7px;
  font-size: 16px;
}

#logOut:hover{
  width: 100px;
  height: 30px;
  border-radius: 7px;
  font-size: 16px;
  background-color: #fdfdfd;
  cursor: pointer;
}

#navLogged a.router-link-exact-active {
  color: #42b983;
}

#navLogged a.router-link {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a.router-link {
  text-decoration: none;
}

body {
 
}

html {
    overflow: -moz-scrollbars-vertical; 
    overflow-y: scroll;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
