import axios from 'axios'

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
    console.log("In the register method in the store.")
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
  state.user = res.data.data
  console.log("Res.data.data: ", res.data.data)
   }).catch(handleError)
    },

  createKeep() {
    console.log("In the createKeep method in the store.")

    //list elements of the keep. 
    let keepObject = {};

    let title = "Borg-Warner Trophy";
    let imgUrl = "https://en.wikipedia.org/wiki/Borg-Warner_Trophy#/media/File:Borg-Warner_Trophy_2008.jpg";
    let description = "A trophy.";
    let body = "The Borg-Warner Trophy is the trophy presented to the winner of the Indianapolis 500. It is named for and was commissioned by automotive supplier BorgWarner. It is permanently housed at the Indianapolis Motor Speedway Museum in Speedway, Indiana.";
    let publicKeep = true;

    keepObject.title = title;
    keepObject.imgUrl = imgUrl;
    keepObject.description = description;
    keepObject.body = body;
    keepObject.public = publicKeep;

  api.post('keeps', keepObject)   
  .then(res => {

  //ToDo: have to update the store after posting somehow. 
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
 
