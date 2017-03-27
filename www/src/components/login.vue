<template>
  <div class="login">
    <h1>login Page</h1>
        <button @click.prevent="login()">Test Login Func.</button>

  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods: 
{
  login()
  {
  console.debug("inside the login method.")
  this.$root.store.actions.login()
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
