<template>
  <div class="home">
    <aaa msg="Welcome to Your Vue.js App">
      <div>ddfsdf</div>
      
      <template #aaa="{ s }">
        <div>ggg{{ s }}</div>
      </template>
    </aaa>
  </div>
</template>

<script>
// @ is an alias to /src
import A from '../components/A.vue'

export default {
  name: 'Home',
  components: {
    'aaa': A
  }
}
</script>
