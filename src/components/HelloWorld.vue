<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <select name="" id="">
      <option v-for="(item, index) in list" :key="item.value" :value="index" :selected="item.value === selected">{{item.label}}</option>
    </select> -->
    <ul>
      <li v-for="item in list" :key="item.syb">{{ item.label }}<input /></li>
    </ul>
    <!-- <div>
      <list-item v-for="(item, index) in list" :key="newSymbol()" :msg="item.label" />
    </div> -->
    <p>
      <button @click="handleAdd">添加</button>
    </p>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ListItem
  },
  data () {
    return {
      selected: 'lihua',
      list: [],
      lista: [
        {
          label: '小明',
          value: 'xiaoming'
        },
        {
          label: '李华',
          value: 'lihua'
        },
        {
          label: 'Tom',
          value: 'tom'
        }
      ]
    }
  },
  methods: {
    newSymbol () {
      return Symbol('唯一')
    },
    handleAdd () {
      const newItem = {
        syb: Symbol(),
        label: 'Lucy',
        value: 'lucy'
      }
      // this.list = [...this.list, newItem]
      this.list = [newItem, ...this.list]
    }
  },
  mounted () {
    this.list = this.lista.map(item => ({
      ...item,
      syb: Symbol()
    }))
    // setTimeout(() => {
    //   this.list.splice(1, 1)
    //   console.log(this.list)
    // }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
