<template>
  <div class="todolist">
      <div class="todolist-tab" @click="changeCollapse(0,$event)">未完成
        <span :class="{'close-span':collapse[0].show}"></span>
      </div>
      <div class="todolist-box" :style="{'height':'auto','display':'block'}">
        <ul>
          <li class="todolist-list" v-for="value in getToDo">
            <input type="checkbox" :key="value.id" @click="moveToDone(value.id)">
            <div>{{value.todoText}}</div>
            <button class="cancel-btn" @click="moveCancel(value.id)">取消</button>
          </li>
        </ul>
      </div>

      <div class="todolist-tab" @click="changeCollapse(1,$event)">已完成
            <span :class="{'close-span': !collapse[1].show}"></span>
        </div>
        <div class="todolist-box">
            <ul>
                <li class="todolist-list" v-for="value in getDone" :key="value.id">
                    <input type="checkbox"  checked @click="moveToDo(value.id)">
                    <div>{{value.todoText}}</div>
                    <span class="todolist-time">{{value.time}}</span>
                </li>
            </ul>
        </div>

        <div class="todolist-tab" @click="changeCollapse(2,$event)">已取消
            <span :class="{'close-span': !collapse[2].show}"></span>
        </div>
        <div class="todolist-box" :class="{'todolist-box-hide': false}">
            <ul>
                <li class="todolist-list" v-for="value in getCancel">
                    <div class="todolist-delete">{{value.todoText}}</div>
                    <button class="cancel-btn" @click="moveToDo(value.id)">恢复</button>
                </li>
            </ul>
        </div>


  </div>
</template>
<script>
export default{
  name:'todolist',
  data(){
    return {
      collapse:[
        {show:true},
        {show:true},
        {show:true},
      ]
    }
  },
  computed:{
    getToDo(){
      return this.$store.getters.getToDo
    },
    getDone(){
      return this.$store.getters.getDone
    },
    getCancel(){
      return this.$store.getters.getCancel
    }
  },
  methods:{
    moveToDone(id){
      this.$store.dispatch('eventdone',id)
    },
    moveCancel(id){
      this.$store.dispatch('eventcancel',id)
    },
    moveToDo(id){
      this.$store.dispatch('eventtodo',id)
    },
    changeCollapse(num,event){
      const show = this.collapse[num].show
      if(show){
        this.closeCollapse(event)
      }else{
        this.openCollapse(event)
      }
      this.collapse[num].show = !show
    },
    closeCollapse(event){  //关闭折叠面板
      console.log(event)
      //currentTarget 返回当前元素结点
      //nextElementSibling 返回当前元素结点的同一父元素下的下一个兄弟节点
      let ulElement = event.currentTarget.nextElementSibling
      let children  = ulElement.getElementsByTagName('ul')[0]
      ulElement.style.height = children.offsetHeight + 'px'
      setTimeout(() => {
        ulElement.style.height = '0px'
        setTimeout(() => {
          ulElement.style.display='none'
        }, 300)
      }, 10)
    },
    openCollapse(event){ //打开折叠面板
      let ulElement = event.currentTarget.nextElementSibling
      let children  = ulElement.getElementsByTagName('ul')[0]
      ulElement.style.display='block'
      ulElement.style.height = children.offsetHeight + 'px'
      setTimeout(() => {
        ulElement.style.height = 'auto'
      }, 300);
    }
  }
}
</script>
<style scoped lang="less">
.todolist{
  .todolist-tab{
   position: relative;
   height: 44px;
   line-height: 44px;
   background: lightblue;
   padding-left: 20px;
   border-bottom: 1px solid #000;
   box-sizing: border-box;
   color:#000;
   cursor: pointer;
   span{
      position: absolute;
      right: 20px;
      top: 15px;
      width: 10px;
      height: 10px;
      border-bottom:2px solid #000;
      border-right:2px solid #000;
      transform: rotate(-45deg);
      transition: transform .3s;
      &.close-span {
        transform: rotate(45deg);
      }
    }
  }
  .todolist-box{
    list-style: none;
    overflow: hidden;
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
    transition: height .3s;
    .todolist-list{
      position: relative;
      min-height: 44px;
      line-height: 25px;
      padding: 10px 100px 10px 50px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      color:#000;
      input[type=checkbox]{
        position: absolute;
        top:12px;
        left: 15px;
        width:20px;
        height:20px;
      }
      .cancel-btn {
        position: absolute;
        right: 10px;
        top: 7px;
        width: 50px;
        height: 30px;
        line-height: 30px;
        padding: 0;
        background:lightblue;
        border: 1px solid #ccc;
        color: #fff;
        font-size: 16px;
      }
      .todolist-time {
          position: absolute;
          right: 10px;
          top: 0;
          line-height: 44px;
          font-size: 12px;
          color: #aaa;
      }
      .todolist-delete{
        text-decoration: line-through;
      }
    }
  }  
}
</style>
