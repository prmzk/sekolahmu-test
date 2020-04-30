<template>
    <b-col cols="3" class="mb-4">
        <b-popover :target="id" triggers="hover" placement="right">
            <template v-slot:title>{{name}}</template>
            <div class="mb-3 p-2 overflow-auto"  style="max-height: 40rem">
                <p style="font-size: 12px; font-family:'Lato', sans-serif; font-weight: bold" > {{abstract}}</p>
                <vue-markdown>{{description}}</vue-markdown>
            </div>
        </b-popover>
        <div class="product d-flex justify-content-center" style="background-color: white">
            <b-card
            :img-src="avatar"
            img-alt="Image"
            img-top
            img-height="200rem"
            tag="article"
            style="border: 0;"
            :id="id"
        >
            <b-card-text style="height: 3rem; padding: 0 !important" class="title-1">
            {{name}}
            </b-card-text>
            <b-card-text style="font-size: 12px; font-family: 'Lato', sans-serif; background-color: rgb(255, 211, 66); width: 5rem; border-radius: 10px" class="mt-2 d-flex justify-content-center">
                {{categoryName}}
            </b-card-text>
            <!-- <div style="height: 9rem" class="overflow-auto d-flex">
                <b-card-text style="font-family: 'Questrial', sans-serif; font-size: 12px; color: gray; ">
                {{abstract}}
                </b-card-text>
            </div> -->
            <div class="d-flex flex-row">
                <b-card-text class="title-1 d-flex align-items-center mr-3">
                {{parsePrice}}
                </b-card-text>
                <b-card-text style=" text-decoration: line-through; color: gray; font-size: 12px" class="title-1 d-flex align-items-center">
                {{parsePriceNormal}}
                </b-card-text>
            </div>
        </b-card>
        </div>
    </b-col>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'ProductCard',
  props: {
    msg: String,
    avatar: String,
    abstract: String,
    price: String,
    priceNormal: String,
    categoryName: String,
    name: String,
    description: String,
    id: String
  },
  computed: {
    parsePrice: function () {
      return 'Rp' + this.price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    },
    parsePriceNormal: function () {
      return 'Rp' + this.priceNormal.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style scoped>
.product{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: 500ms;
}
.product:hover{
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.4), 0 6px 30px 0 rgba(0, 0, 0, 0.2);

}
.title-1 {
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    color:  rgb(13, 4, 68);
}
::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: rgb(206, 206, 206);
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(199, 199, 199);
}
</style>
