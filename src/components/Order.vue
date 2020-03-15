<script>
import data from '../data/product_sizes_shoes.json'

export default {
  name: 'Order',

  data () {
    return {
      shoeSizes: data.availableSizes
    }
  },

  methods: {},

  render () {
    return (
      <div class="product-sizes">
        {this.shoeSizes.map(size => {
          return (
            <a>
              <p class="sizes">{size.size}</p>
            </a>
          )
        })}
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

.sizes{
  text-align: center;
  background-color: rgb(227, 225, 225);
  padding: 13px 0;
  margin: 0 0;
}
</style>
