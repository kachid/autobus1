<template>
  <v-card
    class="mx-auto"
    max-width="600"
    color="blue lighten-4"
  >
    <v-card-title>
      {{task(id).name}}

      <v-btn icon absolute right to="/tasks">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>
      Исполнитель: {{task(id).performer}}
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>Кем поставлена: {{task(id).owner}}</div>

      <div class="font-italic font-weight-light">
        {{createData}}
      </div>
    </v-card-text>
    <v-card-actions>
      <div class="overline" v-if="!show">
        Показать описание задачи
      </div>
      <div class="overline" v-else>
        Скрыть описание задачи
      </div>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{task(id).text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Task",
    data: () => ({
      show: false,
    }),
    computed: {
      createData() {
        return this.task(this.id).create.split("T").join("  ");
      },
      id() {
        return Number(this.$route.params.id);
      },
      ...mapGetters({
        task: "getTaskByID"
      })
    }
  }
</script>
