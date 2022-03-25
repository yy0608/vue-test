<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
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
    },
    async handleSubmitAsync () {
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     this.submitted = true
      //     console.log(1111111111)
      //     resolve()
      //   }, 1000)
      // })
      await this.$http.get()
      this.submitted = true
    }
  }
}
</script>
