<template>
<div>
  <header class="wrap_header">
    <h1>longtean's todoList</h1>
  </header>
</div>
  
</template>
<script>
export default{
  name:'header',
  data(){
    return {
      
    }
  }
}
</script>
<style scoped lang="less">
.wrap_header{
  position: relative;
  width:100%;
  height: 70px;
  line-height: 70px;
  z-index: 10;
  background:lightblue;
  h1{
    position: relative;
    width:100%;
    margin:0 auto;
    text-align: center;
    color:#fff;
  }
}

</style>
