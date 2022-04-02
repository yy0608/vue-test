import { createLocalVue, mount } from '@vue/test-utils'
import B from '@/components/B'
import Antd from 'ant-design-vue'

const localVue = createLocalVue()
localVue.use(Antd)

describe('B.vue', () => {
  it('测试antdv', async () => {
    const wrapper = mount(B, {
      localVue
    })
    expect(wrapper.text()).toBe('按 钮')
    wrapper.vm.open()
    await wrapper.vm.$nextTick()
    expect(document.querySelector('.ant-modal-footer').textContent).toBe('CancelOK')
  })
})
