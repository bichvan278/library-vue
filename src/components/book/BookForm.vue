<template>
    <div class="book-form">
        <div class="nav-head">
            <header-comp></header-comp>
        </div>
        <div class="container">
            <div class="row">
                <!-- Thong tin nguoi muon -->
                <div class="col-md-6">
                    <p class="title">Thông tin người mượn</p>
                    <hr>
                    <form action="#">
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input required="true" type="text" class="form-control" id="usr">
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input required="true" type="email" class="form-control" id="email">
                        </div>
                        <div class="form-group">
                            <label for="lend-date">Borrowed Date:</label>
                            <input type="date" class="form-control" id="lend-date">
                        </div>
                        <div class="form-group">
                            <label for="pay-date">Pay date:</label>
                            <input required="true" type="date" class="form-control" id="pay-date">
                        </div>
                       
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnConfirm" value="CONFIRM" />
                        </div>
                    </form>
                </div>
                <!-- Thong tin muon sach -->
                <div class="col-md-6">
                    <p class="title">Thông tin chi tiết sách</p>
                    <hr>
                    <table class="table" v-for="(item, index) in cart" :key="index"> 
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TÊN SÁCH</th>
                            <th scope="col">HÌNH SÁCH</th>
                            <th scope="col">SỐ LƯỢNG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">{{item.id}}</td>               
                            <td>{{item.name}}</td>
                            <td>img</td>
                            <td>1</td>
                        </tr>     
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from './../partial/HeaderComp.vue';

export default {
    name: 'BookForm',
    props: ["cart"],
    components: {
        HeaderComp
    }
};
</script>

<style>
.title {
    text-align: left;
    font-size: 20px;
    text-transform: uppercase;
    color: rgb(124, 123, 123);
}

.info-text {
    text-align: center;
    color: black;
    font-size: 16px;
    text-transform: uppercase;
}

.info-text1{
    text-align: left;
    font-size: 13px;
    color: rgb(65, 64, 64);
}

.btnConfirm
{
    width: 20%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
    margin-left: 230px;
}
</style>