<template>
    <div class="u-profile">
        <div class="nav-head">
            <header-comp></header-comp>
        </div>
        <div class="container">
            <div class="row">
                <p class="title">Thông tin người dùng</p>
                <hr>
                    <form class="profile-form row">
                        <div class="form-group">
                            <label for="usr">Name:</label>
                            <input required="true" type="text" class="form-control" id="usr">
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input required="true" type="email" class="form-control" id="email">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone: </label>
                            <input type="text" class="form-control" id="phone">
                        </div>
                        <div class="form-group">
                            <label for="dof">Date of Birth:</label>
                            <input required="true" type="date" class="form-control" id="dob">
                        </div>
                        <div class="form-group">
                            <label for="pwd">New Password:</label>
                            <input required="true" type="password" class="form-control" id="pwd">
                        </div>
                       
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnSave" value="SAVE" />
                        </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComp from './../partial/HeaderComp.vue';

export default {
    name: 'UserProfile',
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

.btnSave
{
    width: 15%;
    border-radius: 1rem;
    padding: 1%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
    margin-left: 450px;
}

</style>