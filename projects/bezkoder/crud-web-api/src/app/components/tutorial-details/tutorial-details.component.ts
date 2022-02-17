import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from '../../services/tutorial.service';
import { Tutorial } from '../../models/tutorial.model';

@Component({
	selector: 'app-tutorial-details',
	templateUrl: './tutorial-details.component.html',
})
export class TutorialDetailsComponent implements OnInit {
	currentTutorial: Tutorial = {
		title: '',
		description: '',
		published: false,
	};

	message = '';
	submitted = false;

	constructor(
		private tutorialService: TutorialService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.message = '';
		this.getTutorial(this.route.snapshot.params.id);
	}

	getTutorial(id: string): void {
		this.tutorialService.get(id).subscribe(
			(data) => {
				this.currentTutorial = data;
				console.log(data);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	updatePublished(status: boolean): void {
		const data = {
			title: this.currentTutorial.title,
			description: this.currentTutorial.description,
			published: status,
		};

		this.tutorialService.update(this.currentTutorial.id, data).subscribe(
			(response) => {
				this.currentTutorial.published = status;
				this.message = response.message.success;
				this.submitted = true;
				console.log(response);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	updateTutorial(): void {
		this.tutorialService
			.update(this.currentTutorial.id, this.currentTutorial)
			.subscribe(
				(response) => {
					// this.message = response.message.success;
					// this.router.navigate(['/tutorials']);
					window.history.back();
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	deleteTutorial(): void {
		this.tutorialService.delete(this.currentTutorial.id).subscribe(
			(response) => {
				// this.router.navigate(['/tutorials']);
				window.history.back();
				console.log(response);
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
