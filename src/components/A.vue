<template>
  <div>
    <slot>sss</slot>
    <slot name="aaa" s="sss">ddd</slot>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(Object.keys(this.$slots))
    console.log(this.$slots)
    console.log(this.$scopedSlots)
  }
}
</script>
