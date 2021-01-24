<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <p>ID: {{ todo.userId }}</p>
        <p>TITLE: {{ todo.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import axios from 'axios'

export default defineComponent({
  setup() {
    const todos = ref([])
    const getTodos = async () => {
      // fetch('https://jsonplaceholder.typicode.com/todos')
      //   .then(response => response.json())
      //   .then(data => todos.value = data)
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      todos.value = response.data
    }
    onMounted(async () => {
      getTodos()
    })
    return {
      todos,
      getTodos
    }
  },
})
</script>
