export default {
  addCount(state,payload){
    payload.slideCount++
    },
   addtoCart(state,payload){
    state.carList.push(payload)
    payload.Checked= true;
   },
  

}