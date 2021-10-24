<template>
    <div class="add-book">
        <header-comp></header-comp>
        <div class="container">
            <div class="row">
                <h2 style="color: black">ADD NEW BOOK</h2>
                <hr>
                        <form action="#" class="frmAddbook">
                            <div class="form-group">
                                <label for="usr">Name:</label>
                                <input required="true" type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Author:</label>
                                <input required="true" type="text" class="form-control" id="author">
                            </div>
                            <div class="form-group">
                                <label for="email">Type:</label>
                                <input required="true" type="text" class="form-control" id="type">
                            </div>
                            <div class="form-group">
                                <label for="email">QTY:</label>
                                <input required="true" type="text" class="form-control" id="qty">
                            </div>
                            <div class="form-group">
                                <label for="lend-date">Date Add:</label>
                                <input type="date" class="form-control" id="date-add">
                            </div>
                            <div class="form-group">
                                <label for="pay-date">Time Add:</label>
                                <input required="true" type="time" class="form-control" id="time-add">
                            </div>
                        
                            <div class="form-group">
                                <b-button type="submit" name="btnAdd" class="btnAdd" value="ADD">ADD</b-button>
                            </div>
                        </form>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from '../partial/HeaderComp.vue';

export default {
    name:'AddBook',
    data() {
      return {
      }
    },
    components: {
        HeaderComp
    }
}
</script>

<style>
.btnAdd
{
    width: 10%;
    border-radius: 1rem;
    padding: 1%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
    margin-left: 300px;
}

.frmAddbook{
    width: 60%;
    margin-left: 220px;
}
</style>