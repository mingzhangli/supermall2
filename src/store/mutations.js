export default {
  addCount(state,payload){
    payload.slideCount++
    },
   addtoCart(state,payload){
    payload.Checked= true;
    state.carList.push(payload)
    
   },
  

}