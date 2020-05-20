<template>
  <div id="detail_goods_info" v-if="Object.keys(detailInfo).length != 0">
    <div class="goods_info_desc">
      <div style="float: left;" class="desc_line">
        <i class="desc_dot"></i>
      </div>
      <div class="desc_text">
        {{ detailInfo.desc }}
      </div>
      <div style="float: right;" class="desc_line">
        <i style="right: 0px;" class="desc_dot"></i>
      </div>
    </div>
    <div class="goods_info_key">
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="goods_info_imgs">
      <img :src="item"
        alt=""
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="loadImg"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    data(){
      counter:0;
      imageLength:0
    }
  },
  methods: {
    loadImg() {
     
       this.$emit("loadImgEvent");

  
    }
  }
};
</script>
<style scoped>
#detail_goods_info {
  font-size: 12px;
}
.goods_info_desc {
  font-size: 10px;
  padding: 8px 5px;
}
.desc_line {
  width: 100px;
  height: 100px;
  background-color: gray;
  position: relative;
}

.desc_dot {
  position: absolute;
  top: -8px;
  display: inline-block;
  width: 80px;
  height: 80px;
  background-color: black;
  border-radius: 50%;
}

.desc_text {
  padding: 15px 0;
  color: gray;
}

.goods_info_key {
  padding: 10px 7px;
}
.goods_info_imgs img {
  width: 100%;
}
</style>
