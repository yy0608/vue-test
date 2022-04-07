import YyButton from "./YyButton";
import YyButtonGroup from "./YyButtonGroup";

YyButton.install = function (Vue) {
  Vue.component(YyButton.name, YyButton)
}

YyButtonGroup.install = function (Vue) {
  Vue.component(YyButtonGroup.name, YyButtonGroup)
}

export {
  YyButton,
  YyButtonGroup
}
