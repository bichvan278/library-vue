<template>
    <div class="ad-page">
        <div class="nav-head">
            <header-comp></header-comp>
        </div>
        <div class="container">
            <div class="row">
                <h2 style="color: black">This page for admin</h2>

                <b-container class="bv-example-row" style="margin-top: 15px;">
                    <b-row>
                        <b-col>
                            <router-link :to="{name: 'booklist'}" class="col-title">
                                <p class="col-title">BOOKS MANAGEMENT</p>
                            </router-link>
                        </b-col>
                        <b-col><p class="col-title">ASSIGN READER'S BOOK</p></b-col>
                        <b-col><p class="col-title">STATISTICAL</p></b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from './partial/HeaderComp.vue';

export default {
    name: 'AdminPage',
    components: {
        HeaderComp
    }
}
</script>

<style>
.col-title {
    text-decoration: none;
    text-align: center;
    font-size: x-large;
    color: black;
}
.col-title:hover {
    text-align: center;
    font-size: x-large;
    color: rgb(42, 42, 100);
}
</style>