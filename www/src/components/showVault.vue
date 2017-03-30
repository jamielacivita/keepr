<template>
  <div class="keeps">
    <h1>Show Vault</h1>
    <!--<div> Debug:  {{myVault}} </div>-->
    <div class="card">
      <div class="cardOutline">
        <div class="card-block">
          <h4 class="card-title">{{myVault.name}}</h4>
          <p class="card-text">{{myVault.description}}</p>
          <p class="card-text">Debug: {{myVault._id}}</p>
          <ul>
            <li v-for="(item, index) in myVault.keeps">
              <img class="card-img-top" :src=item.imageUrl alt="Card image cap">
              <div>{{item.title}}</div>
              </li>
          </ul>
        </div>
        <button @click="deleteVault(myVault._id)">Delete This Vault</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'keeps',
    data() {
      return {
        showVaultCards: false,
        showAllVaultCards: false,
      }
    },
    methods:
    {
      deleteVault: function (id) {
        console.debug("In delete vault function with: ", id)
        this.$root.store.actions.deleteVault(id)
      }
    },
    mounted: function () {
      console.log("Hello World from show keep.")
      console.log("params.id: ", this.$route.params.id)
      this.$root.store.actions.flyerGetVault(this.$route.params.id)
    },
    computed: {
      myVault() {
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