<template>
     <div class="homepage">
        <div class="container">
            <div class="row">
                <div class="col-md-6 vue-tempalte" style=" margin-top: 180px;">
            
                    <h2>SIGN UP</h2>

                    <form @submit.prevent="onSubmitSignup">
                        <div class="form-group">
                            <input type="text" name="e_mail" v-model="e_mail" placeholder="Email" class="form-control form-control-lg"/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="u_name" v-model="u_name" placeholder="Username" class="form-control form-control-lg"/>
                        </div>
                        <div class="form-group">
                            <input type="password" name="p_word" v-model="p_word" placeholder="Password" class="form-control form-control-lg"/>
                        </div>
                        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
                        <br>
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
import { defineComponent } from '@vue/composition-api';
import axios from "axios";

export default defineComponent({
	name: 'SignUp',
	data () {
		return {
			e_mail: '',
			u_name: '',
			p_word: ''
		};
	},
	methods: {
		async onSubmitSignup (){

			// Constant URL value for JAAS API
			const API_URL = 'http://admin:12345@localhost:5984/users/';

			const userCred = {
				email: this.e_mail,
				username: this.u_name,
				password: this.p_word
			};

			// const changeJSON = JSON.stringify(userCred);

			// const changeObj = {
			// 	username: changeJSON.u_name,
			// 	password: changeJSON.p_word
			// };

			await axios({
				method: 'POST',
				url: API_URL,
				withCredentials: true,
				data: {
					email: userCred.email,
					username: userCred.username,
					password: userCred.password
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response => {
				console.log(response);
				console.log('An Account is created.');

			}),error => {
				console.error(error);
			};
		}
	}
});
</script>
