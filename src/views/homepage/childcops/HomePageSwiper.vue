<template>

 <swiper>
   <swiper-item :key="item.index" v-for="(item,index) in banners">
     <a :href="item.link">
       <img :src="item.image" alt="" @load="imageLoad">
     </a>
   </swiper-item>
 </swiper>

</template>


<script>

import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name:'HomePageSwiper',
    methods:{
    imageLoad(){
      if(!this.isShow){
        this.$emit('swiperItemImageLoad');
        this.isShow=true   
      }
       
    }
  },
  props: {
    banners:{
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
  data() {
    return {
      isShow:false
    }
  },
 
}
</script>

<style>
</style>
