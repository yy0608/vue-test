import { Button } from "ant-design-vue";

export default {
  name: 'YyButtonGroup',
  components: {
    'a-button-group': Button.Group
  },
  render () {
    return (
      <a-button-group
        on={this.$listeners}
        props={this.$props}
        attrs={this.$attrs}
        scopedSlots={this.$scopedSlots}
      >
        { this.$slots.default }
      </a-button-group>
    )
  }
}
