import { Button } from "ant-design-vue";

export default {
  name: 'YyButton',
  components: {
    'a-button': Button
  },
  render () {
    return (
      <a-button
        on={this.$listeners}
        props={this.$props}
        attrs={this.$attrs}
        scopedSlots={this.$scopedSlots}
      >
        1{ this.$slots.default }1
      </a-button>
    )
  }
}
