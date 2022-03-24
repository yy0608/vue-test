import { shallowMount } from "@vue/test-utils";
import NumberRender from '@/components/NumberRender'

describe('NumberRender.vue', () => {
  it('even number', () => {
    const wrapper = shallowMount(NumberRender, {
      propsData: {
        even: true
      }
    })
    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })

  it('renders odd numbers', () => {
    const propsData = {
      even: false
    }
    expect(NumberRender.computed.numbers.call(propsData)).toBe('1, 3, 5, 7, 9')
  })
})
