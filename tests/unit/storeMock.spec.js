import { shallowMount } from "@vue/test-utils";
import D from '@/components/D'

describe('mock store', () => {
  it('sss', () => {
    const wrapper = shallowMount(D, {
      mocks: {
        $store: {
          state: {
            username: 'youyi'
          }
        }
      }
    })

    expect(wrapper.text()).toBe('youyi')
  })
})
