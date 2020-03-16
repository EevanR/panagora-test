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
  justify-content: center;
}
</style>
