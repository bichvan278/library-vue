<template>
    <div class="book-list">
        <header-comp></header-comp>
        <h2 style="color: black;">BOOKS</h2>
        <div class="container">
            <div class="row" style="margin-left: 10px;">
                <div class="book-nav">
                    <router-link :to="{name: 'addbook'}" class="btnAddbook"><button class="btnAddbook">+ ADD NEW BOOK</button></router-link>
                    <div class="wrap">
                        <div class="search">
                            <input type="text" class="searchTerm" placeholder="What are you looking for?">
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- List of all book -->
                <table class="table" style=" margin-top: 30px;"> 
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TÊN SÁCH</th>
                            <th scope="col">HÌNH SÁCH</th>
                            <th scope="col">SỐ LƯỢNG</th>
                            <th scope="col">EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.id">
                            <td scope="row">{{book.id}}</td>               
                            <td>{{book.name}}</td>
                            <td>{{book.author}}</td>
                            <td>{{book.qty}}</td>
                            <td>
                                <b-button class="btn">EDIT</b-button>
                                <b-button class="btn" variant="danger">DELETE</b-button>
                            </td>
                        </tr>     
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from '../partial/HeaderComp.vue';

export default {
    name:'BookList',
    data() {
      return {
        books: [
          {id: "1", name: "LAP TRINH DI DONG", author: "Khoa CNTT-TT", qty: "2"},
          {id: "2", name: "LAP TRINH CAN BAN", author: "Khoa CNTT-TT", qty: "5"},
          {id: "3", name: "LAP TRINH HUONG DOI TUONG", author: "Khoa CNTT-TT", qty: "6"},
          {id: "4", name: "LAP TRINH WEB", author: "Khoa CNTT-TT", qty: "5"}
        ]
      }
    },
    components: {
        HeaderComp
    }
}
</script>

<style>
th, td {
    text-align: center;
}

.btnAddbook {
    margin-top: 20px; 
    padding: 3px 15px;
    border-color:rgb(42, 42, 100);
    color: black;
    background-color: white;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid rgb(42, 42, 100);
  border-right: none;
  padding: 5px;
  height: 35px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: rgb(42, 42, 100);
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid rgb(42, 42, 100);
  background: rgb(42, 42, 100);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
    margin-top: -110px;
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>