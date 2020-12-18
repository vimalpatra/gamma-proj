import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Job } from '../models/job';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})


export class ExperienceComponent implements OnInit {

	name = '';
	jobs: Job[];
	addWorkFormVisibility = false;
	error = {};
	private loginPage = '/login';

	@ViewChild('jobForm', { static: false}) jobForm: HTMLFormElement;

	constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.getUserName();
		this.getUserWork();
	}

	getUserName() {
		this.userService.getUsername().subscribe(res => this.name = res.name);
	}

	getUserWork() {
		this.userService.getUserJobs().subscribe(res => this.jobs = res.past_jobs);
	}

	showAddWorkForm() {
		this.addWorkFormVisibility = true;
	}

	hideAddWorkForm() {
		this.addWorkFormVisibility = false;
	}

	addJob(form, e: Event) {
		//   e.preventDefault();
		const { company, jobTitle, location, date, description } = form.value;

		console.log(arguments);

		if (!company || !jobTitle || !location || !date || !description) { 
			 this.error['message'] = 'Please fill all the fields!';
			 console.log(this.error['message']);
			 return;
		}

		this.userService.addUserJob({
			company_name: company,
			title: jobTitle,
			start_date: date,
			location: location,
			description: description
		}).subscribe(
			res => {
				this.getUserWork();
				this.jobForm.reset();
			},
			err => {
				if (err) {
					this.error['response'] = err.error;
					console.error(err.error);
				}

				if (err.status == 400) this.error['message'] = `${err.error.trim()}. Please try again!`;
			}
		);


	}

	logout() {
		this.router.navigate([this.loginPage]);
	}

}
