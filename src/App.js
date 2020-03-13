import HelloWorld from './components/HelloWorld'
import Vue from 'vue'

const App = Vue.extend({
  name: 'App',
  render () {
    return (
      <div>
        <HelloWorld />
      </div>
    )
  }
})

export default App
