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
  loginMessage: 'Please Login.',
  user: {},
  myVaults: {},
  myKeeps: {},
  currentVaultId: '',
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
        }).catch(handleError)
      router.push({ path: 'keeps/' })
    },

    login(login_object) {
      base.post('login', login_object)
        .then(res => {
          if (res.data.message == 'Invalid Email or Password') {
            state.loginMessage = 'Invalid email or password.'
          }
          else {
            state.user = res.data.data
            router.push({ path: 'keeps/' })
          }
        }).catch(handleError)
    },

    createKeep(obj_keep) {
      api.post('keeps', obj_keep)
        .then(res => {
          state.keeps = res.data.data;
        }).catch(handleError)
       router.push({ path: '/keeps/' })
    },

    createVault(obj_vault) {
      api.post('vaults', obj_vault)
        .then(res => {
        }).catch(handleError)
      // router.push({ path: '/vaults/' })
    },

    getKeeps() {
      api.get('keeps')
        .then(res => {
          state.keeps = res.data.data;
        }).catch(handleError)
    },

    getVaults() {
      api.get('vaults')
        .then(res => {
          state.myVaults = res.data.data;
        }).catch(handleError)
    },

    setKeepToVault(keep_obj, vaultId) {
      api.get('vaults/' + vaultId)
        .then(res => {
          let keeps = res.data.data.keeps
          res.data.data.keeps.push(keep_obj)
          let obj_keep = {}
          obj_keep.keeps = keeps
          api.put('vaults/' + vaultId, obj_keep)
            .then(res => {
            }).catch(handleError)
        }).catch(handleError)
    },

    sendToCurrentVault() {
      console.debug("In send to CurrentVault in store.")
      router.push({ name: 'readVault' })
    },

    flyerGetKeeps(id) {
      console.debug("In Flyer Get Keeps with: ", id)
      api.get('keeps/')
        .then(res => {
          console.debug("data returned: ", res)
          state.myKeeps = res.data.data;
        }).catch(handleError)
    },

    flyerGetKeep(id) {
      console.debug("In Flyer Get Keep with: ", id)
      api.get('keeps/' + id)
        .then(res => {
          console.debug("data returned: ", res)
          state.myKeeps = res.data.data;
        }).catch(handleError)
    },

    flyerGetVaults(id) {
      console.debug("In Flyer Get Valuts with: ", id)
      api.get('vaults/')
        .then(res => {
          console.debug("data returned: ", res)
          state.myVaults = res.data.data;
        }).catch(handleError)
    },

    flyerGetVault(id) {
      console.debug("In Flyer Get Valut with: ", id)
      api.get('vaults/' + id)
        .then(res => {
          console.debug("data returned: ", res)
          state.myVaults = res.data.data;
        }).catch(handleError)
    },

    deleteVault(id) {
      console.debug("In store delete vault method with: ", id)
      api.delete('vaults/' + id)
        .then(res => {
          console.debug("data returned: ", res)
          state.myVaults = res.data.data;
          router.push({ path: '/vaults/' })
        }).catch(handleError)
    },
  }
}

