const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  keep: {
    name: 'Keep',
    endpoint: 'keeps',
    preventDefaultApi: false,  //this is what I changed to get access to public keep stuff. 
    useCustomRoutes: true
  },
  vault: {
    name: 'Vault',
    endpoint: 'vaults',
    preventDefaultApi: false,  //this is what I changed to get access to public keep stuff. 
    useCustomRoutes: true
  }

}


export  {
  actions,
  models
}