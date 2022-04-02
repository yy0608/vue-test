import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ComponentWithButtons from '@/components/ComponentWithButtons'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  testMutation: jest.fn()
}

const store = new Vuex.Store({ mutations })

describe('componnent with buttons', () => {
  it('commits a mution when a button is clicked', async () => {
    const wrapper = shallowMount(ComponentWithButtons, {
      store, localVue
    })
    
    wrapper.find('.commit').trigger('click')
    await wrapper.vm.$nextTick()

    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: 'test commit' }
    )
  })

  it('dispatch an action when a button is clicked', async () => {
    const mockStore = {
      dispatch: jest.fn()
    }

    const wrapper = shallowMount(ComponentWithButtons, {
      mocks: {
        $store: mockStore
      }
    })

    wrapper.find('.dispatch').trigger('click')
    await wrapper.vm.$nextTick()

    expect(mockStore.dispatch).toHaveBeenLastCalledWith(
      'testAction',
      { msg: 'test dispatch' }
    )
  })

  it('dispatch a namespaced action when button is clicked', async () => {
    const store = new Vuex.Store()
    store.dispatch = jest.fn()
  
    const wrapper = shallowMount(ComponentWithButtons, {
      store, localVue
    })

    wrapper.find('.namespaced-dispatch').trigger('click')
    await wrapper.vm.$nextTick()

    expect(store.dispatch).toHaveBeenCalledWith(
      'namespaced/very/testAction',
      { msg: "test namepaced dispatch" }
    )
  })
})
