<template>
  <div>
    <v-select
      v-model="selectedFilter"
      :items="tasksFilters"
      label="Фильтр задач"
      class="mt-5"
    />

    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>Задачи</th>
            <th>Исполнитель</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ id, name, performerId } in filteredTasks" :key="id" @click="goToTask(id)">
            <td>{{ name }}</td>
            <td>{{ taskPerformer(performerId) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { memoize } from '@/utils';
import { taskStatuses } from '@/config';

const ALL = "all";

export default {
  name: "TasksList",
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tasksFilters: [
        { text: "Все", value: ALL },
        { text: "В работе", value: taskStatuses.work },
        { text: "Выполненные", value: taskStatuses.complete },
        { text: "Отмененные", value: taskStatuses.cancel },
        { text: "На паузе", value: taskStatuses.pause }
      ],
      selectedFilter: ALL,
    }
  },
  computed: {
    ...mapState({
      users: state => state.users
    }),
    filteredTasks() {
      return this.selectedFilter === ALL ?
        this.tasks :
        this.tasks.filter(({ status }) => status === this.selectedFilter);
    }
  },
  methods: {
    taskPerformer: memoize(function(performerId) {
      return this.users.find(({ id }) => id === performerId).name;
    }),
    goToTask(id) {
      this.$router.push({ name: "task", params: { id } });
    }
  }
}
</script>
