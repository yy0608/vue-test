<template>
  <div class="home">
    <aaa msg="Welcome to Your Vue.js App">
      <div>ddfsdf</div>
      
      <template #aaa="{ s }">
        <div>ggg{{ s }}</div>
      </template>
    </aaa>

    <ccc />

    <FormSubmitter />
  </div>
</template>

<script>
// @ is an alias to /src
import A from '../components/A.vue'
import C from '../components/C.vue'
import FormSubmitter from '@/components/FormSubmitter'

export default {
  name: 'Home',
  components: {
    'aaa': A,
    'ccc': C,
    FormSubmitter
  },
  mounted () {
  }
}
</script>
