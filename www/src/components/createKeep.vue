<template>
  <div class="createKeep">
    <h1>Create Keep Page</h1>
    <!--<button @click.prevent="createKeep()">Test Make Keep Func.</button>-->
    <!--<button @click.prevent="getKeeps()">Test Get Keeps</button>-->

<div class="frame">

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <form>
      <!-- Form Fields for Createing Keeps -->
      <input class="inputField" v-model="title" placeholder="  Title"><br> 
      <input class="inputField" v-model="imageUrl" placeholder="  Image URL (Optional)"><br>
      <input class="inputField" v-model="articleLink" placeholder="  Article Link"><br>
      <input class="inputField" v-model="tags" placeholder="  Tags"><br>
      <button type="submit" name="action" @click.prevent="createKeep()">Submit</button>
    </form>
  </div>


  <div id="menu1" class="tab-pane fade">
    <form>
      <!--name: <input v-model="name" placeholder="name"><br> -->
      <h3> Vault Creation form goes here </h3>
      </form>

<div class="tab-content">
  <div id="home" class="tab-pane fade in active">
    <form>
      <!--name: <input v-model="name" placeholder="name"><br> -->
      <input class="inputField" v-model="title" placeholder="  title"><br> 
      <input class="inputField" v-model="imageUrl" placeholder="  image Url"><br>
      <input class="inputField" v-model="articleLink" placeholder="  articleLink"><br>
      <input class="inputField" v-model="tags" placeholder="  tags"><br>

      <button type="submit" name="action" @click.prevent="createKeep()">Submit</button>
    </form>
  </div>
  <div id="menu1" class="tab-pane fade">
    <form>
      <!--name: <input v-model="name" placeholder="name"><br> -->
      <input class="inputField" v-model="name" placeholder="  name"><br> 
      <input class="inputField" v-model="email" placeholder="  e-mail"><br> 
      <input class="inputField" v-model="password" placeholder="  password"><br>
      <button type="submit" name="action" @click.prevent="register()">Submit</button>
    </form>


<!--junk ends here-->



  </div>
</template>

<script>
export default {
  name: 'createKeep',
  data () {
    return {
      title: '',
      imageUrl: '',
      articleLink: '',

      tags: '',

    }
  },
methods: 
{
  createKeep()
  {


  console.debug("inside the create Keep method on the local page.")

let obj_keep = {}
obj_keep.title = this.title;
obj_keep.imageUrl = this.imageUrl;
obj_keep.articleLink = this.articleLink;
obj_keep.tags = this.tags;
obj_keep.userId = "58dabd3c344e520d18cbfa3f";  //todo remove hardcoding.

this.$root.store.actions.createKeep(obj_keep)
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
