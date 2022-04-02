import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import D from '@/components/D'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'alice'
  }
})

describe('store', () => {
  it('$store', () => {
    const wrapper = shallowMount(D, {
      localVue,
      store
    })
    expect(wrapper.text()).toBe('alice')
  })
})
