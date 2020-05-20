<template>
  <div id="detail_params">
      <table class="params_rule">
        <tbody>
          <tr :key="index" v-for="(item,index) in paramInfo.sizes[0]" >
            <td :key="td_index" v-for="(td_index,td_item) in item.length-1">{{item[td_item]}}</td>
          </tr>
        </tbody>
      </table>
    <table class="params_set">
      <tbody>
        <tr v-for="(item, index) in paramInfo.infos" :key="index">
          <th>{{ item.key }}</th>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
    <div class="info_img" v-if="paramInfo.image != ''">
      <img :src="paramInfo.image" alt="" />
    </div>
    </div>
  </div>
</template>


<script>


export default {
  props: {
    paramInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
#detail_params {
  font-size: 10px;
  padding: 8px 5px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.2);
}

.params_rule,
.params_set {
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.5);
  border-collapse: collapse; /* 可以合并邻近的边框，且可以让tr显示出边框 */
  margin: 0 auto;
  margin-bottom: 5px;
  width: 13.568rem;
}
.params_rule tr,
.params_set tr {
  border-bottom: 0.5px solid rgba(128, 128, 128, 0.5);
}

.params_rule th {
  text-align: left;
  padding-right: 10px;
  white-space: nowrap;
}
.params_rule td {
  padding: 5px;
}

.params_set th {
  text-align: left;
  padding: 5px 30px 5px 0;
  white-space: nowrap;
}
.params_set td {
  color: var(--color-high-text);
}

.info_img img {
  width: 100%;
}
</style>
