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
              <a v-on:click="storeKeep(item)" class="btn btn-primary">Vault Me.</a>
            </div>
          </div>
        </div>
    </ul>

<h1> Show users keeps here </h1>



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
      console.log("Hello World from show keep.")
      console.log("params.id: ", this.$route.params.id)
      this.$root.store.actions.flyerGetKeep(this.$route.params.id)
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