<template>
  <div class="vaults">
      <h1>vaults</h1>
      <div> {{myvaults}} </div>
  </div>
</template>

<script>
  export default {
    name: 'vaults',
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
    this.$root.store.actions.flyerGetVaults(this.$route.params.id)
  },
  computed:{
    myvaults(){
      return this.$root.store.state.myVaults
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