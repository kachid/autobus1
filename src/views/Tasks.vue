<template>
  <v-toolbar>
    <v-toolbar-title>Задачи</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text>Все задачи</v-btn>
      <v-btn text>Мои задачи</v-btn>
      <v-btn text>Задачи от меня</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'tasks',
  data: () => ({
    selection: [],
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  })
}
</script>
