<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div id="nav">
      <router-link to="/"><img src="./assets/logo.png" alt=""/></router-link>
      <router-link to="/all">All</router-link>
      <router-link to="/animals">Animals</router-link>
      <router-link to="/films">Films</router-link>
      <router-link to="/food-and-drink">Food&Drink</router-link>
      <router-link to="/nature">Nature</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
