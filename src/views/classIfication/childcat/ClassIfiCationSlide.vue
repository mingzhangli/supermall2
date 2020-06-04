<template>
<div class="slide-bar">
<scroll class="content">
    <div class="getCategory" 
     v-for="(item,index) in list" 
     :key="index"
     @click="itemClick(index)"
     :class="{active: currentIndenx === index}">
         {{item.title}}
    </div>
 </scroll>
</div>
</template>

<script>
import { getCategory, getSubcategory} from '../../.././network/ClassIfication.js'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name:'ClassIficationSlide',
  components:{
    Scroll
  },
  data() {
    return{
      list:null,
      currentIndenx:0,
      WrapperMaitKey:null
    }
  },
 created() {
   //请求导航栏数据
    this.getCategory()
  },

  methods:{
    async getCategory() {
      let res = await getCategory();
      if(res) {
        this.list = res.data.category.list;
        console.log(this.list)
      }
    },
   itemClick(index) {
      this.currentIndenx = index;
      this.$emit('indexClick',index)
      if(this.list) {
        this.WrapperMaitKey = this.list[this.currentIndenx].maitKey;
        this.$parent.getSubcategory(this.WrapperMaitKey);
        
        console.log(this.WrapperMaitKey)
      }
   }
  }
}
</script>

<style scoped>


.getCategory {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.getCategory.active{
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
.content {
  height:  calc(100% - 44px);
  width: 100px;
  overflow: hidden;
  background-color: #f6f6f6;
}
</style>