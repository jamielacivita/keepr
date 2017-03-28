<template>
  <div class="createKeep">
    <h1>Create Keep Page</h1>
    <button @click.prevent="createKeep()">Test Make Keep Func.</button>

        <button @click.prevent="getKeeps()">Test Get Keeps</button>

<!--junk start here-->

<div class="frame">

<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home" class="tab_class">Create Keep</a></li>
  <li><a data-toggle="tab" href="#menu1" class="tab_class">Create Vault</a></li>
  <!--<li><a data-toggle="tab" href="#menu2" class="tab_class">Just Visiting</a></li>-->
</ul>

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
  </div>
  <div id="menu2" class="tab-pane fade">
    <button>Its true, I'm just visting here.</button>
  </div>
</div>

</div> <!--end of frame-->

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
      tags: ''
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
