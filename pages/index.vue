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

export default defineComponent({
  setup(props, { root }) {
    const todos = ref([])
    const getTodos = async () => {
      todos.value = await root.$axios.$get('https://jsonplaceholder.typicode.com/todos')
    }
    onMounted(() => {
      getTodos()
    })
    return {
      todos,
      getTodos
    }
  },
})
</script>
