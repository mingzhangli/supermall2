<template>
  <div class="detail-new-bar">
    <new-bar  >
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/other/back.svg" alt=""/>
      </div>
      <div slot="center"  class="title" >
      <div :key="index" v-for="(item,index) in titles" class="title-item"  @click="itemClick(index)" :class="{active:  currentIndenx===index}">{{item}}</div>
      </div>   
    </new-bar>
  </div>
</template>


<script>
import NewBar from 'components/common/navbar/NewBar'

export default {
  name:'DetailNewBar',
  components: {
    NewBar
  },

  
  data() {
    return { 
      titles:['商品','参数','评论','推荐'],
      currentIndenx:0
    }
  },
  methods: {
    itemClick(index) {
      this. currentIndenx=index;
      this.$emit('itemClickEvent',index)
    },
    backClick(){
       //点击返回上一次页面
       this.$router.back(-1)
    }
  }
}
</script>

<style>
.detail-new-bar{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.title{
  display: flex;
  font-size: 14px;
 
}
.title-item{
 flex: 1;
}
.back{
  margin-top: 8px;
}
.active{
  color: var(--color-high-text)
}
</style>
