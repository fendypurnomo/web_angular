import { Component, OnInit } from '@angular/core';

// App Title
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CanonicalService } from 'src/app/shared/services';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    const appTitle = this.titleService.getTitle();

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let child = this.route.firstChild;

        while (child?.firstChild) {
          child = child?.firstChild;
        }

        if (child?.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return appTitle;
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });

    this.canonicalService.setCanonicalURL();
  }
}