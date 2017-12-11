<template>
  <div id="app">
      <n-header></n-header>
      <n-add></n-add>
      <n-todolist></n-todolist>
  </div>
</template>

<script>
import nHeader from './components/header.vue'
import nTodolist from './components/todolist.vue'
import nAdd from './components/add.vue'

export default {
  name: 'app',
  components: {
    nHeader,
    nTodolist,
    nAdd
    
  }
}
</script>

<style>
html,body,ul,li,input,p{
    margin:0;
    padding:0;
}
body{
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}
button{
    padding:7px 0;
    outline: none;
    text-align: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor:pointer;
}
li{
    list-style: none;
}
</style>
