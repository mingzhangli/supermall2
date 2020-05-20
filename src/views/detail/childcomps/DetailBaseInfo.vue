<template>
  <div class="base-info">
    <div >{{goods.title}}</div>
    <div class="Price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span class="columns0" v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
    </div>
    <div class="services">
      <div v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name:'DetailBaseInfo',
  components: {
    
  },
  props:{
    goods:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return { 
     
    }
  },
  methods: {
    
  }
}
</script>

<style>
  .base-info{
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
  
  }
  .newPrice{
    font-size: 25px;
    color:var(--color-high-text)
  }
  .oldPrice{
    text-decoration:line-through;
    font-size:10px;
    color: #C0C0C0;
  }
  .Price{
    margin-top: 12px;
    margin-bottom: 15px;
  }
  .discountDesc{
    background-color: var(--color-high-text);
    color: white;
    margin: 10px;
    border-radius: 5px; 
  }
  .info-other{
    color:#C0C0C0;
    font-size:15px;
    border-bottom: 1px solid  #dbdbdb;
    padding: 15px 2px 10px 2px;
    justify-content: space-between;
    display: flex;
  }
  .columns0{
    float: left;
  }

  .columns2{
    float: right;

  }
  .services {
    color:black;
    font-size:8px;
    border-bottom: 2px solid  #dbdbdb;
    padding: 15px 2px 10px 2px;
    justify-content: space-between;
    display: flex;

}
.services img {
  width: 10px;
}
</style>
