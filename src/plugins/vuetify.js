import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#CE5C82',
    secondary: '#FCDF60',
    accent: '#232D2F',
    info: '#F9F7CD',
    success: '#006B56',
    warning: '#A99F34'
  }
})
