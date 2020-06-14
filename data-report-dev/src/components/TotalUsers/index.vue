<template>
  <common-card
    title="累計用戶數"
    value="2,039,155"
  >
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">8.73%</span>
        <div class="increase"></div>

        <span class="month">月同比</span>
        <span class="emphasis">3.73%</span>
        <div class="decrease"></div>

      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: '總量',
            barWidth: 10,
            data: [100],
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: '總量',
            data: [250],
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            stack: '總量',
            data: [100],
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M531.2 354.133333l281.6 281.6c10.666667 10.666667 14.933333 21.333333 10.666667 27.733334-4.266667 8.533333-12.8 12.8-27.733334 12.8h-569.6c-14.933333 0-25.6-4.266667-27.733333-12.8-4.266667-8.533333 0-17.066667 10.666667-27.733334l281.6-281.6c4.266667-4.266667 12.8-8.533333 19.2-8.533333s17.066667 4.266667 21.333333 8.533333z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M128 320.001l383.744 383.744 383.744-383.744h-767.488z',
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;
  }
  .month {
    margin-left: 10px;
  }
</style>
