<template>
<div class="recommend">
  <div :key="index" v-for="(item,index) in recommends"class="recommend-item" >
    <a :href="item.link">
      <img :src="item.image" alt=""> 
      <div>{{item.title}}</div>
    </a>
  </div>
</div>

 

</template>
<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name:'RecommendView',
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  
 
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;

}
.recommend-item{
  flex: 1
}
.recommend-item img{
  width: 90%;
  height: 70px;
  margin-bottom:10px; 
}

</style>
