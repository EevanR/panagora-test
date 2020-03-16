<script>
import products from '../data/products.json'
import About from './About'
import ShoppingCart from './ShoppingCart'

export default {
  name: 'ProductCard',

  data () {
    return {
      products: products,
      productId: null,
      page: 'list'
    }
  },

  methods: {
    requestItem (id) {
      this.productId = id
      this.page = 'about'
    },

    updatePage (e) {
      this.page = e
    }
  },

  render () {
    return (
      <div id="productList">
        <div class="shopping">
          <ShoppingCart />
        </div>
        <div class="home-headings">
          <h3 id="products"
            onClick={() => this.updatePage('list')}
          >Products
          </h3>
          <h3 id="about">About</h3>
        </div>
        <div class="product">
          { this.page === 'list' ? (
            <div>
              { this.products.map(product => {
                return (
                  <a onClick={() => this.requestItem(product.id)}>
                    <div class="product-card">
                      <img src={require(`../assets${product.thumbnail}`)} alt="Img" />
                      <h3>{product.name}</h3>
                      <p>{product.price} SEK</p>
                    </div>
                  </a>
                )
              })}
            </div>
          ) : (
            <About id={this.productId}/>
          )}
        </div>
      </div>
    )
  }
}
</script>

<style scoped>
.product-card{
  min-width: 165px;
  width: 22%;
  max-width: 25%;
  text-align: left;
  float: left;
  margin-left: 2.5%;
  line-height: 24px;
}

.home-headings {
  display: inline-flex;
  margin-bottom: 30px;
}

p {
  margin-top: 0px;
}

#products {
  margin-right: 30px;
  cursor: pointer;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 0px;
}

</style>
