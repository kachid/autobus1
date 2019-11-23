import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 676848237,
        owner: "Petr",
        performer: "Ivan",
        create: "2019-10-17T13:24:00",
        isDone: false,
        isCanceled: false,
        onPause: false,
        name: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
      },
      {
        id: 454567435,
        owner: "Petr",
        performer: "Maria",
        create: "2019-10-17T13:33:00",
        isDone: true,
        isCanceled: false,
        onPause: false,
        name: "Lorem pusum",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
      },
      {
        id: 456235725,
        owner: "Petr",
        performer: "Maria",
        create: "2019-10-18T15:34:00",
        isDone: true,
        isCanceled: true,
        onPause: false,
        name: "Ненужная задача",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
      },
      {
        id: 456235799,
        owner: "Ivan",
        performer: "Petr",
        create: "2019-10-17T14:27:00",
        isDone: true,
        isCanceled: false,
        onPause: true,
        name: "На паузе для Петра",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
      },
      {
        id: 456235687,
        owner: "Maria",
        performer: "Ivan",
        create: "2019-10-17T14:26:00",
        isDone: false,
        isCanceled: false,
        onPause: false,
        name: "Pusum delirium",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
      }
    ]
  },
  getters: {
    getAllTasks: state => state.tasks,
    getTasksByPerformer: state => performer => {
      return state.tasks.filter(task => task.performer === performer);
    },
    getTasksByOwner: state => owner => {
      return state.tasks.filter(task => task.owner === owner);
    },
    getTaskByID: state => id => {
      return state.tasks.find(task => task.id === id);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
