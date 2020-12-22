import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Job } from '../models/job';
import { ConstantsService } from '../config/constants.service';


@Injectable({
	providedIn: 'root'
})
export class UserService {

	private get user_email() {
		return localStorage.getItem('user_email');
	}

	constructor(private http: HttpClient, private constants: ConstantsService) { }

	getUsername() {
		const url = `${this.constants.baseUrl}/user?email_id=${this.user_email}`;

		return this.http.get< { name: string } >(url).pipe( map(res => res) );
	}

	getUserJobs() {
		const url = `${this.constants.baseUrl}/user_job_history?email_id=${this.user_email}`;

		return this.http.get< { past_jobs: Job[] } >(url).pipe( map(res => res) );
	}

	addUserJob(jobData) {
		const url = `${this.constants.baseUrl}/user_job_history`;
		const data = { email_id: this.user_email, ...jobData };

		return this.http.post(url, data).pipe( map(res => res) );
	}

}
