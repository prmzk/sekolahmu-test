<template>
  <div class="home">
      <div>
        <b-jumbotron class="jumbo">
            <div class="jumbo-in shadow-lg">
                <p class="title-3">SEKOLAH BLENDED LEARNING PERTAMA DI INDONESIA</p>
                <p class="title-1">Kartu Prakerja</p>
                <p class="title-1">Belajar untuk Siap Bekerja!</p>
                <p class="mt-3 mb-5" style="font-family: 'Questrial', sans-serif;">Sekolah.mu menjadi simpul kolaborasi ratusan perusahaan dan organisasi yang telah dikurasi untuk berkarya, menyediakan program-program kurikulum yang sesuai kebutuhan.</p>
                <div class="d-flex">
                    <b-button style="border-radius: 20px; font-weight: bold; color: rgb(13, 4, 68); border-color: rgb(13, 4, 68); background-color: rgb(255, 211, 66);" class="mr-4 pr-4 pl-4 shadow">Ikut Pelatihan!</b-button>
                    <b-button style="border-radius: 20px; font-weight: bold; color: rgb(13, 4, 68); border-color: rgb(13, 4, 68); background-color: white;" class="mr-4 pr-4 pl-4 shadow">Info Kartu Pekerja</b-button>
                    <img src="../assets/prakerja.png"  style="height: 25px" class="mt-2"/>
                </div>
            </div>
        </b-jumbotron>
        <div style="widht: 100" class="d-flex justify-content-center align-items-center flex-column mt-5">
            <p class="title-2 mb-5" style="text-shadow: 0">Program Unggulan</p>
            <b-row style="width: 100vw; padding-left: 20%; padding-right: 20%;">
                <product-card v-for="(product, i) in data.data" :key="i"
                :avatar="product.avatar"
                :id="`pop-${product.id}`"
                :name="product.name"
                :abstract="product.abstract"
                :description="product.description"
                :price="product.price"
                :priceNormal="product.price_normal"
                :categoryName="product.category_name"
                ></product-card>
            </b-row>
        </div>
      </div>
  </div>
</template>

<script>
import data from '../data.json'
import ProductCard from './ProductCard'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    ProductCard
  },
  data () {
    return {
      data
    }
  }
}
</script>

<style scoped>
.jumbo {
  margin-right: 10rem;
  margin-left: 10rem;
  background:
    linear-gradient(
        rgba(0, 0, 0, 0.24),
        rgba(0, 0, 0, 0.2)
    ),
    url("https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1361&q=80");
  background-size: cover;
  background-position-y: 25%;
  height: 40rem;
  display: flex;
  justify-content: flex-end;
  padding-top: 10rem;
  padding-right: 5rem;
}
.jumbo-in {
    width: 37rem;
    height: 25rem;
    background-color: rgb(244, 248, 252);
    border-radius: 10px;
    padding: 3rem;
    color:  rgb(13, 4, 68)
}
.title-1 {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    letter-spacing: -1px;
    font-size: 36px;
    margin: 0;
    color:  rgb(13, 4, 68);
    text-shadow: 2px 2px 5px #c4c1c1
}
.title-2 {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 36px;
    margin: 0;
    color:  rgb(13, 4, 68);
}

.title-3 {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin: 0;
    color:  rgb(13, 4, 68);
    text-shadow: 2px 2px 5px #c4c1c1
}
</style>
