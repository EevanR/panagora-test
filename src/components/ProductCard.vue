<script>
import products from '../data/products.json'

export default {
  name: 'ProductCard',

  data () {
    return {
      products: products
    }
  },

  render () {
    return (
      <div>
        { this.products.map(product => {
          return (
            <div>
              <img src={require(`../assets${product.thumbnail}`)} alt="Img" />
              <h3>{product.name}</h3>
              <p>{product.price} SEK</p>
            </div>
          )
        })
        }
      </div>
    )
  }
}
</script>

<style>

</style>
