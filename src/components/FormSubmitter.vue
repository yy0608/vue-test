<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

    <div class="message" v-if="submitted">
      感谢提交，{{ username }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSubmitter',
  data () {
    return {
      username: '',
      submitted: false
    }
  },
  methods: {
    handleSubmit () {
      this.submitted = true
    }
  }
}
</script>
