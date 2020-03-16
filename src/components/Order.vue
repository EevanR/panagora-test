<script>
import data from '../data/product_sizes_shoes.json'
import ShoppingCart from './ShoppingCart'

export default {
  name: 'Order',
  props: {
    item: Object
  },

  data () {
    return {
      shoeSizes: data.availableSizes,
      itemInfo: this.$attrs.itemInfo,
      selected: null,
      cart: 0
    }
  },

  methods: {
    sendToCart () {
      const itemInfo = {item: this.itemInfo, size: this.shoeSizes[this.selected - 1].size}
      let cartItems = []
      if (localStorage.getItem('cart')) {
        cartItems = JSON.parse(localStorage.getItem('cart'))
      }
      cartItems.push([Math.floor(Math.random() * 1000), itemInfo])
      localStorage.setItem('cart', JSON.stringify(cartItems))
      this.cart += 1
    }
  },

  render () {
    let selected = this.selected
    return (
      <div>
        <div class="shopping">
          <ShoppingCart cart={this.cart}/>
        </div>
        <div class="product-sizes">
          {this.shoeSizes.map(size => {
            return (
              <a onClick={() => { this.selected = size.id }}>
                { selected === size.id ? (
                  <p class="sizes-active">{size.size}</p>
                ) : (
                  <p class="sizes">{size.size}</p>
                )}
              </a>
            )
          })}
        </div>
        { selected === null ? (
          <p class="add-cart-button">ADD TO CART</p>
        ) : (
          <p id='active' class="add-cart-button" onClick={() => this.sendToCart()}
          >ADD TO CART
          </p>
        )}
      </div>
    )
  }
}
</script>

<style scoped>
.product-sizes {
  margin: 0 0 .625rem;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(6.375rem,1fr));
  grid-gap: .625rem;
  flex-wrap: wrap;
  padding-left: 0;
}

.sizes {
  text-align: center;
  background-color: black;
  padding: 13px 0;
  margin: 0 0;
  color: white;
}

.sizes:hover {
  background-color: #36c092;
}

.add-cart-button {
  text-align: center;
  padding: 20px 0;
  min-width: 170px;
  background-color: black;
  color: white;
  width: 50%;
  font-weight: 600;
  margin-bottom: 30px;
}

#active.add-cart-button {
  background-color: #36c092;
  cursor: pointer;
}

.sizes-active {
  color: white;
  text-align: center;
  background-color: #36c092;
  padding: 13px 0;
  margin: 0 0;
}
</style>
