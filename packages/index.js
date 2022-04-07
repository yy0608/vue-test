import { YyButton, YyButtonGroup } from './YyButton'

const components = [
  YyButton,
  YyButtonGroup
]

const install = function (Vue) {
  components.forEach(comp => Vue.use(comp))
}

export default {
  install
}
