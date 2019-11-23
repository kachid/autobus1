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
                  :menu-props="{ 'open-on-hover': true, 'open-delay': 500, offsetY:true }"
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
                        <tr v-for="task in tasksFiltered" :key="task.id" class="pointer" @click="goTo(task.id)">
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
import { mapGetters } from "vuex";

export default {
  name: 'tasks',
  data: () => ({
    person: "Petr",
    tab: null,
    showBadge: false,
    tasksGroupName: ["Все задачи", "Мои задачи", "Задачи от меня"],
    tasksFilterName: ["все", "не выполнены", "закрытые", "закрытые за ненадобностью", "закрытые на паузе"],
    selectedFilter: ""
  }),

  computed: {
    tasksGroup() {
      let result;

      if (this.tab === 0) {
        result = this.tasks;
      } else if (this.tab === 1) {
        result = this.myTasks(this.person);
      } else {
        result = this.fromMeTasks(this.person);
      }

      return result;
    },
    tasksGroupLength() {
      return [
          this.tasks.length,
          this.myTasks(this.person).length,
          this.fromMeTasks(this.person).length
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
    },
    ...mapGetters({
      tasks: "getAllTasks",
      myTasks: "getTasksByPerformer",
      fromMeTasks: "getTasksByOwner"
    })
  },
  watch: {
    tab() {
      this.selectedFilter = "";
    }
  },
  methods: {
    goTo(id) {
      this.$router.push({ path: `/tasks/${id}` });
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
