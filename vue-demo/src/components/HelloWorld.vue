<template>
  <div class="hello" :class="$style.red">
    <h1>{{ msg }}</h1>
    <BaseInput/>
    <anchored-heading :level="4">
      this is my title
      <span>11</span>
    </anchored-heading>
    <com-array :items="array"></com-array>
    <value-model :value="inputValue" @input="handleInput"></value-model>
    <com-slot>
      <!-- <p v-slot:default="slotProps"></p> -->
    </com-slot>
  </div>
</template>

<script>
import './title'
/* eslint-disable */ 
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      array: [],
      inputValue: ''
    }
  },
  components: {
    // BaseTitle
  },
  watch: {
    inputValue(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  methods: {
    handleInput (value) {
      console.log(value, this.inputValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
}
</style>
