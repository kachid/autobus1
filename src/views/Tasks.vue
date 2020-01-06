<template>
  <v-card>
    <v-card-title>
      Задачи
    </v-card-title>

    <v-card-text>
      <v-tabs>
        <v-tab v-for="{ id, title, count } in tabs" :key="id">
          <v-badge>
            <template #badge>
              <span>{{ count }}</span>
            </template>

            {{ title }}
          </v-badge>
        </v-tab>

        <v-tab-item v-for="{ id, items } in tabs" :key="id">
          <tasks-list :tasks="items" />
        </v-tab-item>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import TasksList from '@/components/TasksList';

export default {
  name: "Tasks",
  components: {
    TasksList
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks
    }),
    ...mapGetters(["currentUser"]),
    tasksToMe() {
      return this.tasks.filter(task => task.performerId === this.currentUser.id)
    },
    tasksFromMe() {
      return this.tasks.filter(task => task.ownerId === this.currentUser.id)
    },
    tabs() {
      return [
        { id: 0, title: "Все задачи", items: this.tasks, count: this.tasks.length },
        { id: 1, title: "Мои задачи", items: this.tasksToMe, count: this.tasksToMe.length },
        { id: 2, title: "Задачи от меня", items: this.tasksFromMe, count: this.tasksFromMe.length }
      ]
    }
  }
}
</script>
