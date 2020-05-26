export default {
  toAction(context,payload) {
    return new Promise((resolve,reject) => {

      let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
      if(oldProduct){
        context.commit('addCount',oldProduct)
        resolve('商品数量＋1')
     }else{
      payload.slideCount = 1
      context.commit('addtoCart',payload)
        resolve('添加了新的商品')
      
     }
    })
   
  }
}