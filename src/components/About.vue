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
                  <span onClick={() => this.toggleDes(true)} class="arrow">&#8595;</span>
                ) : (
                  <span onClick={() => this.toggleDes(false)} class="arrow">&#8593;</span>
                )}
              </h3>
              { des === true && (<p>{item.description}</p>)}
              <div class="border"></div>
              <h3 id="description">Delivery Time
                { delivery === false ? (
                  <span onClick={() => this.toggleDelivery(true)} class="arrow">&#8595;</span>
                ) : (
                  <span onClick={() => this.toggleDelivery(false)} class="arrow">&#8593;</span>
                )}
              </h3>
              { delivery === true && (
                <p>30 mins! One of our fit staff members will PERSONALLY be sent to ride their bike
                to your address within 30mins. 31 mins and they're fired.</p>
              )}
              <div class="border"></div>
              <h3 id="description">Return Policy
                { policy === false ? (
                  <span onClick={() => this.togglePolicy(true)} class="arrow">&#8595;</span>
                ) : (
                  <span onClick={() => this.togglePolicy(false)} class="arrow">&#8593;</span>
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
  color: #36c092;
}

#description{
  margin-bottom: 30px;
}

.arrow {
  float: right;
  cursor: pointer;
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
