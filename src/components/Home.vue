<script>
import ProductCard from './ProductCard'

export default {
  name: 'Home',

  render () {
    return (
      <div>
        <div class="container">
          <ProductCard />
        </div>
      </div>
    )
  }
}

</script>

<style scoped>
.container {
  /* width: 100%; */
  justify-content: center;
}
</style>
