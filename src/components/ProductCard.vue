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
      <div class="product">
        { this.products.map(product => {
          return (
            <div class="product-card">
              <img src={require(`../assets${product.thumbnail}`)} alt="Img" />
              <h3>{product.name}</h3>
              <p>{product.price} SEK</p>
            </div>
          )
        })}
      </div>
    )
  }
}
</script>

<style>
.product-card{
  min-width: 165px;
  width: 22%;
  max-width: 25%;
  text-align: left;
  float: left;
  margin-right: 30px;
  line-height: 24px;
  position: relative;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 0px;
}

p {
  margin-top: 0px;
}

img {
  width: 100%;
}

html {
  margin-bottom: 200px;
}
</style>
