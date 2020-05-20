<template>
<div id="HomePage">
 <new-bar class="home-nav">
   <div slot="center">购物街</div>
  </new-bar>
   <tab-control 
   :titles="['流行','新款','精选']" 
   @tabEvent="tabClick"  
   ref='tabControl2' 
   class="tab-control" 
   v-show="isTabFixed"></tab-control>

   <Scroll 
   class="content" 
   ref="scroll"
   :probe-type="3" 
   :pullUpLoad="true" 
   @scrollClick="scrollClick"
    @pullingUp="loadMore">
   <home-page-swiper :banners="banners"  @swiperItemImageLoad="swiperLoad"></home-page-swiper>
   <recommend-view :recommends="recommends"></recommend-view>
   <fashion-view></fashion-view>
   <tab-control :titles="['流行','新款','精选']" @tabEvent="tabClick"  ref="tabControl1"></tab-control>
   <goods-list :goods="showGoods"></goods-list>
   </Scroll>
   <back-top class='backtop' @click.native="topClick"  v-show="isShow"></back-top>
</div>
</template>


<script>
import NewBar from 'components/common/navbar/NewBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'


import HomePageSwiper  from './childcops/HomePageSwiper'
import RecommendView from './childcops/RecommendView'
import FashionView from './childcops/FashionView'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import {itemListenerMinxin} from '../.././common/mixin.js'

import {getHomePageMultidata,
       getHomeGoods} 
        from '../.././network/homepage.js'
import {debounce} from '../.././common/untils.js'




export default {
  name:'HomePage',
  components: {
    NewBar,
    HomePageSwiper,
    RecommendView,
    FashionView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop

  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods: {
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
    currentIdenx:'pop',
    isShow:false,
    tabOffSetTop:0,
    isTabFixed:false,
    saveY:0,
    }
  },
  mixins:[itemListenerMinxin],
  computed:{
  showGoods(){
      return this.goods[this.currentIdenx].list
      }
    },
  created() {
    this.getHomePageMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
   mounted() {
    
   },
   activated(){
     this.$refs.scroll.refresh()
     this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
     
   },
   deactivated(){
   this.saveY = this.$refs.scroll.scroll.y;
   this.$bus.$off('itemImageLoad',this.itemImgListener)
   console.log(this.saveY)

   },
  methods: {
    scrollClick(position) {
      this.isShow = (-position.y)>1000;
      this.isTabFixed = (-position.y)>this.tabOffSetTop
      
    },
    topClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    tabClick(index) {
      switch(index) {
        case 0:
        this.currentIdenx='pop';
        break;
        case 1:
        this.currentIdenx='new';
        break;
        case 2:
        this.currentIdenx='sell'
        break;
      }
        
        this.$refs.tabControl1.currentIdenx =this.$refs.tabControl2.currentIdenx = index;
        
    },
    loadMore() {
      this.getHomeGoods(this.currentIdenx)
    },
    swiperLoad(){
    this.tabOffSetTop=this.$refs.tabControl1.$el.offsetTop
    },
    //网络数据的请求
    getHomePageMultidata(){
      getHomePageMultidata().then(res=>{
      this.banners=res.data.banner.list,
      this.recommends=res.data.recommend.list
    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1;
      this.$refs.scroll.scroll.finishPullUp()
      })

    }
  }
}
</script>

<style scoped>
#HomePage{
  height: 100vh;
  position: relative;

}
.home-nav {
  background-color: var(--color-tint);
  color:white;
 
}

.content{
 overflow: hidden;
 position: absolute;
 left: 0;
 right: 0;
 top:44px;
 bottom: 49px;
}
.backtop{
  position: fixed;
  bottom: 50px;
  right: 15px;
}
.tab-control{
  position: relative;
  z-index: 9;
}
</style>
