<template>
  <div class="check-button" :class="{ check: isChecked }" @click="ColorClick">
    <img src="~assets/img/car/tick.svg" />
  </div>
</template>

<script>


export default {
  name:'checkButton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
}
</script>

<style>
.check-button {

 
 border: 1px solid #aaa;
 border-radius: 50%;
  }
.check{
background: red;
border-color: red;


}
</style>
