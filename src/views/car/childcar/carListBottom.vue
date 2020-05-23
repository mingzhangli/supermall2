<template>
 <div class="car-list-bottom">
   <div class="bottom-button">
     <check-button class="allChecked" :is-checked="isAllChecked" @click.native="checkClick"></check-button>
     <span>全选</span>
   </div>
   <div class="total-price">
     <span>合计</span>
     ￥{{totalPrice}}
   </div>
   <div class="calculate">
     去计算({{checkLength}})
   </div>
  
 </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton'
import {mapGetters} from 'vuex'
export default {
  name:'carListBottom',
  components: {
   checkButton
  },
  methods:{
    checkClick() {
        if(this.isAllChecked){
         this.carList.forEach(item => item.Checked=false)
        }else{
          this.carList.forEach(item => item.Checked=true)
        }
       }
     },
  computed: {
    ...mapGetters([
    'carLength','carList'
  ]),
    totalPrice() {
      return this.carList.filter(item => {
        return item.Checked
      }).reduce((preValue,item) => {
        return preValue + item.price*item.slideCount
      },0).toFixed(2)
    },
     checkLength() {
    return this.carList.filter(item => item.Checked).length
  },
     isAllChecked() {
       if( this.carList.length === 0){
         return false
       }else{
         return !this.carList.find(item => !item.Checked)
       }
     }
  }
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
margin-right: 10px;
align-items: center;
line-height: 20px;
display: flex;
width: 60px;
}
.allChecked{
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.total-price{
  display: flex;
  align-items: center;
  flex: 1;
}
.calculate{
  width: 90px;
  background: #ff8198;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
}
</style>
