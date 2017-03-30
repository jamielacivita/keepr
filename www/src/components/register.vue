<template>
  <div class="register">
    <h1>Register Page</h1>
    <!--<button @click.prevent="register()">Test Reg Func.</button>-->

    <!--<form>
      name: <input v-model="name" placeholder="name"><br> 
      email: <input v-model="email" placeholder="e-mail"><br> 
      password: <input v-model="password" placeholder="password"><br>
      <button type="submit" name="action" @click.prevent="register()">Submit</button>
    </form>-->


    <div class="tab-content">
      <div id="home" class="tab-pane fade in active">
        <form>
          <input class="inputField" v-model="name" placeholder="  name"><br>
          <input class="inputField" v-model="email" placeholder="  e-mail"><br>
          <input class="inputField" v-model="password" placeholder="  password"><br>
          <button type="submit" name="action" @click.prevent="register()">Submit</button>
        </form>
      </div>
      </div>


  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        name: '',
        email: '',
        password : ''
      }
    },
    methods:
    {
      register() {
        console.debug("inside the register method.")
        let register_object = {}
        register_object.name = this.name;
        register_object.email = this.email;
        register_object.password = this.password;
        console.debug("registerObject: ", register_object)

        this.$root.store.actions.register(register_object)
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
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>