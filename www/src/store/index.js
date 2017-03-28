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
  loginMessage : 'No one is logged in! - JWTO', 
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
    console.debug("In the register method in the store.")
  base.post('register', register_object)   
  .then(res => {
  //need to do some error checking for improper regristration. 
  //the next two lines are setting the active state in the local store.
  state.user = res.data.data
  console.log("Error Code: ",res.data.error.code)
  console.log("state.user: ", state.user)
   }).catch(handleError)
    },

  login(login_object) {
    console.log("In the login method in the store.")

  base.post('login', login_object)  // <--- I believe this is a post to :3000/register with {body} 
  .then(res => {
  // //the next two lines are setting the active state in the local store.
  console.debug(res)
  //Was the login successful?
  console.debug("res.data.error", res.data.error)
  if (res.data.error == 'Invalid Email or Password')
  {
  console.debug("unsuccessful login")
    //set improper login flag -- used to display message. 
    state.loginMessage = 'Invalid email or password.'
  }
  else
  {
  console.debug("succesfully login.")
  state.user = res.data.data
  console.log("Res.data.data: ", res.data.data)
  //send user to keeps page.
  router.push({ path: 'readKeeps' })
  }
   }).catch(handleError)
    },

  createKeep(obj_keep) {
<<<<<<< HEAD
  console.debug("In the createKeep method in the store with: ", obj_keep)
  let op="huh";
=======
    console.log("In the createKeep method in the store.")
>>>>>>> day2
  api.post('keeps', obj_keep)   
  .then(res => {
  //ToDo: Have to update the store after posting somehow.
  //ToDo: Have to indicate that the keep was successfully created.  
  console.log("Res: ",res)
   }).catch(handleError)
    },

  getKeeps() {
  console.log("In the get Keeps method in the store.")
  api.get('keeps')   
  .then(res => {
  console.log("Res from Get Keeps: ", res.data.data)
  console.log("Current state of store: ", state.keeps)
  console.log("updating store state.")
  state.keeps = res.data.data;
  console.log("New state of store: ", state.keeps)
   }).catch(handleError)
    },
  }
}
 
