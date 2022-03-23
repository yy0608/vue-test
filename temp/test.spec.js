// import Vue from 'vue'

// const Child = Vue.component('Child', {
//   name: 'Child',
//   template: '<div>Child component</div>'
// })

// const Parent = Vue.component('Parent', {
//   name: 'Parent',
//   template: '<div>Parent component</div>'
// })

// import { shallowMount } from '@vue/test-utils'

import Child from '@/components/Child'
import { shallowMount, mount } from '@vue/test-utils'
// import Parent from '@/components/Parent'

const shallowWrapper = shallowMount(Child)
const mountWrapper = mount(Child)

console.log(shallowWrapper.html())
console.log(mountWrapper.html())
