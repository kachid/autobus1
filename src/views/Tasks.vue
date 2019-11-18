<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Задачи</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs v-model="tab" centered>
          <v-tabs-slider></v-tabs-slider>

          <v-tab v-for="(groupName, i) in tasksGroupName" :key="i">
            {{ groupName }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(groupName, i) in tasksGroupName" :key="i">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'tasks',
  data: () => ({
    tab: null,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tasksGroupName: ["Все задачи", "Мои задачи", "Задачи от меня"],
    tasksFilterName: ["все", "не выполнены", "закрытые", "за ненадобностью", "на паузе"]
  })
}
</script>
