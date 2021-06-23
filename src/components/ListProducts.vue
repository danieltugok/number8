<template>
  <b-container class="bv-example-row">
    <div class="products-list">
      
      <ul>
        <li 
          class="list-product"
          v-for="productItem in productList" 
          :key="productItem.ProductID"
        >

        
          <b-row align-h="center">

            <b-col cols="2">
              <img 
                class="product-image"
                :src="productItem.ThumbnailURL"
                :alt="productItem.Name"
              >
            </b-col>

            <b-col class="product-info" cols="8">
              <div class="info-product-item">
                <h2 class="product-name">{{productItem.Name}}</h2>

                <p class="price">${{productItem['Price']}}</p>
                <p class="old-price">${{productItem['Retail Price']}}</p>
              </div>
            </b-col>

            <b-col class="product-btn" cols="2">
              <b-button variant="success">
                <router-link 
                  :to="{ name: 'Product', params: { id: productItem.ProductID }}"
                >
                  View Details
                </router-link>
              </b-button>            
            </b-col>

          </b-row>  

          

        </li>
      </ul>

    </div>
  </b-container>
</template>

<script>

export default {
  name: 'ListProducts',

  props: {
    productList:{
      type: Array,
      default: null
    }
  },

  data () {
    return {
    }
  },



}
</script>


<style scoped>

  h1, h2 {
    font-weight: normal;
  }
  .btn a{
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  .list-product{
    border: 1px solid rgba(0,0,0,0.3);
    padding: 20px 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  .product-info{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-btn{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info-product-item{
    width: 100%;
    text-align: left;
  }
  .product-name{
    font-size: 40px;
    margin-bottom: 10px;
  }
  .price{
    float: left;
    font-size: 25px;
    margin-right: 5px;
  }
  .old-price{
    text-decoration: line-through;
  }

</style>
