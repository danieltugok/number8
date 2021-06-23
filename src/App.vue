<template>
  <div id="app">

    <router-view 
      :productList="productList"    
    /> 

  </div>
</template>

<script>
import productList from '@/productList.json'

export default {
  name: 'App',

  data () {
    return {
      productList: productList
    }
  },

}

</script>

<style>
  @import './assets/reset.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .product-image{
    float: left;

  }

  .list-product{
    display: block;
    width: 100%;
  }

  .btn-product{
    background-color: green;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    
  }

</style>
