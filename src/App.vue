<template>
  <div id="nav">
    <router-link to="/">Converter</router-link> |
    <router-link to="/about">Live Data</router-link>
  </div>
  <router-view/>
</template>
<script>
export default {
  name:'App',
  
  data(){

  },
  methods:{
    
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

}

#nav {
  padding: 30px;

  border-bottom-style: solid;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
