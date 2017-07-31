<template>
  <div id="app">
    <div class="page">
      <header>
        <Topbar/>
      </header>
      <main>
        <ResumeEditor/>
        <ResumePreview/>
      </main>
    </div>
    <Dialog/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'

import store from './store/index'
// import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'

export default {
  name: 'app',
  store,
  components: { Topbar, ResumeEditor, ResumePreview },
  created () {
    document.body.insertAdjacentHTML('afterbegin', icons)
    let state = localStorage.getItem('state')
    if (state) {
      state = JSON.parse(state)
    }
    this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser())
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    > main{
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      width: 100%; /* 试试不加这句会怎样 */
      align-self: center;
    }
  }
  #topbar{
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    height:64px;
  }
  #resumeEditor{
    width: 35%;
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
  #resumePreview{
    width: 61.66667%;
    flex-grow: 1;
    margin-left: 16px;
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }
</style>
