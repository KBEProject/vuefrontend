<template>
  <div id="nav">
    <div id="menu">
      <router-link to="/converter">Converter</router-link> |
      <router-link to="/live">Live Data</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
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

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a.router-link {
  text-decoration: none;
}
</style>