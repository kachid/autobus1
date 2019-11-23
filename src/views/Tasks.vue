<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Задачи</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs v-model="tab" centered fixed-tabs>
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            v-for="(groupName, i) in tasksGroupName"
            :key="i"
            @mouseover="showBadge = true"
            @mouseout="showBadge = false"
          >
            <v-badge
              color="primary"
              v-model="showBadge"
            >
              <span slot="badge">{{tasksGroupLength[i]}}</span>
              {{ groupName }}
            </v-badge>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(groupName, i) in tasksGroupName" :key="i">
        <v-card>
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="6">
                <v-select
                  v-model="selectedFilter"
                  :items="tasksFilterName"
                  :menu-props="{ 'open-on-hover': true, offsetY:true }"
                  label="Фильтр задач"
                  filled
                  hide-selected
                >
                </v-select>
                <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Задача</th>
                          <th class="text-left">Исполнитель</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="task in tasksFiltered" :key="task.id" @click="goTo(task)">
                            <td>{{ task.name }}</td>
                            <td>{{ task.performer }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'tasks',
  data: () => ({
    person: "Petr",
    tab: null,
    showBadge: false,
    tasksGroupName: ["Все задачи", "Мои задачи", "Задачи от меня"],
    tasksFilterName: ["все", "не выполнены", "закрытые", "- за ненадобностью", "- на паузе"],
    selectedFilter: "",
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
  }),

  computed: {
    myTasks() {
      return this.tasks.filter(task => task.performer === this.person);
    },
    fromMeTasks() {
      return this.tasks.filter(task => task.owner === this.person);
    },
    tasksGroup() {
      let result;

      if (this.tab === 0) {
        result = this.tasks;
      } else if (this.tab === 1) {
        result = this.myTasks;
      } else {
        result = this.fromMeTasks;
      }

      return result;
    },
    tasksGroupLength() {
      return [
          this.tasks.length,
          this.myTasks.length,
          this.fromMeTasks.length
        ];
    },
    completedTasks() {
      return this.tasksGroup.filter(task => task.isDone);
    },
    notCompletedTasks() {
      return this.tasksGroup.filter(task => !task.isDone);
    },
    canceledTasks() {
      return this.tasksGroup.filter(task => task.isCanceled);
    },
    pausedTasks() {
      return this.tasksGroup.filter(task => task.onPause);
    },
    tasksFiltered() {
      let filter = this.tasksFilterName;

      switch (this.selectedFilter) {
        case filter[0]:
          return this.tasksGroup;
          break;
        case filter[1]:
          return this.notCompletedTasks;
          break;
        case filter[2]:
          return this.completedTasks;
          break;
        case filter[3]:
          return this.canceledTasks;
          break;
        case filter[4]:
          return this.pausedTasks;
          break;
        default:
          return this.tasksGroup;
      }
    }
  },
  watch: {
    tab() {
      this.selectedFilter = "";
    }
  },
  methods: {
    goTo(obj) {
      this.$router.push({
        name: 'task',
        params: {
          id: obj.id,
          task: obj
        }
      });
    }
  }
}
</script>
