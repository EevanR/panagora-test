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
    const { showItem, showDes, showDelivery, showPolicy } = this
    return (
      <div>
        { showItem !== null && (
          <div class="row">
            <div class="column">
              <img src={require(`../assets${showItem.image}`)} alt="Img" />
            </div>
            <div class="column">
              <h1>{showItem.name}</h1>
              <h2 id="price">{showItem.price} {showItem.currency}</h2>
              <Order itemInfo={showItem} />
              <h3 id="description">Description
                { showDes === false ? (
                  <span onClick={() => this.toggleDes(true)} class="arrow">&#8595;</span>
                ) : (
                  <span onClick={() => this.toggleDes(false)} class="arrow">&#8593;</span>
                )}
              </h3>
              { showDes === true && (<p>{showItem.description}</p>)}
              <div class="border"></div>
              <h3 id="description">Delivery Time
                { showDelivery === false ? (
                  <span onClick={() => this.toggleDelivery(true)} class="arrow">&#8595;</span>
                ) : (
                  <span onClick={() => this.toggleDelivery(false)} class="arrow">&#8593;</span>
                )}
              </h3>
              { showDelivery === true && (
                <p>30 mins! One of our fit staff members will PERSONALLY be sent to ride their bike
                to your address within 30mins. 31 mins and they're fired.</p>
              )}
              <div class="border"></div>
              <h3 id="description">Return Policy
                { showPolicy === false ? (
                  <span onClick={() => this.togglePolicy(true)} class="arrow">&#8595;</span>
                ) : (
                  <span onClick={() => this.togglePolicy(false)} class="arrow">&#8593;</span>
                )}
              </h3>
              { showPolicy === true && (
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

.column {
  float: left;
  width: 50%;
  padding: 10px;
  text-align: left;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

* {
  box-sizing: border-box;
}

@media screen and (max-width: 800px) {
  .column {
    width: 100%;
  }
}
</style>
