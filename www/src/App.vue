<template>
  <div id="app">
    <!--<h3>{{$root.store.state.user.email}}</h3>-->
    <img src="./assets/logo.jpg">

    <!--<router-link v-bind:to="'CreateKeep'">CreateKeep</router-link>
    <router-link v-bind:to="'ReadKeeps'">ReadKeep</router-link>
    <router-link v-bind:to="'CreateVault'">CreateVault</router-link>
    <router-link v-bind:to="'ReadVaults'">ReadVaults</router-link>
    <router-link v-bind:to="'readVault'">ReadVault</router-link>-->

    <!--<div v-if="!$root.$data.store.state.user.email">-->
      <h4>User Object: {{$root.store.state.user}}</h4>

<router-link to="/keeps">Go To Keeps</router-link>
<router-link to="/keeps/new">Make New Keep</router-link>
<router-link to="/vaults">Go To Vaults</router-link>
<router-link to="/vaults/new">Make New Vault</router-link>



      <!--<ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#home" class="tab_class">Login</a></li>
        <li><a data-toggle="tab" href="#menu1" class="tab_class">Register</a></li>
        <li><a data-toggle="tab" href="#menu2" class="tab_class">Just Visiting</a></li>
      </ul>-->

      <!--<div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <form>

            <input class="inputField" v-model="email" placeholder="  e-mail"><br>
            <input class="inputField" v-model="password" placeholder="  password"><br>
            <button type="submit" name="action" @click.prevent="login()">Submit</button>
          </form>
        </div>



        <div id="menu1" class="tab-pane fade">
          <form>
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

    </div>-->




    <!--<div v-if="showLogin">
      <form>

        jclacivita@gmail.com: <input v-model="email" placeholder="e-mail"><br> sunfish: <input v-model="password" placeholder="password"><br>
        <button type="submit" name="action" @click.prevent="login()">Submit</button>
      </form>
    </div>-->

    <!--<div v-if="!showLogin">

    </div>-->

    <router-view></router-view>
  </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showLogin: false,
        name: '',
        //hardcoded name and password.
        email: 'JCLacivita@gmail.com',
        password: 'sunfish'
      }
    },
    methods:
    {
      login() {
        //console.debug("inside the login method.")

        let login_object = {}
        login_object.email = this.email;
        login_object.password = this.password;
        this.$root.store.actions.login(login_object)
      },

      register() {
        //console.debug("inside the register method.")

        let register_object = {}
        register_object.name = this.name;
        register_object.email = this.email;
        register_object.password = this.password;

        this.$root.store.actions.register(register_object)
      },
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .frame {
    margin: auto;
    width: 33%;
  }
  
  .inputField {
    margin-top: 15px;
    width: 100%;
    font-size: 40px;
  }
  
  .tab_class {
    color: black;
    font-size: 20px;
    background-color: rgba(254, 0, 149, .25);
  }
</style>