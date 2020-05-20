<template>
  <swiper class="swiperImg">
    <swiper-item  :key="index"  v-for="(item,index) in topImages ">
      <img :src="item" alt=""/>
    </swiper-item>
  </swiper>
</template>


<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name:'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
   props:{
   topImages:{
     type:Array,
    default() {
      return []
    }
   }
 }
  
}
</script>

<style>
.swiperImg{
  height: 320px;
}
</style>
