<template>
   <div class="new-bar">
   <div class="left"><slot name="left"></slot></div>
   <div class="center"><slot name="center">购物街</slot></div>
   <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'NewBar',

}
</script>

<style>
.new-bar{
  display:flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2)
}
.left,.right{
  width: 60px;

}
.center{
  flex: 1;


}
 
</style>
