import { debounce } from "./untils"
export const itemListenerMinxin = {
  data() {
    return {
      itemImgListener:null,
    
    }
  },
  mounted() {
    // 防抖
      
      let refresh = debounce(this.$refs.scroll.refresh,200)
      this.itemImgListener = () => { 
        refresh() 
      }
      this.$bus.$on('itemImageLoad',this.itemImgListener)
    
    }
}