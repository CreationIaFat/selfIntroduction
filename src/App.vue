<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/aiueo">aiueo</router-link> |
      <router-link to="/selfIntroduction">self-introduction</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
  background-color: black;

  a {
    font-weight: bold;
    color: #c5c909;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
