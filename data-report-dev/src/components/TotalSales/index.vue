<template>
  <common-card
    title="累計銷售額"
    value="$ 32,039,155"
  >
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日銷售額</span>
      <span class="emphasis">$ 31,000,123</span>
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
.compare-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-size: 12px;
    color: #666;
    .increase {
      margin: 0 0 3px 5px;
      border-width: 3px;
      border-color: transparent transparent red transparent;
      border-style: solid;
      width: 0;
      height: 0;
    }
    .decrease {
      margin: 3px 0 0 5px;
      border-width: 3px;
      border-color: green transparent transparent transparent;
      border-style: solid;
      width: 0;
      height: 0;
    }
  }
}
</style>
