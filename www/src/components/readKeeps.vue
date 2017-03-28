<template>
  <div class="readKeeps">
    <h1>Read Public Keeps Page</h1>

<!--<h3>{{$root.store.state.keeps}}</h3>-->

<ul id="example-2" class = "fb">
<li v-for="(item, index) in $root.store.state.keeps">
<div class="card" style="width: 320px">
<div class="cardOutline">
  <img class="card-img-top" :src=item.imageUrl width="300px" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">{{item.title}}</h4>
    <p class="card-text">{{item.tags}}</p>
    <!--<a href="#" class="btn btn-primary">Keep</a>-->
    <a href="#" class="btn btn-primary">SomeThing</a>
    <!--<a href="#" class="btn btn-primary">Else</a>-->
  </div>
</div>
</div>
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

.cardOutline {border: 1px solid black;
padding: 15px; 
box-shadow: 5px 5px 5px grey;
}

.fb {display:flex; flex-direction: row; border: 1px solid red; flex-wrap: wrap;}

</style>
