<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-title>
      {{ task.name }}

      <v-btn
        :to="{ name: 'tasks' }"
        icon
        absolute
        right
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>
      Исполнитель: {{ userById(task.performerId).name }}
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>Кем поставлена: {{ userById(task.ownerId).name }}</div>

      <div class="font-italic font-weight-light mb-4">
        {{ task.createdAt | date }}
      </div>

      <v-btn text @click="show = !show">
        <div class="overline">
          Описание задачи
        </div>
        <v-icon>
          {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        </v-icon>
      </v-btn>
    </v-card-text>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-card-text>
          {{ task.text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import { memoize } from '@/utils';

export default {
  name: "Task",
  filters: {
    date(timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState({
      users: state => state.users,
      tasks: state => state.tasks
    }),
    task() {
      return this.tasks.find(({ id }) => id === this.id)
    }
  },
  methods: {
    userById: memoize(function(userId) {
      return this.users.find(({ id }) => id === userId);
    })
  }
}
</script>
