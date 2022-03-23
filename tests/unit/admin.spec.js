import SubmitButton from '@/components/SubmitButton'
import { shallowMount } from '@vue/test-utils'

describe('SubmitButton.vue', () => {
  it('displays a non authorized message', () => {
    const msg = 'submit'
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg
      }
    })
    
    console.log(wrapper.html())
    expect(wrapper.find('span').text()).toBe('Not Authorized')
    expect(wrapper.find('button').text()).toBe(msg)
  })

  it('displays a admin privileges message', () => {
    const msg = 'submit'
    const isAdmin = true
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg,
        isAdmin
      }
    })
    
    console.log(wrapper.html())
    expect(wrapper.find('span').text()).toBe('Admin Privileges')
    expect(wrapper.find('button').text()).toBe(msg)
  })
})
