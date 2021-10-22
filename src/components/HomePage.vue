<template>
  <div class="home">
    <div class="nav-head">
      <header-comp></header-comp>
    </div>
    <div class="view-content">
      <book-card></book-card>
    </div>
  </div>
</template>

<script>
import HeaderComp from './partial/HeaderComp.vue';
import BookCard from './book/BookCard.vue';

export default {
  name:'HomePage',
  components: {
    HeaderComp,
    BookCard
  }
};
</script>