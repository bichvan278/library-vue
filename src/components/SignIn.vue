<template>
        <div class="homepage">
        <div class="container">
            <div class="row" style="margin-left: -220px;">
                <div class="col-md-6 vue-tempalte" style=" margin-top: 180px; ">

                    <h2>SIGN IN</h2>
                    
					<form @submit.prevent="onSubmitsignin">
                        <div class="form-group">
                            <input type="text" name="u_name" v-model="u_name" placeholder="Username" class="form-control form-control-lg" />
                        </div>

                        <div class="form-group">
                            <input type="password" name="p_word" v-model="p_word" placeholder="Password" class="form-control form-control-lg" />
                        </div>

                        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
                        <br/>
                        <router-link :to="{name: 'signup'}" class="sign-up" style="margin-left: 65px;">Sign up</router-link>

                        <router-link :to="{name: 'forgotpassword'}" class="forgot-password">Forgot password ?</router-link>

                        <div class="social-icons">
                            <ul>
                                <li><a href="#"><i class="fa fa-google"></i></a></li>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>
                <div class="col-md-6"></div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
	name: 'SignIn',
	data () {
		return {
			u_name: '',
			p_word: ''
		};
	},
	methods: {
		async onSubmitsignin () {

			const userCred = {
				username: this.u_name,
				password: this.p_word
			};

			// Constant URL value for JAAS API
			// const API_URL = 'http://admin:12345@127.0.0.1:5984/users/';

			// // const changeJSON = JSON.stringify(userCred);

			// // const changeObj = {
			// // 	username: changeJSON.u_name,
			// // 	password: changeJSON.p_word
			// // };

			// await axios({
			// 	method: 'POST',
			// 	url: API_URL,
			// 	withCredentials: true,
			// 	data: {
			// 		username: userCred.username,
			// 		password: userCred.password
			// 	},
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	}
			// }).then(result => {
			// 	console.warn(result);
			// 	console.log("Successful");
				if (userCred.username !== '' && userCred.password !== '') {
					if (userCred.username === 'test123' && userCred.password === 'test123') {
						this.$emit('authenticated', true);
						this.$router.replace({ name: 'homepage' });
					} else {
						console.log('The username and / or password is incorrect');
					}
				} else {
					console.log('A username and password must be present');
				}
				
			// 	// if (result.status == 200) {
			// 	// 	localStorage.setItem('username', JSON.stringify(result.data.username));
			// 	// 	localStorage.setItem('password', JSON.stringify(result.data.password));

			// 	// 	this.$store.commit('storeUserObj', {
			// 	// 		username: result.data.username,
			// 	// 		password: result.data.password
			// 	// 	});
			// 	// }

			// 	console.log(result);

			// 	this.$router.push({name: 'homepage'});
				
			// },error => {
			// 	console.error(error);
			// });
			
		}
	}
};
</script>