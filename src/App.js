import Home from './components/Home'
import Vue from 'vue'
import PanagoraLogo from './components/PanagoraLogo'

const App = Vue.extend({
  name: 'App',
  render () {
    return (
      <div>
        <PanagoraLogo />
        <Home />
      </div>
    )
  }
})

export default App
