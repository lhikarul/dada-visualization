import Vue from 'vue'
import { Card, Row, Col, Menu, MenuItem, RadioGroup, RadioButton, DatePicker } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/zh-TW'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(DatePicker)
