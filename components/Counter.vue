<template>
    <div>
        <button @click="up">カウントアップ</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        up() {
            this.count++
        }
    }
}
</script>