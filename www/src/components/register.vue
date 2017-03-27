<template>
  <div class="register">
    <h1>Register Page</h1>
    <button @click.prevent="register()">Test Reg Func.</button>


  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {

    }
  },
methods: 
{
  register()
  {
  console.debug("inside the register method.")
  this.$root.store.actions.register()
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
