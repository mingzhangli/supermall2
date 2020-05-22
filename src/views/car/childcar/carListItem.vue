<template>
 <div id="carListItem">
  <div class="checked">
     <check-button :is-checked="item.Checked" @click.native="checkClick"></check-button>
  </div>
  <div class="item-img">
    <img :src="item.img" alt="商品图片" />
  </div>
  <div class="item-info">
    <div class="item-title">{{item.title}}</div>
    <div class="item-desc">{{item.desc}}</div>
    <div class="item-bottom-info">
        <span class="item-price">￥{{item.price}}</span>
        <span class="item-slideCount">×{{item.slideCount}}</span>
    </div>
  </div>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
import checkButton from 'components/content/checkButton/checkButton'

export default {
  name:'carListItem',
  components:{
    checkButton
  },
   methods:{
    checkClick() {
      this.item.Checked = !this.item.Checked;
    }
  },
  props:{
    item:{
      type:Object,
      default() {
        return {}
      }
    }
  },
 
 
}
</script>

<style >
#carListItem{
  width: 100%;
  display: flex;
  flex: 1;
  padding: 10px 5px;
  border-bottom: 1px solid #aaa;
}

.checked {
  width: 20px;
  display: flex;
  justify-content: center;
 align-items: center;

}
.item-img img {
  width: 80px;
  height: 100px;
  display: flex;
  padding: 0px 10px;
  border-radius: 10%;
}
.item-info {
  margin-top:15px;
  font-size: 14px;
  color: #aaa;
  overflow: hidden;
  position: relative;
}
.item-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-desc {
 margin-top:20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-bottom-info{
  margin-top: 15px;
  
}
.item-price{
  float: left;
  color: red;
  left: 10px;
}
.item-slideCount{
  float: right;
  
 
}
</style>
