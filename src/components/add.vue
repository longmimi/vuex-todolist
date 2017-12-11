<template>
    <div class="add">
       <input type="text" v-model.trim="todoText" 
              class="add-input" 
              placeholder="请输入待办事项"
              @keyup.enter="addTodo">
       <button @click="addTodo" class="add-btn">添加任务</button>
  </div>
</template>
<script>
export default{
  name:'header',
  data(){
    return {
     todoText:''
    }
  },
  methods:{
    addTodo(){
      let params={
        id:0,
        type:1,
        todoText:'',
        time:''
      }
      if(this.todoText){
        params.todoText=this.todoText
        this.$store.dispatch('addevent',params)
        this.todoText=''
        alert('添加成功!')
      }
    }
  }
}
</script>
<style scoped lang="less">
.add{
  position: relative;
  padding:30px 120px 30px 2px;
  font-size: 16px;
  .add-input{
    width:100%;
    height: 26px;
    padding:7px 10px;
    line-height: 26px;
    border:1px solid #ccc;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    font-size: inherit;
    &:foucs{
      outline:none;
    }
  }
  .add-btn{
    position: absolute;
    right:2px;
    top:30px;
    background: lightblue;
    border-radius: 4px;
    width:80px;
    height:40px;
    line-height: 26px;
    color: #fff;
  }
  
}

</style>
