import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';

@Component({
	selector: 'app-add-tutorial',
	templateUrl: './add-tutorial.component.html',
})
export class AddTutorialComponent {
	tutorial: Tutorial = {
		title: '',
		description: '',
		published: false,
	};

	submitted = false;

	constructor(private tutorialService: TutorialService) {}

	saveTutorial(): void {
		const data = {
			title: this.tutorial.title,
			description: this.tutorial.description,
		};

		this.tutorialService.create(data).subscribe(
			(response) => {
				this.submitted = true;
				console.log(response);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	newTutorial(): void {
		this.submitted = false;
		this.tutorial = {
			title: '',
			description: '',
			published: false,
		};
	}
}
