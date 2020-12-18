import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	private loginPage = '/login';
	error = {};
	submitClicked = false;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
	}

	signup(form, e: Event) {
		//   e.preventDefault();
		this.submitClicked = true;
		const fields = form.value;

		console.log(fields);

		if (!fields.email || !fields.name || !fields.password) { return this.error['message'] = 'Please fill all the fields!' }

		this.authService.signup({ name: fields.name, email_id: fields.email, password: fields.password,  }).subscribe(
			res => {
				console.log(res);
				this.router.navigate([this.loginPage]);
			},
			err => {
				if (err) this.error['response'] = err.error;

				if (err.status == 400) this.error['message'] = `${err.error.trim()}. Please try again!`;
			}
		);


	}

}
