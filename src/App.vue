<script>
import Home from './components/Home'
import PanagoraLogo from './assets/PanagoraLogo'

export default {
  name: 'App',

  render () {
    return (
      <div class="container">
        <div class="logo">
          <PanagoraLogo />
        </div>
        <Home />
      </div>
    )
  }
}

</script>

<style scoped>

.container {
  padding: 50px 7%;
  text-align: center;
}

.logo {
  margin-bottom: 10px;
}
</style>
