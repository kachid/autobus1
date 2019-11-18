<template>
  <v-app>
    <v-app-bar app>
      <!-- -->
      <div id="nav">
        <router-link to="/">Главная</router-link> |
        <router-link to="/tasks">Задачи</router-link> |
        <router-link to="/directories">Справочники</router-link>
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
