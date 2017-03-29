import axios from 'axios'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let base = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  loginMessage: 'No one is logged in! - JWTO',
  user: {},
  myVaults: {},
  myKeeps: {},
  //Dummy Data
  keeps: [{
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }],
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions:
  {
    register(register_object) {
      //console.debug("In the register method in the store.")
      base.post('register', register_object)
        .then(res => {
          //need to do some error checking for improper regristration. 
          //the next two lines are setting the active state in the local store.
          state.user = res.data.data
          console.log("Error Code: ", res.data.error.code)
          console.log("state.user: ", state.user)
        }).catch(handleError)
    },

    login(login_object) {
      //console.log("In the login method in the store.")

      base.post('login', login_object)  // <--- I believe this is a post to :3000/register with {body} 
        .then(res => {
          // //the next two lines are setting the active state in the local store.
          //console.debug(res)
          //Was the login successful?
          //console.debug("res.data.error", res.data.error)
          if (res.data.error == 'Invalid Email or Password') {
            //console.debug("unsuccessful login")
            //set improper login flag -- used to display message. 
            state.loginMessage = 'Invalid email or password.'
          }
          else {
            //console.debug("succesfully login.")
            state.user = res.data.data
            //console.log("Res.data.data: ", res.data.data)
            //send user to keeps page.
            router.push({ path: 'readKeeps' })
          }
        }).catch(handleError)
    },

    createKeep(obj_keep) {

      console.debug("In the createKeep method in the store with: ", obj_keep)
      api.post('keeps', obj_keep)
        .then(res => {
          //ToDo: Have to update the store after posting somehow.
          //ToDo: Have to indicate that the keep was successfully created.  
          console.log("Res: ", res)
        }).catch(handleError)
    },

    createVault(obj_vault) {

      //console.debug("In the createVault method in the store with: ", obj_vault)
      api.post('vaults', obj_vault)
        .then(res => {
          //ToDo: Have to update the store after posting somehow.
          //ToDo: Have to indicate that the keep was successfully created.  
          //console.log("Res: ", res)
        }).catch(handleError)
    },

    getKeeps() {
      //console.log("In the get Keeps method in the store.")
      api.get('keeps')
        .then(res => {
          //console.log("Res from Get Keeps: ", res.data.data)
          //console.log("Current state of store: ", state.keeps)
          //console.log("updating store state.")
          state.keeps = res.data.data;
          //console.log("New state of store: ", state.keeps)
        }).catch(handleError)
    },

    getVaults() {
      //console.log("In the get Vaults method in the store.")
      api.get('vaults')
        .then(res => {
          var arr_vaults = res.data.data;
          //console.log("arr_vaults:", arr_vaults)
          for (var i = 0; i < arr_vaults.length; i++)
          {
            var vault = arr_vaults[i];
            //console.log("vaultKeeps: ",vault.keeps)
          }
          state.vaults = res.data.data;
        }).catch(handleError)
    },

    setKeepToVault(keep_obj, vaultId) {
      // this function performs a put to add the keep Id to the vault.
      //console.log("In set keep to vault in the store.")
      //console.debug("4.) In setKeepToVault with keep Object of: ", keep_obj)
      //console.debug("5.) In setKeepToVault with vault Id of: ", vaultId)

      // First pull in the current vault object based on id.
      api.get('vaults/' + vaultId)
        .then(res => {
          //console.log("6.) before adding keepId: ", res.data.data);
          //isolate the keeps field.
          let keeps = res.data.data.keeps
          //console.log("7.) Keeps variable before adding keepId: ", keeps);
          //add the new keepId to the keeps array.
          res.data.data.keeps.push(keep_obj)
          //console.log("8.) Keeps variable after adding keepId: ", keeps);
          //Put the new array in the database. 

          let obj_keep = {} //create an object to create the keeps array.
          obj_keep.keeps = keeps
          //console.log("9.) Keeps field object after adding keepId: ", obj_keep);

          api.put('vaults/' + vaultId, obj_keep)
            .then(res => {
              //state.vaults = res.data.data;
            }).catch(handleError)
        }).catch(handleError)
    },
  }
}

