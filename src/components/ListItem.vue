<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    msg: {
      type: String
    }
  },
  beforeUpdate () {
    console.log(111)
  },
  renderTriggered () {
    console.log(222)
  }
}
</script>
