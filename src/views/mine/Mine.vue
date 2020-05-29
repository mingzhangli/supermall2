<template>
<div>
  <div class="main">
    <div class="aaa"></div>
    <div class="bbb">sdsdasdsa</div>
  </div>
  
</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name:'Mine',
  components:{
    Scroll
  },
}
</script>

<style scoped>
.main{
  display: flex;
  flex:1;
}
.aaa{
  width: 25%;
  height: 200px;
  background: red;
  position: fixed;
  border: 2px solid red;

}
.bb {

}
</style>
