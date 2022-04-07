<template>
  <div>
    <yy-button type="primary" @click="open">按钮</yy-button>
    <!-- <a-modal :visible="modalVisible"> -->
      <div></div>
    <!-- </a-modal> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      modalVisible: false
    }
  },
  mounted () {
  },
  methods: {
    open () {
      this.modalVisible = true
    }
  }
}
</script>
