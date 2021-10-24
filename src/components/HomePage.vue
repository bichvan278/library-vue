<template>
  <div class="home">
    <div class="nav-head">
      <header-comp></header-comp>
    </div>
    <div class="container page-wrapper">
      <div class="page-inner">
        <div class="row" style=" margin-left: 25px;">
          <book-card  v-for="book in books" :key="book.id"
                      v-on:add-books="addBooks(book)"
                      :book="book"></book-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from './partial/HeaderComp.vue';
import BookCard from './book/BookCard.vue';

export default {
  name:'HomePage',
  data () {
      return {
        cart: [],
        books: [
          {id: "1", name: "LAP TRINH DI DONG", author: "Khoa CNTT-TT", qty: "2"},
          {id: "2", name: "LAP TRINH CAN BAN", author: "Khoa CNTT-TT", qty: "5"},
          {id: "3", name: "LAP TRINH HUONG DOI TUONG", author: "Khoa CNTT-TT", qty: "6"},
          {id: "4", name: "LAP TRINH WEB", author: "Khoa CNTT-TT", qty: "5"}
        ]
      };
  },
  methods: {
      addBooks (book) {
        console.log(book);
        this.cart.push(book);
        this.$emit("addBooks",book);
        alert("{{cart.length}} book in your cart!");
      }
  },
  components: {
    HeaderComp,
    BookCard
  }
};
</script>

<style scoped>
.page-wrapper {
  height: 100%;
  display: table;
}

.page-wrapper .page-inner {
  display: table-cell;
  vertical-align: middle;
}
</style>