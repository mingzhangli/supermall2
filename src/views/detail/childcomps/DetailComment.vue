<template>
  <div id="comment">
    <div class="comment_title">
    <span class="comment_header">用户评价</span>
    <span class="comment_header_more">更多</span>
    </div>
    <div class="comment_info">
    <div class="info">
      <img :src="comment.user.avatar" alt="" />
      <span>{{comment.user.uname}}</span>
    </div>
    <div class="comment_content">
        <div class="content">{{ comment.content }}</div>
        <p class="content_info">
          {{ comment.created | dateShow }} {{ comment.style }}
        </p>
      </div>
    </div>
    <div class="shop_reply" v-if="comment.explain != null">
      {{ comment.explain }}
    </div>
    <div class="comment_img">
          <img
        :src="item"
        alt=""
        v-for="(item, index) in comment.images"
        :key="index"
      />
    </div>
  </div>
</template>


<script>
import {formatDate} from '../../.././common/untils.js'

export default {
  props:{
    comment:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    dateShow(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
}
</script>

<style scoped>
#comment{
  padding: 8px 5px ;
}
.comment_title{
  position: relative;
  padding: 4px 2px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.3);

}
.comment_header_more{
  position: absolute;
  right: -1px;
}
.info{
  padding: 5px 3px;
  display: flex;
  line-height: 40px;
}
.info img{
  border: 0.5px solid rgba(128, 128, 128, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.info span{
  margin-left: 15px;
}
.comment_content{
  padding: 10px 3px;
}
.content{
  padding: 5px 3px;
}
.content_info{
  color: rgba(150, 150, 128, 0.8);
}
.shop_reply{
   border-top: 1px solid rgba(128, 128, 128, 0.4);
}
.comment_img img {
  margin-right: 5px;
  width: auto;
  height: 60px;
}
</style>
