<template>
  <div class="vaults">
    <h1>My Vaults</h1>
    <!--<div> Debug: {{myvaults}} </div>-->

    <ul id="vaults" class="fb">
      <li v-for="(item, index) in userVaults($root.store.state.myVaults)">
        <div class="card">
          <div class="cardOutline">
            <div class="card-block">
              <h4 class="card-title">{{item.name}}</h4>
              <p class="card-text">{{item.description}}</p>
              <!--<p class="card-text">Debug: {{item._id}}</p>-->
              <ul>
                <li v-for="(item, index) in item.keeps">
                  <img class="card-img-top" :src=item.imageUrl width="300px" alt="Card image cap">
                  <div>{{item.title}}</div>
                </li>
              </ul>
                <router-link v-bind:to='"/vaults/"+item._id' class="btn btn-primary">Go To This Vault</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
      userVaults: function (arr_vaults) {
        this.out_array = arr_vaults.filter(element => {
          console.debug("element: ", element)
          console.debug("element user id: ", element.userId)
          console.debug("user id: ", this.$root.store.state.user._id)

          if (element.userId == this.$root.store.state.user._id) { return true }
          else { return false }
        })
        console.debug("out array: ", this.out_array)
        return this.out_array;
      },
    },
    mounted: function () {
      console.debug("Inside the vaults mounted function.")
      this.$root.store.actions.flyerGetVaults(this.$route.params.id)
    },
    computed: {
      myVaults() {
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
  
  /*a {
    color: #42b983;
  }*/
  
  .cardOutline {
    border: 1px solid black;
    padding: 15px;
    box-shadow: 5px 5px 5px grey;
  }
  
  .fb {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>