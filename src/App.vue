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

<style>
.container {
  padding: 20px 3%;
  text-align: center;
}

.logo {
  margin-top: 10px;
}

a {
  cursor: pointer;
}

img {
  width: 100%;
}

.shopping {
  position: fixed;
  font-size: 30px;
  z-index: 100;
  right: 0;
  top: 30px;
}

html {
  margin-bottom: 200px;
}

body {
  font-family: LL Circular,sans-serif;
}
</style>
