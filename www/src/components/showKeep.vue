<template>
  <div class="keeps">
    <h1>Show Keep</h1>
    <div> {{myKeeps}} </div>

    <ul id="publicKeeps" class="fb">
      <!--<div class="card" style="width: 320px">-->
      <div class="card" style="">
        <div class="cardOutline">
          <img class="card-img-top" :src=myKeeps.imageUrl width="90%" alt="Card image cap">
          <!--<img class="card-img-top" :src=myKeeps.imageUrl width="300px" alt="Card image cap">-->
          <div class="card-block">
            <h4 class="card-title">{{myKeeps.title}}</h4>
            <p class="card-text">{{myKeeps.tags}}</p>
            <a v-on:click="openVaults(item)" class="btn btn-primary">Vault Me.</a>
          </div>
        </div>
      </div>
    </ul>

    <h1> Show users vaults here </h1>
    <!--<h3>{{$root.store.state.myVaults}}</h3>-->

<!--<h1>debugstuff</h1>
{{$root.store.state.user._id}}
{{$root.store.state.myVaults}}
<h1>debugstuff</h1>-->

    <div v-if="showVaultCards">
      <ul id="publicVaults" class="fb">
        <li v-for="(item, index) in userVaults($root.store.state.myVaults)">
          <div class="card" style="width: 320px">
            <div class="cardOutline">
              <!--<img class="card-img-top" :src=item.imageUrl width="300px" alt="Card image cap">-->
              <div class="card-block">
                <h4 class="card-title">{{item.name}}</h4>
                <p class="card-text">{{item.description}}</p>
                <p class="card-text">User Id: {{item.userId}}</p>
                <!--<a class="btn btn-primary"><router-link v-bind:to=item._id>Send To Here</router-link></a>-->
                <a v-on:click="sendToKeep(myKeeps,item._id)" class="btn btn-primary">Vault Me.</a>
                <!--<router-link to="58dadb81330fa500c49ad41e">RouterLinkButton</router-link>-->
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

<!--<div v-for="(job,i) in fourStroke(activeJobs)" draggable="true" @dragstart.capture="drag(job)">-->

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
      sendToKeep: function (keep_obj, vaultId) {
        console.debug("In sendToKeep with keep object", keep_obj)
        console.debug("In sendToKeep with vaultId", vaultId)
        this.$root.store.actions.setKeepToVault(keep_obj, vaultId)
      },





      userVaults: function(arr_vaults) {
        this.out_array = arr_vaults.filter(element => {
          console.debug("element: ", element)
          console.debug("element user id: ", element.userId)
          console.debug("user id: ", this.$root.store.state.user._id)

          if (element.userId == this.$root.store.state.user._id) { return true }
          else { return false }
        })
        console.debug("out array: ",this.out_array)
        return this.out_array;
      
    
  
},
      openVaults: function () {
        console.debug("In open vaults function.")
        this.showVaultCards = !this.showVaultCards;
      }
    },
    mounted: function () {
      console.log("Hello World from show keep.")
      console.log("params.id: ", this.$route.params.id)
      this.$root.store.actions.flyerGetKeep(this.$route.params.id)
      this.$root.store.actions.getVaults()
    },
    computed: {
      myKeeps() {
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