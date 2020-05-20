export default {
  toAction(context,payload) {
    let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
      if(oldProduct){
        context.commit('addCount',oldProduct)
     }else{
      payload.slideCount = 1
      context.commit('addtoCart',payload)  
      
     }
  }
}