import { shallowMount } from "@vue/test-utils";
import FormSubmitter from '@/components/FormSubmitter'

var scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

function flushPromises() {
  return new Promise(function(resolve) {
    scheduler(resolve);
  });
}

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe('FormSubmitter.vue', () => {
  // 同步方法
  // it('点击后显示', async () => {
  //   // 安排（Arrange）
  //   const wrapper = shallowMount(FormSubmitter)

  //   // 行动（Act）
  //   const username = '高友谊'
  //   wrapper.find('[data-username]').setValue(username)
  //   wrapper.find('form').trigger('submit.prevent')
  //   await wrapper.vm.$nextTick()

  //   // 断言（Assert）
  //   expect(wrapper.find('.message').text()).toBe(`感谢提交，${username}`)
  // })

  it('异步提交', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      }
    })

    const username = '高友谊'
    wrapper.find('[data-username]').setValue(username)
    wrapper.find('form').trigger('submit.prevent')

    await flushPromises()

    expect(wrapper.find('.message').text()).toBe(`感谢提交，${username}`)
  })
})
