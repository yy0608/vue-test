<template>
  <div>fh我的</div>
</template>

<script>
export default {
  data () {
    return {
      name: '铭恒'
    }
  },
  mounted () {
    console.log(this.name)
  },
  render (h) {
    return h('a', {}, 'render')
  }
}
</script>
