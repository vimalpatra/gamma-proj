import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private dashboard = '/dashboard';
	error = {};
	submitClicked = false;

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
		localStorage.removeItem('user_email');
	}

	login(form, event: Event) {
		const fields = form.value;
		this.submitClicked = true;

		if (!fields.email || !fields.password) { return this.error['message'] = 'Enter Email & Password to proceed!' }

		this.authService.login({ email_id: fields.email, password: fields.password }).subscribe(
			res => {
				this.router.navigate([this.dashboard]);
			},
			err => {
				if (err) this.error['response'] = err.error;

				if (err.status == 400) this.error['message'] = `${err.error.trim()}. Please try again!`;
			}
		);

	}

}
