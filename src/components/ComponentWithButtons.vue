<template>
  <div>
    <button 
      class="commit" 
      @click="handleCommit">
      Commit
    </button>

    <button 
      class="dispatch" 
      @click="handleDispatch">
      Dispatch
    </button>

    <button 
      class="namespaced-dispatch" 
      @click="handleNamespacedDispatch">
      Namespaced Dispatch
    </button>
  </div>
</template>

<script>
export default {
  name: 'ComponentWithButtons',

  data () {
    return {}
  },

  methods: {
    handleCommit () {
      this.$store.commit('testMutation', {
        msg: 'test commit'
      })
    },
    
    handleDispatch () {
      this.$store.dispatch('testAction', {
        msg: 'test dispatch'
      })
    },

    handleNamespacedDispatch () {
      this.$store.dispatch('namespaced/very/testAction', { msg: 'test namepaced dispatch' })
    }
  }
}
</script>
