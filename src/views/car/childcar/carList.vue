<template>
 <div class="car-list" >
   <scroll class="content">
      <car-list-item v-for="(item,index) in carList" :key="index" :item="item"></car-list-item>
   </scroll>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'

import carListItem from './carListItem'

export default {
  name:'carList',
  components: {
    Scroll,
    carListItem,
 
  },
   computed: {
  ...mapGetters([
    'carLength','carList'
  ]) 
}
}
</script>

<style scoped>

.content{
  height: calc(100vh - 93px - 40px);
  overflow: hidden;
}
</style>
