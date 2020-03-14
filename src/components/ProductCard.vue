<script>
import products from '../data/products.json'
import About from './About'

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
      <div>
        <div class="home-headings">
          <a onClick={() => this.updatePage('list')}><h3 id="products">Products</h3></a>
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

.home-headings {
  display: inline-flex;
}

#about {
  margin-left: 35px;
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
