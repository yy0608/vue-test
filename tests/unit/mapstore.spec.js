import { shallowMount } from "@vue/test-utils";
// import E from '@/components/E'
import F from '@/components/F'

describe('map store', () => {
  it('computed', () => {
    const wrapper = shallowMount(F, {
      computed: {
        fullname: () => 'youyi'
      }
    })

    expect(wrapper.text()).toBe('youyi')
  })
})
