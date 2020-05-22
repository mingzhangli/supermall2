<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/car/tick.svg"  alt=""/>
  </div>
</template>

<script>


export default {
  name:'checkButton',
  props:{
    isChecked:{
      type:Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
 border: 1px solid #aaa;
 border-radius: 50%;
  }
.check{
background: #ff8198;
border-color: #ff8198;
}
</style>
