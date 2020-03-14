<script>
import axios from 'axios'

export default {
  name: 'About',
  props: {
    id: Number
  },

  data () {
    return {
      showItem: null
    }
  },

  methods: {
    productInfo () {
      axios.get(`/static/products/${this.id}.json`)
        .then(response => { this.showItem = response.data })
        .catch(err => console.log(err))
    }
  },

  created () {
    this.productInfo()
  },

  render () {
    return (
      <div>
        { this.showItem !== null && (
          <p>{this.showItem.name}</p>
        )}
      </div>
    )
  }
}

</script>

<style>

</style>
