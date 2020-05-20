<template>

  <div class="tabControl">
    <div :key="index" v-for="(item,index) in titles"class="tabControlItem" 
    @click="itemClick(index)":class="{active: index === currentIdenx}" >
      <span>{{item}}</span>
    </div>
  </div>
 

</template>


<script>


export default {
  name:'TabControl',
  data() {
    return {
      currentIdenx:0
    }
  },
 props: {
   titles: {
     type:Array,
     default() {
       return []
     }
   }
 },
  methods:{
     itemClick(index){
       this.currentIdenx=index;
       this.$emit('tabEvent',index)
     }
   }
 
}
</script>

<style>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 14px;
  line-height: 44px;
  height: 44px;
  background-color: white;
  
}
.tabControlItem {

  flex: 1;
  
}
.tabControlItem span {

  padding: 5px;
}
.active{
  color: var(--color-high-text);

}
.active span{
  border-bottom: 3px solid var(--color-tint) 
}
</style>
