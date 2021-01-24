<template>
  <div>
    <p>{{ user.firstName }}</p>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const user = reactive({
      firstName: 'hagiwara',
      lastName: 'kota',
    })
    const fullName = computed(() => `${user.firstName} ${user.lastName}`)
    return {
      user,
      fullName
    }
  },
})
</script>
