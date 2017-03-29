<template>
  <div class="keeps">
      <h1>Keeps</h1>
      <div> {{myKeeps}} </div>
  </div>
</template>

<script>
  export default {
    name: 'keeps',
    data() {
      return {
        showKeepList: false,
      }
    },
    methods:
    {
    },
    mounted: function () {
      console.log("Hello World.")
    this.$root.store.actions.flyerGetKeeps(this.$route.params.id)
  },
  computed:{
    myKeeps(){
      return this.$root.store.state.myKeeps
    }
  }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
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
  
  .cardOutline {
    border: 1px solid black;
    padding: 15px;
    box-shadow: 5px 5px 5px grey;
  }
  
  .fb {
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    flex-wrap: wrap;
  }
</style>