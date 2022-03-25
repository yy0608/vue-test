import { shallowMount } from "@vue/test-utils";
import Emitter from '@/components/Emitter'

describe('Emitter.vue', () => {
  it('事件发出', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"])
  })

  it('事件发出，不加载组件测试', () => {
    const events = {}
    const $emit = (event, ...args) => {
      events[event] = [...args]
    }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(['name', 'password'])
  })
})
