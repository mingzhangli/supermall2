<template>
  
    <tab-bar>
    <tab-bar-item path='/Home' >
      <img slot="item-icon" src="~assets/img/homepage/homepage.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/homepage/homepage_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/ClassIfication' >
      <img slot="item-icon" src="~assets/img/classification/classification.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/classification/classification_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/Car' >
      <img slot="item-icon" src="~assets/img/car/car.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/car/car_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/Mine' >
      <img  slot="item-icon" src="~assets/img/mine/mine.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/mine/mine_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>

</template>

<script>
  import tabBar from 'components/common/tabbar/tabBar'
  import tabBarItem from 'components/common/tabbar/tabBarItem'

  export default {
   name: 'MainTabBar',
   components: {
    tabBar,
    tabBarItem
   
  }
}
</script>

<style>

</style>
