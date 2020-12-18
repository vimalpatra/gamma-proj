import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private baseUrl = 'http://34.121.49.132/';

	private _email;
	private get user_email() {
		return localStorage.getItem('user_email');
	}

	private set user_email(e) {
		localStorage.setItem('user_email', e);
		this._email = e;
	}

	constructor(private http: HttpClient) { }

	isAuthenticated() {
		return new Promise(
			(resolve, reject) => this.user_email ? resolve(true) : resolve(false)
		);
	}

	signup(userData) {
		const url = `${this.baseUrl}/sign_up`;

		return this.http.post(url, userData).pipe(
			map(res => {
				console.log(res);
				// return this.extractData(res, this.http);
			})
		);
	}

	login(userData) {
		const url = `${this.baseUrl}/login`;

		return this.http.post(url, userData).pipe(
			map((res: any) => {
				console.log(res);
				this.user_email = res.email_id;
			})
		);
	}

}
