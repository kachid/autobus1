<template>
  <v-app>
    <v-app-bar app>
      <div id="nav">
        <v-btn
          class="ma-2"
          to="/"
          color="orange accent-4"
          rounded
          dark
        >
          Главная
        </v-btn>

        <v-btn class="ma-2" rounded dark color="orange accent-4" to="/tasks">Задачи</v-btn>

        <v-btn class="ma-2" rounded dark color="orange accent-4" to="/directories">Справочники</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app />
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
