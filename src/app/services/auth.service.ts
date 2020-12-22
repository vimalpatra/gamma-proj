import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConstantsService } from '../config/constants.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private _email;
	private get user_email() {
		return localStorage.getItem('user_email');
	}

	private set user_email(e) {
		localStorage.setItem('user_email', e);
		this._email = e;
	}

	constructor(private http: HttpClient, private constants: ConstantsService) { }

	isAuthenticated() {
		return new Promise(
			(resolve, reject) => this.user_email ? resolve(true) : resolve(false)
		);
	}

	signup(userData) {
		const url = `${this.constants.baseUrl}/sign_up`;

		return this.http.post(url, userData).pipe( map(res => res) );
	}

	login(userData) {
		const url = `${this.constants.baseUrl}/login`;

		return this.http.post(url, userData).pipe(
			map((res: any) => this.user_email = res.email_id )
		);
	}

}
