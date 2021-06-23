<template>
  <b-container class="bv-example-row">
    <div class="Product">

      <b-row class="container-info" align-h="center" v-if="productItem">

        <b-col class="product-picture" cols="4">
          <img 
            class="product-image"
            :src="productItem.PictureURL"
            :alt="productItem.Name"
          >
          <b-button-group class="btn-pictures">
            <b-button variant="danger">Clerance</b-button>   
            <b-button variant="danger">Free Shipping</b-button>
          </b-button-group>   
        </b-col>

        <b-col class="product-info" cols="6">
          <h2 class="product-name">{{productItem.Name}}</h2>

          <div class="rating-star">
            <p>{{productItem.RatingAvg}}</p>
          </div>

          <p>{{productItem.Description}}</p>          
          
        </b-col>

        <b-col class="product-btn" cols="2">

          <p class="price">${{productItem['Price']}}</p>

          <p class="old-price">${{productItem['Retail Price']}}</p>

          <div class="stock-cart">
            <p v-if="productItem.Stock != 0">Stock: {{productItem.Stock}}</p>
            <p v-else class="out-of-stock">Out of Stock</p>

            <b-button @click="addToCart()" class="btn-add-to-cart" variant="success">
                Add to Cart
            </b-button>  
          </div>

        </b-col>

      </b-row>

      <b-row align-h="start" v-if="productItem">
        <b-col class="product-specification" cols="4">
          <p> <span>BRAND:</span> {{productItem.Brand}}</p>
          <p> <span>COLOR:</span> {{productItem.Color}}</p>
        </b-col>
      </b-row>

      


    </div>
  </b-container>
  
</template>

<script>

export default {
  name: 'Product',

  props: {
    id:{
      type: [String, Number],
      default: null
    },
    productList:{
      type: Array,
      default: null
    }
  },

  data () {
    return {
      productItem: null,     
     
    }
  },

  mounted(){
    this.selectProductItem();
  },

  methods:{
    selectProductItem(){
      this.productItem = this.productList.find((e) => e.ProductID == this.id);
    },
    
    addToCart(append = false) {
      this.$toasted.success('Product added successfully', { 
        theme: "toasted-primary", 
        position: "top-center", 
        duration : 4000,
        fullWidth: true,
      });
    }

  }



}
</script>

<style>
  .toasted{
    font-size: 30px !important;
    font-family: sans-serif;
    padding: 27px 20px !important;
    top: -39px !important;
  }
  
</style>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }  
  .product-picture{
    position: relative;
  }
  .btn-pictures{
    position: absolute;
    left: 75px;
    bottom: 10px;
  }
  .stock-cart{
    margin-top: 230px;
    text-align: center;
  }
  .btn a{
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  .price{
    float: left;
    font-size: 25px;
    margin-right: 5px;
  }
  .old-price{
    text-decoration: line-through;
  }
  .btn-add-to-cart{
    margin-top: 30px;
  }
  .container-info{
    margin-bottom: 15px;
    text-align: left;
  }
  .product-name{
    font-size: 40px;
    margin-bottom: 10px;
  }
  .out-of-stock{
    color: red;
  }
  .rating-star{
    margin-bottom: 35px;
  }
  .product-specification{
    display: flex;
    flex-direction: column;
  }
  .product-specification p{
    text-align: left;
  }
  .product-specification p span{
    font-weight: bold;
  }

</style>
