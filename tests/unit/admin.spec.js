import SubmitButton from '@/components/SubmitButton'
import { shallowMount } from '@vue/test-utils'

const msg = 'submit'
const factory = propsData => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}

describe('SubmitButton.vue', () => {
  it('displays a non authorized message', () => {
    const wrapper = factory()
    
    console.log(wrapper.html())
    expect(wrapper.find('span').text()).toBe('Not Authorized')
    expect(wrapper.find('button').text()).toBe(msg)
  })

  it('displays a admin privileges message', () => {
    const isAdmin = true
    const wrapper = factory({ isAdmin })
    
    console.log(wrapper.html())
    expect(wrapper.find('span').text()).toBe('Admin Privileges')
    expect(wrapper.find('button').text()).toBe(msg)
  })
})
