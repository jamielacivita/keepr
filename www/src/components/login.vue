<template>
  <div class="login">

    <h1>Hello</h1>
    <!--<h1>Hello : {{$root.store.state.loginMessage}}</h1>-->


        <form>
          <input class="inputField" v-model="email" placeholder="  e-mail"><br>
          <input class="inputField" v-model="password" placeholder="  password"><br>
          <button class="btn btn-primary button" type="submit" name="action" @click.prevent="login()">Submit</button>
        </form>

    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        // email: '',
        // password: ''
        email: '',
        password: 'sunfish'
        // email: 'JCLacivita@gmail.com',
        // password: 'sunfish'
      }
    },
    methods:
    {
      login() {
        let login_object = {}
        login_object.email = this.email;
        login_object.password = this.password;

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