<script>
import ProductCard from './ProductCard'

export default {
  name: 'Home',

  render () {
    return (
      <div>
        <div class="home-headings">
          <h3 id="products">Products</h3>
          <h3 id="about">About</h3>
        </div>
        <div class="container-grid">
          <ProductCard />
        </div>
      </div>
    )
  }
}

</script>

<style scoped>
.container-grid {
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 40px;
  justify-content: center;
}

.home-headings {
  display: inline-flex;
}

#about {
  margin-left: 35px;
}
</style>
