import { shallowMount } from "@vue/test-utils";
import FormSubmitter from '@/components/FormSubmitter'

describe('FormSubmitter.vue', () => {
  it('点击后显示', async () => {
    // 安排（Arrange）
    const wrapper = shallowMount(FormSubmitter)

    // 行动（Act）
    const username = '高友谊'
    wrapper.find('[data-username]').setValue(username)
    wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    // 断言（Assert）
    expect(wrapper.find('.message').text()).toBe(`感谢提交，${username}`)
  })
})
