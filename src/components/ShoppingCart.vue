<script>
export default {
  name: 'ShoppingCart',

  data () {
    return {
      items: null,
      showCart: false,
      prices: [],
      total: 0
    }
  },

  methods: {
    getCart () {
      this.items = JSON.parse(localStorage.getItem('cart'))
      debugger
      this.showCart = true
      this.getTotal()
    },

    getTotal () {
      this.prices = []
      let items = this.items
      let prices = this.prices
      items.map(item => { prices.push(item.item.price) })
      this.total = prices.reduce((a, b) => a + b, 0)
    },

    clearCart () {
      localStorage.clear()
      this.showCart = false
      this.prices = []
      this.total = 0
    }
  },

  render () {
    let items = this.items
    let showCart = this.showCart
    let total = this.total
    return (
      <div>
        { showCart === false ? (
          <i class="fa fa-shopping-cart"
            onClick={() => this.getCart()}
          ></i>
        ) : (
          <div class="cart">
            <p onClick={() => { this.showCart = false }}id="exit">X</p>
            { this.items === null ? (
              <p>Cart Empty</p>
            ) : (
              items.map(item => {
                return (
                  <div class="item">
                    <img src={require(`../assets${item.item.thumbnail}`)} alt="Img" />
                    <p>{item.item.name}</p>
                    <p id="price">{item.item.price} {item.item.currency}</p>
                    <p>Size {item.size}</p>
                  </div>
                )
              })
            ) }
            <p>Total <span style="float: right">{total} SEK</span></p>
            <p onClick={() => this.clearCart()} id="clear">CLEAR CART</p>
          </div>
        )}
      </div>
    )
  }
}
</script>

<style scoped>
img{
  width: 100px;
}

p {
  font-size: 16px;
}

i {
  font-size: 30px;
  cursor: pointer;
}

#price {
  color: #36c092;
}

#clear {
  float: right;
  margin-top: -5px;
  color: red;
  font-weight: 600;
  cursor: pointer;
}

#exit {
  margin-left: 95%;
  float: right;
  cursor: pointer;
}

.item {
  border-bottom: 1px solid black;
  margin-bottom: 15px;
}

.cart {
  padding: 10px 10%;
  background-color: white;
  min-width: 300px;
  max-width: 350px;
  min-height: 400px;
  max-height: 600px;
  overflow: scroll;
  border: 1px solid black;
}
</style>
