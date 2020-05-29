<template>
  <div class="GoodsListItem" @click="itemClick" >

    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="GoodsInfo">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.orgPrice}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>


export default {
  name:'GoodsListItem',
  computed:{
   showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
 },
  methods:{
    imageLoad() {
           this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/Detail/'+ this.goodsItem.iid)
    },
    
  },
 props: {
   goodsItem: {
     type:Object,
     default() {
       return {}
     }
   }
 },
 
}
</script>

<style>
.GoodsListItem{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.GoodsListItem img{
  border-radius: 5px;
  width: 100%; 
}
.GoodsInfo{
  font-size: 14px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center
}
.GoodsInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 4px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect::before{
  display: inline-block;
  content: '';
  position: absolute;
  left: -15px;
  top:-1px;
  width:14px;
  height: 14px;
  background: url("../../.././assets/img/homepage/collect.svg") 0 0/14px 14px;

}
</style>
