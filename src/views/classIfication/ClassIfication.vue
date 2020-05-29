<template>
  <div id="classIfiCation">
    <class-ifi-cation-new-bar></class-ifi-cation-new-bar>
    <div class="main">
    <class-ifi-cation-slide @indexClick="indexClick"></class-ifi-cation-slide>
    <class-ifi-cation-wrapper :item_list="WrapperList"></class-ifi-cation-wrapper>
    </div>
  </div>
</template>

<script>
import ClassIfiCationNewBar from './childcat/ClassIfiCationNewBar'
import ClassIfiCationSlide from './childcat/ClassIfiCationSlide'
import ClassIfiCationWrapper from './childcat/ClassIfiCationWrapper'
import {getSubcategory , getCategoryDetail, getCategory} from '../.././network/ClassIfication.js'

import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'ClassIfication',
   components:{
    ClassIfiCationNewBar,
    ClassIfiCationSlide,
    ClassIfiCationWrapper,
    Scroll
  },
  data() {
    return {
      WrapperList:null,
      currentIndex:0,
      MaitKey:null
    }
  },
  created() {
    this.getCategory()

    this.getSubcategory('3627')
  },
  methods: {
    indexClick(index) {
      this.currentIndex = index
      console.log(this.currentIndex)
    },
     async getCategory() {
      let res = await getCategory();
      if(res) {
        this.list = res.data.category.list;
        const MaitKey =res.data.category.list[this.currentIndex].maitKey
        console.log(MaitKey)
      }
    },
    async getSubcategory(MaitKey) {
      let res = await getSubcategory(MaitKey);
     if(res) {
       this.WrapperList = res.data.list;
       console.log(this.WrapperList)
     }

    }
  }
}
</script>

<style>
.main {
  display: flex;
  width: 100%;
}

</style>
