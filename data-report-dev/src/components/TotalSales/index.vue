<template>
  <common-card
    title="累計銷售額"
    value="$ 32,039,155"
  >
    <template>
      <div class="compare"></div>
    </template>
    <template v-slot:footer>
      <span>昨日銷售額</span>
      <span class="money">$ 31,000,123</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
  .compare {
    height: 100%;
    background: yellow;
  }
  span {
    font-size: 12px;
  }
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
