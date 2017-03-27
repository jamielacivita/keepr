<template>
  <div class="readKeeps">
    <h1>Read Public Keeps Page</h1>

<!--<h3>{{$root.store.state.keeps}}</h3>-->
<ul id="example-2">
  <li v-for="(item, index) in $root.store.state.keeps">
    {{item.title}}
  </li>
</ul>
    
  </div>
</template>

<script>
export default {
  name: 'readKeeps',
  data () {
    return {

    }
  },
methods: 
{
  getKeeps()
  {
  this.$root.store.actions.getKeeps()
  }
},
mounted: function()
{
  console.log("hello world.")
  this.$root.store.actions.getKeeps()
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
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
