<script>
import axios from 'axios'
import Order from './Order'

export default {
  name: 'About',
  props: {
    id: Number
  },

  data () {
    return {
      showItem: null,
      showDes: false,
      showDelivery: false,
      showPolicy: false
    }
  },

  methods: {
    productInfo () {
      axios.get(`/static/products/${this.id}.json`)
        .then(response => { this.showItem = response.data })
        .catch(err => { this.showItem = err })
    },

    toggleDes (e) {
      this.showDes = e
    },

    toggleDelivery (e) {
      this.showDelivery = e
    },

    togglePolicy (e) {
      this.showPolicy = e
    }
  },

  created () {
    this.productInfo()
  },

  render () {
    let item = this.showItem
    let des = this.showDes
    let delivery = this.showDelivery
    let policy = this.showPolicy
    return (
      <div>
        { item !== null && (
          <div class="grid-container">
            <div class="grid-item">
              <img src={require(`../assets${item.image}`)} alt="Img" />
            </div>
            <div class="grid-item">
              <h1>{item.name}</h1>
              <h2 id="price">{item.price} {item.currency}</h2>
              <Order itemInfo={item} />
              <h3 id="description">Description
                { des === false ? (
                  <a onClick={() => this.toggleDes(true)}><span id="arrow">&#8595;</span></a>
                ) : (
                  <a onClick={() => this.toggleDes(false)}><span id="arrow">&#8593;</span></a>
                )}
              </h3>
              { des === true && (<p>{item.description}</p>)}
              <div class="border"></div>
              <h3 id="description">Delivery Time
                { delivery === false ? (
                  <a onClick={() => this.toggleDelivery(true)}><span id="arrow">&#8595;</span></a>
                ) : (
                  <a onClick={() => this.toggleDelivery(false)}><span id="arrow">&#8593;</span></a>
                )}
              </h3>
              { delivery === true && (
                <p>30 mins! One of our fit staff members will PERSONALLY be sent to ride their bike
                to your address within 30mins. 31 mins and they're fired.</p>
              )}
              <div class="border"></div>
              <h3 id="description">Return Policy
                { policy === false ? (
                  <a onClick={() => this.togglePolicy(true)}><span id="arrow">&#8595;</span></a>
                ) : (
                  <a onClick={() => this.togglePolicy(false)}><span id="arrow">&#8593;</span></a>
                )}
              </h3>
              { policy === true && (
                <p>None. You cannot return the shoes.</p>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

</script>

<style scoped>
img {
  width: 100%;
}

#price{
  margin: 35px 0;
  color: darkgreen;
}

#description{
  margin-bottom: 30px;
}

#arrow {
  float: right;
}

.border {
  border-bottom: 1px solid black;
  margin-bottom: 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 20px;
  text-align: left;
}
</style>
