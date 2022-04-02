<template>
  <div>
    <div class="username">{{ username }}</div>
    <div class="fullname">{{ fullname }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: this.$store.state.username
    }
  },
  computed: {
    fullname () {
      return 'sss'
    }
  }
}
</script>
