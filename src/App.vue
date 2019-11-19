<template>
  <v-app>
    <v-app-bar app>
      <!-- -->
      <div id="nav">
        <v-btn class="ma-2" rounded dark color="orange accent-4" to="/">Главная</v-btn>
        <v-btn class="ma-2" rounded dark color="orange accent-4" to="/tasks">Задачи</v-btn>
        <v-btn class="ma-2" rounded dark color="orange accent-4" to="/directories">Справочники</v-btn>
      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
};
</script>
