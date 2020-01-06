import Vue from 'vue'
import Vuex from 'vuex'

import { users, tasks, auth } from '@/mock/data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth,
    users,
    tasks,
  },

  getters: {
    currentUser: state => state.users.find(user => user.id === state.auth.id)
  }
})
