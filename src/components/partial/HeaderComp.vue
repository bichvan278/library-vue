<template>
    <div class="header">
    <!-- Just an image -->
    <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
        <img src="./../../assets/img/logo1.png" alt="Kitten">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

                <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item right>
                <router-link :to="{name: 'bookform'}" class="icon-cart"><i class="fas fa-shopping-cart"></i></router-link>
            </b-nav-item>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item>
                <router-link :to="{name: 'profile'}">Profile</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>

        </b-navbar-nav>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp'
};
</script>

<style>
.icon-cart {
    color: rgb(42, 42, 100);
}
.icon-cart:hover {
    color: rgb(86, 86, 218);
}
</style>