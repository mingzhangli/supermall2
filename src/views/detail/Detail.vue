<template>
  <div id="detail">
    <detail-new-bar @itemClickEvent="getScrollOffset" ref="newBar"></detail-new-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scrollClick="contentScroll">
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo" @loadImgEvent="imgRefresh"></detail-goods-info>
    <detail-params :paramInfo="paramInfo" ref="paramsRef"></detail-params>
    <detail-comment :comment="comment" ref="commentRef"></detail-comment>
    <goods-list :goods="recommends" ref="recommendRef"></goods-list>
    </scroll>
    <back-top class='backtop' @click.native="topClick"  v-show="isShow"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <toast></toast>
     
    
 </div>

</template>
<script>
 import DetailNewBar from './childcomps/DetailNewBar'
 import DetailSwiper from './childcomps/DetailSwiper'
 import DetailBaseInfo from './childcomps/DetailBaseInfo'
 import DetailShopInfo from './childcomps/DetailShopInfo'
 import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
 import DetailParams from './childcomps/DetailParams'
 import DetailComment from './childcomps/DetailComment'
 import DetailBottomBar from './childcomps/DetailBottomBar'
 import GoodsList from 'components/content/goods/GoodsList'


 import BackTop from 'components/content/backTop/BackTop'


 import {getDetail,Goods,Shop,GoodsParam,getDetailRecommend} from '../.././network/detail.js'
 import Scroll from 'components/common/scroll/Scroll'
 import {debounce} from '../.././common/untils.js'
 import {itemListenerMinxin} from '../.././common/mixin.js'

 import { mapActions } from 'vuex'

export default {
  name:'Detail',
  components:{
    DetailNewBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    DetailBottomBar,
    GoodsList,
    Scroll,
    debounce,
    BackTop,
  },
   mixins:[itemListenerMinxin],

  created(){
      //获取当前商品详情页的iid
   this.iid = this.$route.params.iid
      //获取参数iid来请求相应的详情页的数据
   getDetail(this.iid).then(res => {
     this.topImages = res.result.itemInfo.topImages
     const data = res.result
     console.log(res)
     this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

     this.shop = new Shop(data.shopInfo)

     this.detailInfo = data.detailInfo

     this.paramInfo = new  GoodsParam(data.itemParams.info,data.itemParams.rule);

     if (data.rate.cRate != 0) {
          this.comment = data.rate.list[0];
        }
   })
      //获取推荐数据
  getDetailRecommend().then( res => {
     this.recommends = res.data.list
   })
     //对详情页图片使用防抖函数来做性能优化
   this.getThemePosY = debounce(()=>{
   this.themePosY=[]
   this.themePosY.push(0)
   this.themePosY.push(this.$refs.paramsRef.$el.offsetTop)
   this.themePosY.push(this.$refs.commentRef.$el.offsetTop)
   this.themePosY.push(this.$refs.recommendRef.$el.offsetTop)
   this.themePosY.push(Number.MAX_VALUE)

   },200)
 },
 mounted(){
 
 },
updated(){
  
 },
 destroyed() {
   //利用事件总线从其他页接受一个事件
   this.$bus.$off('itemImageLoad',() => {
     refresh()
   })

 },
 data(){
   return{
     iid:null,
     topImages:[],
     goods:{},
     shop:{},
     detailInfo:{},
     paramInfo:{},
     comment:{},
     recommends:[],
     themePosY: [],
     getThemePosY:null,
     currentIndenx:0,
     isShow:false,
     slideCount:0
 
   }
 },
 methods:{
   ...mapActions([
      'toAction'
   ]),
   addToCart() {
     //定义一个对象，当用户点击购物车时把这个对象数据传给vueX的State里
    const product = {}
     product.iid = this.iid,
     product.desc = this.goods.desc,
     product.price = this.goods.lowNowPrice,
     product.title = this.goods.title,
     product.img = this.topImages[0],
     product.slideCount = this.slideCount,

     this.toAction(product).then(res =>{ 
        this.$toast.show(res, 2000)

     })
     
    /*this.$store.dispatch('toAction',product).then( res =>{
       console.log(res)
     })*/
 },
   imgRefresh(){
     //使用防抖函数进行详情页图片刷新页面
     const refresh = debounce(this.$refs.scroll.refresh,400)
       refresh()
      //获取
     this.getThemePosY()
   },
   getScrollOffset(index){
     //详情页导航栏跳转
     this.$refs.scroll.scroll.scrollTo(0,-this.themePosY[index],200)

   },
    topClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
   contentScroll(position){
     //进行详情滚动判断
     this.isShow = (-position.y)>1000;
     const positionY = -position.y
     for(let i=0;i<this.themePosY.length-1;i++){
      if(positionY>=this.themePosY[i]&&positionY<this.themePosY[i+1]){
        this.currentIndenx = i;
        this.$refs.newBar.currentIndenx = this.currentIndenx;
      }
       }
    }
   }
    
}
</script>

<style  scoped>
#detail{
  position: relative;
  z-index: 10;
  background: white;

}
.content{
  position: absolute;
  top:44px;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
}
.backtop{
  position: fixed;
  bottom: 60px;
  right: 15px;
}

</style>
