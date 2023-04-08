import { Component ,Input } from '@angular/core';
import { projects }  from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stories';
  projects = projects;

  storyCrums:any;
  featuresCrumb:any;

  selectedproject: any;

  selectedProjectDetails($event: any) {
    this.selectedproject = $event;
    this.storyCrums = 'Story'
  }

  selectedstories: any;

  selectedStoriesDetails($event: any) {
    this.selectedstories = $event;
    this.featuresCrumb = 'Features'
  }
}
