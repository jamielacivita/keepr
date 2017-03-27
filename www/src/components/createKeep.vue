<template>
  <div class="createKeep">
    <h1>Create Keep Page</h1>
    <button @click.prevent="createKeep()">Test Make Keep Func.</button>

        <button @click.prevent="getKeeps()">Test Get Keeps</button>


  </div>
</template>

<script>
export default {
  name: 'createKeep',
  data () {
    return {

    }
  },
methods: 
{
  createKeep()
  {
  console.debug("inside the create Keep method.")
  this.$root.store.actions.createKeep()
},

  getKeeps()
  {
  //console.debug("inside the get Keeps method.")
  this.$root.store.actions.getKeeps()
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
