import Vuex from 'vuex'
import Vue from 'vue'

import objectPath from 'object-path'

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' }
      ],
      profile: {
        name: '姓名',
        city: '城市',
        title: '描述'
      },
      workHistory: [
        { company: '公司名称1', content: ` 前端开发
        我的主要工作如下:  
        1.完成既定产品需求。
         2.修复 bug。` },
        { company: '公司名称2', content: 'iOS开发' }
      ],
      education: [
        { school: '湖南理工学院', content: '理工科' },
        { school: '毕业学院' }
      ],
      projects: [
        { name: 'Bootstrap后台框架搭建', content: `栅格系统，响应式表格，图表展示` },
        { name: '项目描述', content: '展示企业产品，新闻' }
      ],
      awards: [
        { name: '优秀员工', content: '年度优秀员工考核奖' },
        { name: '获奖信息', content: '年度优秀员工考核奖' }
      ],
      contacts: [
        { contact: 'phone', content: '13203011943' },
        { contact: 'qq', content: '1044076780' },
        { contact: 'Email', content: 'zpy1044076780@gmail.com' }
      ]
    }
  },
  mutations: {
    initState (state, payload) {
      Object.assign(state, payload)
    },
    switchTab (state, payload) {
      state.selected = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume (state, {path, value}) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser (state, payload) {
      Object.assign(state.user, payload)
    },
    removeUser (state) {
      state.user.id = ''
    }
  }

})
