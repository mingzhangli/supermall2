<template>
  <div class="ClassIfiCationWrapper">
    <div class="item" v-for="(item,index) in item_list" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="item_title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name:'ClassIficationWrapper',
  components:{
    Scroll
  },
 props: {
   item_list:{
     type:Array
   }
 }
}
</script>

<style>
.ClassIfiCationWrapper {
  padding: 10px;
  display: flex;
  
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100px;
  margin-bottom: 10px;
}
.item img{
  width: 65px;
  margin-bottom: 7px;
}

</style>