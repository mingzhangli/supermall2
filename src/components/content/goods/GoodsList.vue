<template>
  <div class="GoodsList">
    <goods-list-item  :goodsItem="item" v-for="(item,index) in goods" :key="index">
    </goods-list-item>
  </div>
</template>

<script>

import GoodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props: {
   goods: {
     type:Array,
     default() {
       return []
     }
   }
 },
 
}
</script>

<style>
.GoodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
