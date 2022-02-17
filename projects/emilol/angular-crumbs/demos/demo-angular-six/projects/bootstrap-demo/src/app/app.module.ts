import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent } from 'src/app/shared/about/about.component';
import { HomeComponent } from 'src/app/shared/home/home.component';
import { GitHubComponent } from 'src/app/shared//github/github.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from 'src/app/shared//github/repo-list/repo-list.component';
import { RepoDetailComponent } from 'src/app/shared//github/repo-detail/repo-detail.component';
import { OrganisationComponent } from 'src/app/shared/github/organisation/organisation.component';

import { APP_RESOLVER_PROVIDERS } from 'src/app/app.resolver';

const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    GitHubComponent,
    OrganisationComponent
  ],
  imports: [
    BrowserModule,
    BreadcrumbModule,
    FormsModule,
    HttpModule,
    CommonModule,
    NoopAnimationsModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
    APP_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
