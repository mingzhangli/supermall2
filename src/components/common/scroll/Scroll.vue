<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import  BScroll from 'better-scroll'


export default {
  name:'Scroll',
  data() {
    return {
      scroll:null,
    }
  },
   props:{
     probeType:{
       type:Number,
       default:0
     },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
  },

  mounted(){
    //1.创建better-scroll对象
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
     
    })
    //2.监听滚动的位置
    this.scroll.scrollTo(0,0)
    this.scroll.on('scroll',(position) => {
    this.$emit('scrollClick',position)
  
    }),
    this.scroll.on('pullingUp',() => {
     this.$emit('pullingUp')
    })
  },
  methods:{
    refresh(){
    this.scroll.refresh()
    
    }
  }
 
}
</script>

<style>

</style>
