<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu mode="horizontal" :default-active="activeIndex" @select="onMenuSelect">
            <el-menu-item index="1">銷售額</el-menu-item>
            <el-menu-item index="2">訪問量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="開始日期"
              end-placeholder="結束日期"
              size="small"
              :picker-options="pickerOptions"
              ></el-date-picker>
          </div>
        </div>
      </template>
      <template>222</template>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {

            }
          },
          {
            text: '最近一個月',
            onClick (picker) {

            }
          },
          {
            text: '最近三個月',
            onClick (picker) {

            }
          }
        ]
      }
    }
  },
  methods: {
    onMenuSelect (idx) {
      this.activeIndex = idx
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
  }
}
</style>
