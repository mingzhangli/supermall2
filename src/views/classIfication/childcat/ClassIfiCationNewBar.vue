<template>
  <div class="CategoryNewBar">
    <new-bar>
      <div slot="center">商品分类</div>
    </new-bar>
  </div>
</template>

<script>
import NewBar from 'components/common/navbar/NewBar'

export default {
  name:'ClassIficationNewBar',
  components:{
    NewBar
  }
}
</script>

<style>
.CategoryNewBar {
 background: var(--color-tint);
 color:white;
}
</style>