<template>
  <div id="app">
    <h3>{{$root.store.state.user.email}}</h3>
    <div v-if="!$root.store.state.user.email">
      <h1>No one is logged in!</h1>
    </div>
    <img src="./assets/logo.jpg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
