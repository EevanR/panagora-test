<script>
import ProductCard from './ProductCard'

export default {
  name: 'Home',

  render () {
    return (
      <div>
        <h2>Products</h2>
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    padding: 0;
}

</style>
