<template>
  <div>
    {{ todos }}
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
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
      todos.value = await axios.get('https://jsonplaceholder.typicode.com/todos')
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
