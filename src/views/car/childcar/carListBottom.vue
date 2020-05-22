<template>
 <div class="car-list-bottom">
   <div class="bottom-button">
     <check-button class="allChecked"></check-button>
     <span>全选</span>
   </div>
   
  
 </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton'
export default {
  name:'carListBottom',
  components: {
   checkButton
  },
}
</script>

<style scoped>
.car-list-bottom{

  background: #eee;
  height: 40px;
  display: flex;
  position: relative;
}
.bottom-button{
  margin-left: 10px;
align-items: center;
line-height: 20px;
display: flex;
}
.allChecked{
  width: 20px;
  height: 20px;
  line-height: 20px;
}
</style>
