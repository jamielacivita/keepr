<template>
  <div class="login">
    <h1>debug: login Page</h1>
    <h1>{{$root.store.state.loginMessage}}</h1>

    <!--<form>
      email: <input v-model="email" placeholder="e-mail"><br> password: <input v-model="password" placeholder="password"><br>
      <button type="submit" name="action" @click.prevent="login()">Submit</button>
    </form>-->


    <div class="tab-content">
      <div id="home" class="tab-pane fade in active">
        <form>
          <input class="inputField" v-model="email" placeholder="  e-mail"><br>
          <input class="inputField" v-model="password" placeholder="  password"><br>
          <button type="submit" name="action" @click.prevent="login()">Submit</button>
        </form>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: 'sunfish'
      }
    },
    methods:
    {
      login() {
        console.debug("inside the login method.")

        let login_object = {}
        login_object.email = this.email;
        login_object.password = this.password;

        console.debug(login_object)

        this.$root.store.actions.login(login_object)
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