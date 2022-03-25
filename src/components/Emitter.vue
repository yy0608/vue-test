<template>
  <div>
    <button @click="emitEvent">点击</button>
  </div>
</template>

<script>
export default {
  name: 'Emitter',
  methods: {
    emitEvent () {
      this.$emit('myEvent', 'name', 'password')
    }
  }
}
</script>
